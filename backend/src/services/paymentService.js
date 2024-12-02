import Stripe from "stripe";
import { Order } from "../models/Order.js";

// Inisialisasi Stripe dengan kunci API
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Fungsi untuk membuat sesi pembayaran Stripe
const createPaymentSession = async (orderId) => {
  try {
    // Ambil order berdasarkan ID
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }

    // Buat sesi checkout Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: order.orderItems.map((item) => ({
        price_data: {
          currency: "usd", // Gunakan mata uang sesuai dengan kebutuhan
          product_data: {
            name: item.product.name,
            description: item.product.description,
          },
          unit_amount: item.product.price * 100, // Stripe membutuhkan harga dalam satuan sen
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
      metadata: {
        orderId: order._id.toString(),
      },
    });

    // Mengembalikan URL sesi pembayaran Stripe
    return session.url;
  } catch (error) {
    throw new Error(`Failed to create payment session: ${error.message}`);
  }
};

// Fungsi untuk menangani webhook pembayaran
const handlePaymentWebhook = async (req) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Verifikasi webhook dari Stripe
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    throw new Error("Webhook signature verification failed");
  }

  // Tangani event yang relevan, misalnya checkout.session.completed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const orderId = session.metadata.orderId;

    // Perbarui status order menjadi 'Paid'
    const order = await Order.findById(orderId);
    if (order) {
      order.status = "Paid";
      await order.save();
    }
  }

  // Mengembalikan response sukses ke Stripe
  return { received: true };
};

export { createPaymentSession, handlePaymentWebhook };

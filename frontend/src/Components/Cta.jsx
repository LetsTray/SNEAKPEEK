import React from 'react'

const Cta = () => {
  return (
    <div className=" flex text-white border border-neonPurple bg-neonPurple h-64 items-center justify-around">
        <p className=" text-5xl"><b>Medium length heading<br/>goes here</b></p>
        <div className=" block text-base">
            <p className=" my-3"><b>Subscribe</b></p>
            <p className=" my-3">Join our newsletter to stay up to date on features and releases.</p>
            <div className=" flex gap-4">
                <input placeholder="Enter your email" type="" className=" outline-none p-2 w-96 text-black"/>
                <button className=" bg-neonPurple text-white px-6 border border-white">Subscribe</button>
            </div>
            <p className=" mt-4 text-xs">By subscribing you agree with our <u>Privacy Policy</u> and profide consent to receive updates <br/> from our company.</p>
        </div>
    </div>
  )
}

export default Cta

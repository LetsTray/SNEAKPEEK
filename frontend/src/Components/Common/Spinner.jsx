import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const SomeComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      setData({ message: "Data berhasil dimuat" }); 
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />; 
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-gray-800">{data.message}</h1>{" "}
    </div>
  );
};

export default SomeComponent;

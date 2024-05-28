"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [goods, setGoods] = useState([]);

  const getGoods = async () => {
    await axios
      .get(`http://localhost:3001/goods`)
      .then((response) => {
        setGoods(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGoods();
  }, []);
  return (
    <main className="container mx-auto">
      <h2 className="text-center">Goods</h2>
      {goods.length > 0 ? (
        <section className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {goods.map((good, index) => (
            <div key={index} className="border border-gray-200 p-5">
              <div className="bg-sky-500 h-10"></div>
              <h3 className="">{good.name}</h3>
              <h3 className="">Rp {good.price.toLocaleString("id-ID")}</h3>
            </div>
          ))}
        </section>
      ) : (
        <p className="">Barang Tidak Ada</p>
      )}
    </main>
  );
}

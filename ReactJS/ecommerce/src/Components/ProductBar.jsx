import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import { useEffect } from "react";
import axios from "axios";

const ProductBar = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const FetchProducts = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    FetchProducts();
  }, []);

  return (
    <>
      <section className="p-6 flex items-center justify-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {product.map((data) => {
            return (
              <Link to={`/product/${data.id}`} key={data.id}>
                <ProductCard product_data={data} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductBar;

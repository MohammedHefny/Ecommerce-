import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Home/Card";

const Shop = () => {
  const params = useParams();
  console.log(params, "param");
  const [product, setProduct] = useState({});
  const getSinglepeoduct = () => {
    return fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  useEffect(() => {
    getSinglepeoduct();
  }, []);
  return (
    <>
      <div className="col-12">
        <ProductCard
          image={product.image}
          category={product.category}
          description={product.description}
          price={product.price}
          title={product.title}
          id={product.id}
        ></ProductCard>
      </div>
    </>
  );
};
export default Shop;

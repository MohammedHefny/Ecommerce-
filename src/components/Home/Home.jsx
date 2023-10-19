import { useEffect, useState } from "react";
import ProductCard from "./Card";
// import { ProductCard } from "react-bootstrap";
import Loader from "../Spinner/Spinner";
import "./Home.css";
const Home = () => {
  const [products, setProduct] = useState([]);
  const [loading, setloading] = useState(true);

  const getProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  useEffect(() => {
    getProducts();
    setloading(false);
  }, []);
  if (loading == true) {
    return <Loader />;
  }
  return (
    <>
      <div className="">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3">
                <ProductCard
                  image={product.image}
                  category={product.category}
                  description={product.description.slice(0, 40) + "   ..."}
                  price={product.price}
                  title={product.title}
                  id={product.id}
                ></ProductCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;

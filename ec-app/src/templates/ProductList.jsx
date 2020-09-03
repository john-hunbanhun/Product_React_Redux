import React, { useEffect } from "react";
import { ProductCard } from "../component/Products/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducks/products/operation";
import { getProducts } from "../reducks/products/selector";
import { push } from "connected-react-router";
import { PrimaryButton } from "../component/UIkit/index";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                images={product.images}
                price={product.price}
              />
            );
          })}
      </div>
      <PrimaryButton
        label={"商品登録ページ"}
        onClick={() => {
          dispatch(push("/product/edit"));
        }}
      />
    </section>
  );
};
export default ProductList;

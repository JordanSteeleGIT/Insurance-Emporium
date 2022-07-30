import React from "react";
import "../../Styles/Products/Products.css";
import { CARD_DATA } from "../../Data/ProductData";
import Product from "./Product";

const EmporiumProducts = () => {
  return (
    <section>
      <div className="wrapper">
        <h1>THE INSURANCE EMPORIUM PRODUCTS</h1>
        <div className="products-grid">
          {CARD_DATA?.map((product, index) => {
            return (
              <Product
                key={index}
                titleData={product.titleData}
                paragraph={product.paragraph}
                buttonData={product.ctaLinks}
                imgData={product.imgData}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmporiumProducts;

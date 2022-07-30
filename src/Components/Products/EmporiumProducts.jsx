import React from "react";
import "../../Styles/Products/Products.css";
import { CARD_DATA } from "../../Data/ProductData";

const EmporiumProducts = () => {
  return (
    <section>
      <div className="wrapper">
        <h1>THE INSURANCE EMPORIUM PRODUCTS</h1>
        <div className="products-grid">
          {CARD_DATA?.map((product, index) => {})}
        </div>
      </div>
    </section>
  );
};

export default EmporiumProducts;

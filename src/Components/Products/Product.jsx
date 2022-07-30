import React from "react";

const Product = ({ titleData, paragraph, buttonData, imgData }) => {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="card-upper">
          <h2>
            <a href={titleData.titleLink}>{titleData.title}</a>
          </h2>
          <p>{paragraph}</p>
          {buttonData.map((data, index) => {
            return (
              <div className="button-section" key={index}>
                {data.ctaTitle && <h3>{data.ctaTitle}</h3>}
                <div>
                  {data.ctaButtonLink && (
                    <a href={data.ctaButtonLink}>
                      <button>GET QUOTE</button>
                    </a>
                  )}
                  <a href={data.ctaLearnMoreLink}>Learn More</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-lower">
          <img src={`Images/${imgData.imgURL}`} alt={imgData.imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default Product;

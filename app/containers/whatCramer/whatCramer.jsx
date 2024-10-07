import React from 'react';
import '../../globals.css';

import './whatCramer.css';
import Feature from '../../components/feature/Feature';

const WhatCramer = () => {
  return (
    <div className="cramer__whatcramer section_margin" id="wcramer">
      <div className="cramer__whatcramer-heading">
        <h1 className="gradient__text">
          Why Cramer?
        </h1>
      </div>
      <div className="cramer__whatcramer-container">
        <Feature title="Fish Sciences" texts={["Solving fisheries and natural resource challenges with science for more than 30 years."]}/>
        <Feature title="Get Deeper Answers" texts={["We strive to find innovative solutions that are both practical and effective."]}/>
        <Feature title="Genetics" texts={["Cutting edge molecular biology and genetic analyses for the natural resources community."]}/>
      </div>
    </div>
  );
}

export default WhatCramer;

// import React from "react";
// import AddToCart from "./AddToCart";
// import styles from "./ProductCard.module.css";

// styles.card;

// const ProductCard = () => {
//   return (
//     <div className="p-6 my-5 bg-sky-400 text-white text-xl hover: bg-sky-500">
//       <AddToCart />
//     </div>
//   );
// };

// export default ProductCard;

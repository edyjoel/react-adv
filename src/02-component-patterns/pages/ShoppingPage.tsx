import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/";

import '../styles/custom-styles.css';

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={""} activeClass="active" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" />
          <ProductTitle title={""} className="text-white" activeClass="active" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage />
          <ProductTitle title={""} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

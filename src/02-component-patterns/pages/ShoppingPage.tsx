import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/";

import '../styles/custom-styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange, products} = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage img={product.img} className="custom-image" />
              <ProductTitle title={product.title} className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }

        {/* <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={""} activeClass="active" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product2}
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
        </ProductCard> */}
      </div>
      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{
                width: "100px",
              }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          ))
        }
      </div>

      <div>
        <code>
          {JSON.stringify(shoppingCart, null, 5)}
        </code>
      </div>
    </div>
  );
};

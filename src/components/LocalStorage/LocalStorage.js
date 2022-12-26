import React, { useEffect, useState } from "react";
import "./LocalStorage.css";

const LocalStorage = () => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    setSavedProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  const handleSubmit = () => {
    if (productName.length === 0 || productQuantity.length === 0) {
      console.log("Empty");
      return;
    }

    let products = localStorage.getItem("products");
    if (products) {
      products = JSON.parse(localStorage.getItem("products"));
    } else {
      localStorage.setItem(
        "products",
        JSON.stringify([{ productName, productQuantity }])
      );
    }

    const newProducts = { productName, productQuantity };
    products.push(newProducts);
    setSavedProducts(products);

    setProductName("");
    setProductQuantity("");

    localStorage.setItem("products", JSON.stringify(products));
  };

  return (
    <div style={{ padding: "50px" }}>
      <div className="form">
        <input
          type="text"
          placeholder="Product name"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="number"
          placeholder="Product Quantity"
          onChange={(e) => setProductQuantity(e.target.value)}
          value={productQuantity}
        />
        <button onClick={handleSubmit}>Save to local storage</button>
      </div>

      <div className="saved-products-list">
        <h4>Saved Products: {savedProducts.length}</h4>
        <ul style={{ maxWidth: "300px", margin: "0 auto", textAlign: "left" }}>
          {savedProducts.map((product, index) => (
            <li key={index}>
              {product.productName}: {product.productQuantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocalStorage;

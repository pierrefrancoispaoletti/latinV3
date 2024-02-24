import React from "react";
import { CheckBoxContainer } from "../ProductModal/product-modal.style";

const WinePartProductModal = ({ couleur, setProduct }) => {
  return (
    <CheckBoxContainer>
      {couleur.map((color) => (
        <div
          key={color.value}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <label
            htmlFor={color.value}
            style={{ fontWeight: "bold", fontSize: "1.2em" }}
          >
            {color.value.toUpperCase()}
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              name={color.value}
              type="checkbox"
              checked={color.isChecked}
              value={color.value}
              onChange={() =>
                setProduct((prevState) => ({
                  ...prevState,
                  ...(color.isChecked = !color.isChecked),
                }))
              }
              style={{ height: "25px", width: "25px", marginRight: "10px" }}
            />
            <input
              type="number"
              pattern="\\d*"
              step={0.1}
              value={color.price}
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  ...(color["price"] = e.target.value),
                }))
              }
              style={{ width: "50px", marginRight: "10px" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>€</span>
          </div>
        </div>
      ))}
    </CheckBoxContainer>
  );
};

export default WinePartProductModal;

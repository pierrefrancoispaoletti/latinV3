import React from "react";
import AdminButtonBar from "../AdminButtonBar/AdminButtonBar";
import {
  TableauContent,
  WineColorContainer,
  WineItemElement,
} from "../TableauHomePage/tableau-homepage.style";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import { useSelector } from "react-redux";
import WineElement from "../WineElement/WineElement";
import TranslatorComponent from "../TranslatorComponent/TranslatorComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";

const ProductElement = ({ product, index, length }) => {
  const { _id, price, description, title, visible, category, couleur } =
    product;
  const user = useSelector(selectCurrentUser);

  const wineContent = (couleur) => {
    if (couleur) {
      if (
        couleur.some((color) => color.isChecked && color.value === "au verre")
      ) {
        return "AU VERRE";
      } else {
        return "75 cl";
      }
    }
    return "";
  };
  const userLang = navigator.language || navigator.userLanguage;
  const isFrench = userLang.includes("fr");
  return (
    <TableauContent
      visible={user?.role === "isAdmin" || visible}
      category={category}
      last={index === length - 1}
    >
      {user && user.role === "isAdmin" && (
        <AdminButtonBar
          _id={_id}
          product={product}
        />
      )}
      <h3 className='title'>
        <span style={{ display: "inline-block" }}>{`${
          visible ? "" : "CACHÉ : "
        } ${title}`}</span>
        {!isFrench && (
          <span style={{ display: "inline-block", fontSize: "17px" }}>
            {title?.length > 0 && (
              <TranslatorComponent>
                {title?.replace("\n", " ")}
              </TranslatorComponent>
            )}
          </span>
        )}
        {category !== "cave" || couleur.every((color) => !color.isChecked) ? (
          <span className='price'>{price?.toFixed(2)} €</span>
        ) : (
          <WineElement
            couleur={couleur}
            wineContent={wineContent}
          />
        )}
      </h3>
      <p className='description'>
        {description?.length > 0 && (
          <TranslatorComponent>
            {description?.replace("\n", " ")}
          </TranslatorComponent>
        )}
      </p>
    </TableauContent>
  );
};

export default ProductElement;

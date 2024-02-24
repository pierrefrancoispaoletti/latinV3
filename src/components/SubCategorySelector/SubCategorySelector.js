import React, { useState } from "react";
import {
  OpenSubMenuChevron,
  SubCategoryFilterContainer,
} from "../TableauHomePage/tableau-homepage.style";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SubCategorySelector = ({ filter, findCategory, setFilter }) => {
  const [open, setOpen] = useState(false);

  const handleSetFilter = (value) => {
    setFilter(value);
    // if (value === "") {
    //   const selectedMenuItem = document.querySelector(".menu.selected");
    //   if (selectedMenuItem) {
    //     selectedMenuItem.parentElement.prepend(selectedMenuItem);
    //   }
    // }
  };

  return (
    <SubCategoryFilterContainer
      className={`subcategory-container ${open ? "isOpen" : "isClosed"}`}
    >
      <div
        className={`menu ${filter === "" ? "selected" : ""}`}
        onClick={() => handleSetFilter("")}
      >
        <span>Tous</span>
      </div>
      {findCategory?.subCategory?.map((sub) => (
        <div
          key={sub.name}
          className={`menu ${filter === sub.slug ? "selected" : ""}`}
          onClick={() => handleSetFilter(sub.slug)}
        >
          <span className="subcategory-name">{sub.name}</span>
          {sub.logo && <img width={sub.width} src={sub.logo} alt={sub.alt} />}
        </div>
      ))}
      <OpenSubMenuChevron
        className="chevron"
        icon={open ? faChevronUp : faChevronDown}
        size="2x"
        onClick={() => setOpen(!open)}
      />
    </SubCategoryFilterContainer>
  );
};

export default SubCategorySelector;

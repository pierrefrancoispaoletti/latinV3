import { useLayoutEffect, useCallback } from "react";
import { categories } from "../data/categories/categories";
import { useEffect } from "react";

const useRemoveDuplicateSpans = () => {
  const removeDuplicateSpans = (classname) => {
    const spans = document.querySelectorAll(`.${classname}`);

    console.log(spans);
    spans.forEach((span, index) => {
      if (index !== 0) span.remove();
    });
  };

  useEffect(() => {
    const classNames = categories
      .flatMap((cat) => cat.subCategory?.map((sc) => sc.slug))
      .filter(Boolean);
    classNames.forEach(removeDuplicateSpans);
  });
};

export default useRemoveDuplicateSpans;

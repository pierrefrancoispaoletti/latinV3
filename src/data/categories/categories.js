import { faWineBottle, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoBagel from "../../assets/images/bagel.png";
import logoSalade from "../../assets/images/salade.png";
import logoVin from "../../assets/images/vin.png";
import logoBoissons from "../../assets/images/boissons.png";
const logoSmall = "20px";
export const categories = [
  {
    name: "Nos Salades",
    title: "Nos salades",
    link: "/",
    slug: "salades",
  },
  {
    name: "Spécialités Corses",
    title: "Spécialités Corses",
    link: "/products/corses",
    slug: "specialites-corses",
  },
  {
    name: "Bruschettas",
    title: "Bruschettas",
    link: "/products/bruschettas",
    slug: "bruschettas",
  },
  {
    name: "Menu-Enfant",
    title: "Menu-Enfant",
    link: "/products/menu-enfant",
    slug: "menu-enfant",
  },
  {
    name: "Nos Viandes",
    title: "Viandes",
    link: "/products/viandes",
    slug: "viandes",
  },
  {
    name: "Nos Poissons",
    title: "Poissons",
    link: "/products/poissons",
    slug: "poissons",
  },
  {
    name: "Végétarien",
    title: "Végétarien",
    link: "/products/vegetariens",
    slug: "vegetariens",
  },
  {
    name: "Nos Desserts",
    title: "Desserts",
    link: "/products/desserts",
    slug: "desserts",
  },
  // {
  //   name: "Vitrine Salée",
  //   // icon: <FontAwesomeIcon icon={faSandwich} size="2x" />,
  //   link: "/products/la-vitrine-salee",
  //   slug: "la-vitrine-salee",
  //   subCategory: [
  //     { name: "Panini", slug: "panini" },
  //     { name: "Croques", slug: "croques" },
  //     { name: "Hot-dog", slug: "hotdog" },
  //     { name: "Bagels", slug: "bagels" },
  //   ],
  // },
  // {
  //   name: "Vitrine Sucrée",
  //   // icon: <FontAwesomeIcon icon={faCookie} size="2x" />,
  //   link: "/products/la-vitrine-sucree",
  //   slug: "la-vitrine-sucree",
  // },
];

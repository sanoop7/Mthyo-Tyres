import { createContext } from "react";

export const FeatureCategoryContext = createContext([
  {
    name: "STANDARD SERVICE",
    url: "/category/men",
    id: 1,
    desc: ["Oil Change", "Oil Filter Replacement", "Car Wash"],
  },

  {
    name: "SUPERB SERVICE",
    url: "/category/kids",
    id: 3,
    desc: [
      "Oil Change",
      "Oil Filter Replacement",
      "Air Filter Replacement ",
      "AC Filter Replacement",
      "Spark Plug Replacement",
      "Brake Pads Replacement",
      "Computer Diagnostic",
      "AC Gas Top-Up",
      "Windscreen Washer Fluid",
      "Power Steering Fluid",
      "Car Wash",
    ],
  },
  {
    name: "PREMIUM SERVICE",
    url: "/category/women",
    id: 2,
    desc: [
      "Oil Change",
      "Oil Filter Replacement",
      "Air Filter Replacement ",
      "Computer Diagnostic",
      "AC Gas Top-Up",
      "Windscreen Washer Fluid",
      "Power Steering Fluid",
      "Car Wash",
    ],
  },
]);

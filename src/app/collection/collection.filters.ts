export const collectionFilters = {
  categories: {
    title: "CATEGORIES",
    category: [
      {
        name: "MEN",
        index: 0,
        class: "collapse item-1",
        href: "#accordion-1 .item-1",
        items: [
          { name: "T-shirts", checked: false },
          { name: "Stripped Shirts", checked: false },
          { name: "Half Shirts", checked: false },
          { name: "Former Shirts", checked: false },
          { name: "Blazers", checked: false },
          { name: "Jackets", checked: false },
          { name: "Jeans", checked: false },
        ],
      },
      {
        name: "WOMEN",
        index: 1,
        class: "collapse item-2",
        href: "#accordion-1 .item-2",
        items: [
          { name: "Lady T-shirts", checked: false },
          { name: "Women's Dress", checked: false },
          { name: "Exclusive Pants", checked: false },
          { name: "Branded Skirts", checked: false },
        ],
      },
      {
        name: "KIDS",
        index: 2,
        class: "collapse item-3",
        href: "#accordion-1 .item-3",
        items: [
          { name: "Kids T-shirts", checked: false },
          { name: "Kids Dress", checked: false },
          { name: "Kids Pants", checked: false },
          { name: "Kids Skirts", checked: false },
          { name: "Kids Tops", checked: false },
        ],
      },
      {
        name: "SHOES & BAGS",
        index: 3,
        class: "collapse item-4",
        href: "#accordion-1 .item-4",
        items: [
          { name: "Branded Bags", checked: false },
          { name: "Exclusive Bags", checked: false },
          { name: "Branded Shoes", checked: false },
          { name: "Exclusive Shoes", checked: false },
        ],
      },
      {
        name: "JEWELRY & WATCHES",
        index: 4,
        class: "collapse item-5",
        href: "#accordion-1 .item-5",
        items: [
          { name: "Earrings", checked: false },
          { name: "Watches", checked: false },
          { name: "Bangles", checked: false },
        ],
      },
      {
        name: "ACCESSORIES",
        index: 5,
        class: "collapse item-6",
        href: "#accordion-1 .item-6",
        items: [
          { name: "I-Phone", checked: false },
          { name: "Mobile", checked: false },
          { name: "Tablet", checked: false },
          { name: "Laptop", checked: false },
        ],
      },
    ],
  },

  priceFilter: {
    title: "PRICE RANGE",
    subTitle: "PRICE",
    filterPrice: { minPrice: 0, maxPrice: 0 },
  },
  colors: {
    title: "COLORS",
    colors: ["red", "purple", "orange", "blue", "brown"],
  },
  sizeOptions: {
    title: "SIZES",
    sizes: ["XS", "S", "M", "LG", "XL"],
  },

  collectionFilter: {
    categories: [
      {
        category: {
          name: "MEN",
          items: [{}],
        },
      },
    ],
  },
};

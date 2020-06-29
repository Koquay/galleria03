// import { ReducerType } from "../../redux/reducerTypes";

import { ProductsActionTypes } from "../product/product.action";

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionTypes.ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case ProductsActionTypes.GET_PRODUCT:
      return {
        ...state,
        product: state.products.find(
          (product) => product._id === action.productId
        ),
      };

    case ProductsActionTypes.GET_RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: [...state.products]
          .filter((relProduct) => relProduct._id !== state.product._id)
          .sort()
          .slice(0, 5),
      };

    case ProductsActionTypes.ADD_MINMAX_PRICES:
      let minMaxPrices;

      if (!state.minMaxPrices.minPrice) {
        minMaxPrices = setMinMaxPrices(action.products);
        return {
          ...state,
          minMaxPrices: minMaxPrices,
        };
      }

    case ProductsActionTypes.GET_MINMAX_PRICES:
      return state;

    // case ReducerType.SET_PRODUCT:
    //   return {
    //     ...state,
    //     product: state.products.find((product) => product._id === payload),
    //   };

    default:
      return state;
  }
};

const getRelatedProducts = (state) => {
  let relatedProducts = [];
  let x = 0;

  for (let product of state.products.sort()) {
    relatedProducts.push(product);
    if (++x === 4) break;
  }
  return relatedProducts;
};

const setMinMaxPrices = (products) => {
  let priceArray = [];

  products.map((product) => {
    priceArray.push(product.price);
  });

  priceArray = priceArray.sort();
  const maxPrice = priceArray.pop();
  const minPrice = priceArray.shift();

  return { minPrice, maxPrice };
};

const initialState = {
  products: [],
  product: { _id: 0 },
  relatedProducts: [],
  minMaxPrices: { minPrice: 0, maxPrice: 0 },
};

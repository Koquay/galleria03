// import { ReducerType } from "../../redux/reducerTypes";

import { ProductsActionTypes } from "../collection/collection.action";

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionTypes.ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    // case ProductsActionTypes.

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
  product: {},
  minMaxPrices: { minPrice: 0, maxPrice: 0 },
};

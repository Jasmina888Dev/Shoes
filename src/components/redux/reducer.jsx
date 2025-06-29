const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const updatedProducts = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(updatedProducts));
      return {
        ...state,
        product: updatedProducts,
      };

    case "ADD_BASKET":
      const res = state.basket.find((el) => el.id === action.payload.id);
      if (!res) {
        const result = [...state.basket, action.payload];
        localStorage.setItem("basket", JSON.stringify(result));
        return { ...state, basket: result };
      } else {
        alert("Error 404: Товар мурда эле кошулган!");
        return state;
      }

    case "DELETE_BASKET":
      let filter = state.basket.filter((el) => el.id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(filter));
      return { ...state, basket: filter };

    default:
      return state;
  }
};

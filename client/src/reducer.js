export const initialState = {
  basket: [],
  user: null,
};

//Selector to add up total cost of basket items
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const updateLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOAD_PREVIOUS_BASKET":
      //CHECK LOCAL STORAGE FOR DATA
      const existingBasketStringified = localStorage.getItem("basket");

      //IF DATA THEN LOAD BASKET
      if (existingBasketStringified) {
        return {
          ...state,
          basket: JSON.parse(existingBasketStringified),
        };
      } else {
        //return existing state
        return {
          ...state,
        };
      }

    //Add to basket handler
    case "ADD_TO_BASKET":
      //CREATE UPDATED BASKET ARRAY
      const basket = [...state.basket, action.item];

      //UPDATE LOCAL STORAGE
      updateLocalStorage("basket", basket);

      //UPDATE APPLICATION STATE
      return {
        ...state,
        basket: basket,
      };

    //remove from basket handler
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it isn't in the cart`
        );
      }
      //UPDATE LOCAL STORAGE
      updateLocalStorage("basket", newBasket);

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

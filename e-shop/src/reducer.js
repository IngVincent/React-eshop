//here we define all the application level states and define actions to make the changes to the state


export const initialState = {
    basket: [],
}

//selector

export const getBasketTotal = (basket) => {
    return(
        basket?.reduce((amount, item) => item.price + amount, 0 ));
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD TO BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        }

    }
}

export default reducer;
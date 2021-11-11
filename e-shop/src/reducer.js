//here we define all the application level states and define actions to make the changes to the state


export const initialState = {
    basket: [],
}

//selector

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
const initialState = {counter: 0}; // начальный стейт

const reducer = (state = initialState, action) => { // функция для изменения стейта, где action - тип действия который мы будем проводить со стейтом
    switch (action.type) {
        case "INC":
            return { // По принципу инкапсуляции возврщаем новый объект со старым state и новым значением value в нём
                ...state,
                counter: state.counter + 1
            };
        case "DEC":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "RND":
            return {
                ...state,
                counter: state.counter * action.payload
            };
        default:
            return state;
    }
}

export default reducer;
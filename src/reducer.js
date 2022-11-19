const initialState = {value: 0}; // начальный стейт

const reducer = (state = initialState, action) => { // функция для изменения стейта, где action - тип действия который мы будем проводить со стейтом
    switch (action.type) {
        case "INC":
            return { // По принципу инкапсуляции возврщаем новый объект со старым state и новым значением value в нём
                ...state,
                value: state.value + 1
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1
            };
        case "RND":
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

export default reducer;
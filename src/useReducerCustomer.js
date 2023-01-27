
export const UseReducerCustomer = (state, action) => {

    switch(action.type) {
        case 'add':
            return [...state, action.payload]
        case 'edit':
            return state.map(row=> row);
        case 'delete':
            return state.filter(row=> row.id !== action.payload);
        default:
            return state;
    }

}
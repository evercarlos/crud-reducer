
export const UseReducerCustomer = (state, action) => {

    switch(action.type) {
        case 'add':
            return [...state, action.payload]
        case 'edit':
            return state = state.map(row=> {
                return  (row.id===action.payload.id) ? action.payload : row;
            });
        case 'delete':
            return state.filter(row=> row.id !== action.payload);
        default:
            return state;
    }

}
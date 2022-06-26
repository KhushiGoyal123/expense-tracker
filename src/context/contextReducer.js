// Reducer => a function which takes old state and an action to give the NEW STATE!

const contextReducer =(state, action) => {
    let transactions;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t)=> t.id !== action.payload);
            return transactions;
    
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            return transactions;
    
        default:
            return state;
    }
}
export default contextReducer;
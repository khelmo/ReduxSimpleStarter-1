// state argument is not application state, but only the state this reducer is responsible for
export default function(state = null,action) { // =null es6 if state is undefined then it is set to null by default
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state
}
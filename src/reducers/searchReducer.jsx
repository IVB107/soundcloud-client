export const searchReducer = (state, action) => {
  switch(action.type) {
    case 'ON_CHANGE':
      return {
        ...state,
        input: action.input,
        results: action.results
      }
    case 'SWITCH_TYPE':
      return {
        ...state,
        searchType: action.searchType
      }
    case 'ADD_SELECTION':
      return {
        ...state,
        input: action.input,
        results: action.results,
        selected: action.selected
      }
    case 'REMOVE_SELECTION':
      return {
        ...state,
        selected: action.selected
      }
    default:
      return state
  }
}
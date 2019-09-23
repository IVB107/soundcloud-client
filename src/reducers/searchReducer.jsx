export const searchReducer = (state, action) => {
  switch(action.type) {
    case 'ON_CHANGE':
      return {
        searchType: action.searchType,
        input: action.input,
        results: action.results,
        selected: action.selected
      }
    case 'SWITCH_TYPE':
      return {
        searchType: action.searchType,
        input: action.input,
        results: action.results,
        selected: action.selected
      }
    case 'MAKE_SELECTION':
      return {
        searchType: action.searchType,
        input: action.input,
        results: action.results,
        selected: action.selected
      }
    case 'REMOVE_SELECTION':
      return {
        // something...
      }
    default:
      return state
  }
}
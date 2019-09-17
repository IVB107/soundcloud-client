export const searchReducer = (state, action) => {
  switch(action.type) {
    case 'ON_CHANGE':
      return {
        searchType: action.searchType,
        input: action.input,
        results: action.results
      }
    case 'SWITCH_TYPE':
      return {
        searchType: action.searchType,
        input: action.input,
        results: action.results
      }
    case 'SUBMIT_SEARCH':
      return {
        // something...
      }
    default:
      return state
  }
}
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
        // isAuthenticated: false,
        // username: null
      }
    case 'SUBMIT_SEARCH':
      return {
        // isAuthenticated: false,
        // username: null
      }
    default:
      return state
  }
}
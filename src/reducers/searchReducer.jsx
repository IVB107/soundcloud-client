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
        input: action.input,
        searchType: action.searchType,
        selected: action.selected,
        suggested_tracks: action.suggested_tracks,
        current_track: {},
        sort_by: ''
      }
    case 'ADD_SELECTION':
      return {
        ...state,
        input: action.input,
        results: action.results,
        selected: action.selected,
        sort_by: ''
      }
    case 'REMOVE_SELECTION':
      return {
        ...state,
        selected: action.selected,
        sort_by: ''
      }
    case 'UPDATE_OPTIONS':
      return {
        ...state,
        options: action.options
      }
    case 'UPDATE_SUGGESTED_TRACKS':
      return {
        ...state,
        options: action.options,
        suggested_tracks: action.suggested_tracks,
        current_track: action.current_track,
        sort_by: action.sort_by,
        limit: action.limit
      }
    case 'UPDATE_CURRENT_TRACK':
      return {
        ...state,
        current_track: action.current_track
      }
    default:
      return state
  }
}
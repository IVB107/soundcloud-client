export const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
        isAuthenticated: true,
        username: action.username,
        user: action.user
      }
    case 'LOG_OUT':
      return {
        isAuthenticated: false,
        username: null
      }
    case 'WEB_PLAYER_CONNECTED':
      return {
        ...state,
        playerConnected: true
      }
    case 'WEB_PLAYER_DISCONNECTED':
      return {
        ...state,
        playerConnected: false
      }
    default:
      return state
  }
}
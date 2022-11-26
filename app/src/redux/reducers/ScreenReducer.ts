import {
  CHANGE_SCREEN,
  CHANGE_NOTIFICATION,
  CHANGE_BOTTOM_VALUE,
  CHANGE_LOCAL_NOTIFICATION,
  CHANGE_LOCAL_TEXT,
  CHANGE_LOCAL_STATUS,
  CHANGE_TUTORIAL,
} from '../types'

const initial_state = {
  screen: 1,
  notification: true,
  bottom: 'Main',
  localNotification: false,
  localText: '',
  localStatus: '',
  tutorial: false,
}

export default function ScreenReducer(state: any, action: any) {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.changeScreen,
      }
    case CHANGE_NOTIFICATION:
      return {
        ...state,
        notification: action.notifactionState,
      }
    case CHANGE_LOCAL_TEXT:
      return {
        ...state,
        localText: action.localText,
      }
    case CHANGE_LOCAL_STATUS:
      return {
        ...state,
        localStatus: action.localStatus,
      }
    case CHANGE_BOTTOM_VALUE:
      return {
        ...state,
        bottom: action.bottomValue,
      }
    case CHANGE_LOCAL_NOTIFICATION:
      return {
        ...state,
        localNotification: action.localNotification,
      }
    case CHANGE_TUTORIAL:
      return {
        ...state,
        tutorial: action.tutorial,
      }
    default:
      return state
  }
}

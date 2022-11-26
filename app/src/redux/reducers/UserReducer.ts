import {
  CHANGE_USER_ID,
  CHANGE_USER_NAME,
  CHANGE_USER_PHONE,
  CHANGE_USER_CITY,
  CHANGE_USER_EMAIL,
  CHANGE_NAME_ORG,
  CHANGE_NAME_SALON,
  CHANGE_INN_ORG,
  CHANGE_SUBSCRIBE,
  CHANGE_USER_ALL,
  CHANGE_TOKEN,
  SET_USER,
} from '../types'

export default function UserReducer(state: any, action: any) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.user,
      }
    case CHANGE_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case CHANGE_USER_ID:
      return {
        ...state,
        id: action.id,
      }
    case CHANGE_USER_NAME:
      return {
        ...state,
        name: action.name,
      }
    case CHANGE_USER_PHONE:
      return {
        ...state,
        phone: action.phone,
      }
    case CHANGE_USER_CITY:
      return {
        ...state,
        city: action.city,
      }
    case CHANGE_USER_EMAIL:
      return {
        ...state,
        email: action.email,
      }
    case CHANGE_NAME_ORG:
      return {
        ...state,
        nameOrg: action.nameOrg,
      }
    case CHANGE_NAME_SALON:
      return {
        ...state,
        nameSalon: action.nameSalon,
      }
    case CHANGE_INN_ORG:
      return {
        ...state,
        innOrg: action.innOrg,
      }
    case CHANGE_SUBSCRIBE:
      return {
        ...state,
        subscribe: action.subscribe,
      }
    case CHANGE_USER_ALL:
      return {
        ...action.userAll,
      }
    default:
      return state
  }
}

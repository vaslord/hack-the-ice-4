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
  CHANGE_TEMP,
  CHANGE_USER_ALL,
  CHANGE_TOKEN,
  SET_USER,
} from '../types'

export const SetUser = (value: any) => ({
  type: SET_USER,
  user: value,
})

export const ChangeToken = (value: any) => ({
  type: CHANGE_TOKEN,
  token: value,
})

export const ChangeUserId = (value: any) => ({
  type: CHANGE_USER_ID,
  id: value,
})

export const ChangeUserName = (value: any) => ({
  type: CHANGE_USER_NAME,
  name: value,
})

export const ChangeUserPhone = (value: any) => ({
  type: CHANGE_USER_PHONE,
  phone: value,
})

export const ChangeUserCity = (value: any) => ({
  type: CHANGE_USER_CITY,
  city: value,
})

export const ChangeUserEmail = (value: any) => ({
  type: CHANGE_USER_EMAIL,
  email: value,
})

export const ChangeNameOrg = (value: any) => ({
  type: CHANGE_NAME_ORG,
  nameOrg: value,
})

export const ChangeNameSalon = (value: any) => ({
  type: CHANGE_NAME_SALON,
  nameSalon: value,
})

export const ChangeInnOrg = (value: any) => ({
  type: CHANGE_INN_ORG,
  innOrg: value,
})

export const ChangeSubscribe = (value: any) => ({
  type: CHANGE_SUBSCRIBE,
  subscribe: value,
})

export const ChangeTemp = (value: any) => ({
  type: CHANGE_TEMP,
  temp: value,
})

export const ChangeUserAll = (value: any) => ({
  userAll: value,
})

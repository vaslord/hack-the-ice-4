import {
  CHANGE_SCREEN,
  CHANGE_NOTIFICATION,
  CHANGE_LOCAL_NOTIFICATION,
  CHANGE_BOTTOM_VALUE,
  CHANGE_TUTORIAL,
  CHANGE_LOCAL_TEXT,
  CHANGE_LOCAL_STATUS,
} from '../types'

export const ChangeScreen = (value: any) => ({
  type: CHANGE_SCREEN,
  changeScreen: value,
})

export const ChangeNotificationState = (value: any) => ({
  type: CHANGE_NOTIFICATION,
  notificationState: value,
})

export const ChangeLocalText = (value: any) => ({
  type: CHANGE_LOCAL_TEXT,
  localText: value,
})
export const ChangeLocalStatus = (value: any) => ({
  type: CHANGE_LOCAL_STATUS,
  localStatus: value,
})

export const ChangeLocalNotification = (value: any) => ({
  type: CHANGE_LOCAL_NOTIFICATION,
  localNotification: value,
})

export const ChangeBottomValue = (value: any) => ({
  type: CHANGE_BOTTOM_VALUE,
  bottomValue: value,
})

export const ChangeTutorial = (value: any) => ({
  type: CHANGE_TUTORIAL,
  tutorial: value,
})

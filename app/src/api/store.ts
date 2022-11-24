import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user-slice'
import ordersReducer from '../features/orders-slice'

const rootReducer = combineReducers({
  user: userReducer,
  orders: ordersReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

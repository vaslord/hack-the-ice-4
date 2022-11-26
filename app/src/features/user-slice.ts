import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AxiosResponse} from 'axios'
import {Alert} from 'react-native'
import {instance} from '../api/api'
import {Status} from '../Status'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {OrderType} from './orders-slice'

export interface User {
  id: number
  name: string
  phone: number
}

interface UserState {
  status: Status
  firstTimeLaunch: boolean
  chosenAddress: string | undefined
  user: User | null
  token: string | null
  signed: boolean
}

const initialState: UserState = {
  status: 'idle',
  firstTimeLaunch: true,
  chosenAddress: undefined,
  user: null,
  token: null,
  signed: false,
}

export const fetchUser = createAsyncThunk<User>('/users', async () => {
  const res = await instance.get('/users')
  return res.data
})

export const updateMe = createAsyncThunk<User, any>('/users', async data => {
  const res = await instance.put<any, AxiosResponse<User>>('/users', data)
  return res.data
})

export const login = createAsyncThunk<string, {phone: string; code: string}>(
  '/auth/login',
  async data => {
    try {
      const response = await instance.post<
        {phone: string; code: string},
        AxiosResponse<{token: string}>
      >('/auth/login', data)
      const {token} = response.data
      await AsyncStorage.setItem('token', token)
      return token
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          throw new Error('Неверный код')
        }
      }
      throw error
    }
  },
)

export const logout = createAsyncThunk('user/logout', async () => {
  await AsyncStorage.removeItem('token')
})

export const checkLogin = createAsyncThunk('user/checkLogin', async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    return token
  }
  throw new Error('Токен не найден')
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setWelcomeScreen(state, action) {
      state.firstTimeLaunch = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.signed = true
        state.token = action.payload
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.signed = true
        state.token = action.payload
      })
      .addCase(logout.fulfilled, state => {
        state.status = 'idle'
        state.user = null
        state.chosenAddress = undefined
        state.token = null
        state.signed = false
      })
  },
})

export const {setWelcomeScreen} = userSlice.actions
export default userSlice.reducer

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AxiosResponse} from 'axios'
import {Alert} from 'react-native'
import {instance} from '../api/api'
import {Status} from '../Status'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {OrderType} from './orders-slice'

interface Address {
  address: string
  name: string
}

export interface User {
  id: number
  name: string
  phone_number: string | null
  birthdate: string | null
  bonus: number
  notifications_enabled: boolean
  orders: OrderType[]
}

interface UserState {
  status: Status
  firstTimeLaunch: boolean
  addresses: Address[] | null
  chosenAddress: string | undefined
  user: User | null
  token: string | null
  signed: boolean
}

const initialState: UserState = {
  status: 'idle',
  firstTimeLaunch: true,
  addresses: null,
  chosenAddress: undefined,
  user: null,
  token: null,
  signed: false,
}

export const fetchUser = createAsyncThunk<User>('', async () => {
  const res = await instance.get('')
  return res.data
})

export const updateMe = createAsyncThunk<User, any>('', async data => {
  const res = await instance.put<any, AxiosResponse<User>>('', data)
  return res.data
})

export const login = createAsyncThunk<
  string,
  {phone_number: string; code: string}
>('', async data => {
  try {
    const response = await instance.post<
      {phone_number: string; code: string},
      AxiosResponse<{token: string}>
    >('', data)
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
})

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
    addressSaved(state, action) {
      if (!state.addresses) {
        state.addresses = [action.payload]
      } else {
        state.addresses?.push(action.payload)
      }
    },
    addressRemoved(state, action) {
      if (state.addresses) {
        state.addresses = state.addresses?.filter(
          (address: Address) => address.address !== action.payload.address,
        )
      }
    },
    chosenAddressRemoved(state) {
      state.chosenAddress = undefined
    },
    addressChosen(state, action) {
      state.chosenAddress = action.payload
    },
    setWelcomeScreen(state, action) {
      state.firstTimeLaunch = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        if (state.status === 'idle') {
          state.status = 'loading'
        } else {
          state.status = 'refreshing'
        }
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        Alert.alert('Ошибка получения пользователя', action.error.message)
        state.status = 'error'
      })
      .addCase(updateMe.pending, state => {
        state.status = 'updating'
      })
      .addCase(updateMe.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        Alert.alert('Ошибка', action.error.message)
      })
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
        state.addresses = null
        state.chosenAddress = undefined
        state.token = null
        state.signed = false
      })
  },
})

export const {
  addressSaved,
  addressRemoved,
  chosenAddressRemoved,
  addressChosen,
  setWelcomeScreen,
} = userSlice.actions
export default userSlice.reducer

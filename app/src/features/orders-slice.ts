import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Alert} from 'react-native'
import {instance} from '../api/api'
import {Status} from '../Status'

export type OrderType = {
  id: number
}

interface OrdersState {
  orders: OrderType[]
  status: Status
}

const initialState: OrdersState = {
  orders: [],
  status: 'idle',
}

export const getOrders = createAsyncThunk<OrderType[]>(
  'orders/getOrders',
  async () => {
    const res = await instance.get('api/orders')
    return res.data
  },
)

export const postOrder = createAsyncThunk<OrderType, any>(
  'orders/postOrder',
  async (orderData: OrderType, {dispatch}) => {
    const res = await instance.post('api/orders', orderData)
    return res.data
  },
)

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOrders.pending, state => {
        if (state.status === 'idle') {
          state.status = 'loading'
        } else {
          state.status = 'refreshing'
        }
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.orders = action.payload
      })
      .addCase(getOrders.rejected, (state, action) => {
        Alert.alert('Ошибка получения заказов', action.error.message)
        state.status = 'error'
      })
      .addCase(postOrder.pending, state => {
        state.status = 'updating'
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.orders.unshift(action.payload)
      })
  },
})

export const {} = ordersSlice.actions
export default ordersSlice.reducer

import React from 'react'
import {Navigation} from './src/Navigation'
import {Provider} from 'react-redux'
import {fetchUser} from './src/features/user-slice'
import {store} from './src/api/store'
import {instance} from './src/api/api'
let token = store.getState().user.token
store.subscribe(() => {
  const prevToken = token
  token = store.getState().user.token
  if (token !== prevToken) {
    if (instance.defaults.headers) {
      if (token) {
        instance.defaults.headers.Authorization = `Bearer ${token}`
        store.dispatch(fetchUser())
      } else {
        instance.defaults.headers.Authorization = ''
      }
    }
  }
})

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

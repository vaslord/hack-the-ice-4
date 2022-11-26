import {combineReducers} from 'redux'

import UserReducer from './UserReducer'
import ScreenReducer from './ScreenReducer'

const rootReducer = combineReducers({
  user: UserReducer,
  screen: ScreenReducer,
})

export default rootReducer

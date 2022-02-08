import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true })
})

/**
 * Use instead of regular useDispatch
 * Required for TypeScript checks
 */
export const usePromisifiedDispatch = () => store.dispatch

export default store

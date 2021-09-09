import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {}
})

export function MProvider({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
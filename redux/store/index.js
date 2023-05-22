import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import moviesReducer from "../slice/movieSlice"
import userReducer from "../slice/userSlice"

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)

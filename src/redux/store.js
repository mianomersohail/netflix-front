import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import step1slice from './step1Slice';
import userSlice from './userSlice';
import movieSlice from './MovieSlice'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
    reducer: {
        user: step1slice,
        users: persistedUserReducer,
         movie:movieSlice
    },
});

export const persistor = persistStore(store);

export default store;

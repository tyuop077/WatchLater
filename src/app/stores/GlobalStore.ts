import { configureStore } from '@reduxjs/toolkit'
import authState from "./AuthState";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const Store = configureStore({
    reducer: {
        authState: authState
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
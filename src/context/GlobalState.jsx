import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
    transaction: []
}

export const GlobalState = createContext(initialState)

export const GlopalProvider = ({ children }) => {
    const [state, dispach] = useReducer(AppReducer, initialState)
    function deleteTransaction(id) {
        dispach({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(tran) {
        dispach({
            type: "ADD_TRANSACTION",
            payload: tran
        })
    }
    return (
        <GlobalState.Provider value={{
            transaction: state.transaction,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalState.Provider>
    )
}   
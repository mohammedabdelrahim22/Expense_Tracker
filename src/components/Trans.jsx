import React, { useContext } from 'react'
import Tranasction from './Tranasction'
import { GlobalState } from '../context/GlobalState'
function Trans({ tran }) {
    const { deleteTransaction } = useContext(GlobalState)
    const sign = tran.amount < 0 ? '-' : "+"

    return (
        <li className={tran.amount < 0 ? "minus" : "plus"}>
            {tran.text}<span>-{sign}${Math.abs(tran.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(tran.id)}>x</button>
        </li>
    )
}

export default Trans
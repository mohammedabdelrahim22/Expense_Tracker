import React, { useContext } from 'react'
import { GlobalState } from '../context/GlobalState'
import Trans from './Trans'
function Tranasction() {
    const { transaction } = useContext(GlobalState)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transaction.map((tran) => (
                    <Trans key={tran.id} tran={tran} />
                ))}

            </ul>

        </>
    )
}

export default Tranasction
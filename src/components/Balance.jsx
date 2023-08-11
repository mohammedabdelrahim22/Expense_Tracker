import React, { useContext } from 'react';
import { GlobalState } from '../context/GlobalState';

function Balance() {
    const { transaction } = useContext(GlobalState);

    // Filter out non-numeric values and calculate the total balance
    const total = transaction
        .map(transaction => transaction.amount)
        .filter(amount => typeof amount === 'number')
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    );
}

export default Balance;

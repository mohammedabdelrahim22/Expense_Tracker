import React, { useContext } from 'react';
import { GlobalState } from '../context/GlobalState';

function Income() {
    // Get the transaction array from the global state
    const { transaction } = useContext(GlobalState);

    // Extract amounts from transactions
    const amounts = transaction.map(transaction => transaction.amount);

    // Calculate total income by summing up positive amounts
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    // Calculate total expenses by summing up negative amounts (multiplying by -1)
    const expense = (
        amounts
            .filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    );
}

export default Income;

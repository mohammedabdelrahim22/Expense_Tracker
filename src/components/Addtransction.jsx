import React, { useState, useContext } from 'react';
import { GlobalState } from '../context/GlobalState'
function Addtransction() {

    const [text, seText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalState)
    const onSubmit = (e) => {
        e.preventDefault();
        const newReansaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        addTransaction(newReansaction)
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => seText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}

export default Addtransction;

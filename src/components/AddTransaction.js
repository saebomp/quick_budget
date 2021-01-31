import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(GlobalContext)
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      //random id 만들기
      id: Math.floor(Math.random()*100000000),
      text:text,
      amount: +amount 
      // +amount : string을 number로 바꿔줌
    }
    addTransaction(newTransaction)
    //addTransaction 를 call 하고 newTransaction를 pass해줌
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor='text'>Text</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter text..." 
          />
        </div>
        <div className="form-control">
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount..." 
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  
  const amounts = transactions.map(transactions => transactions.amount);
  console.log('amounts', amounts)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //reduce 로 amount array안에 있는 값 다 더해줌

  return (
    <div className="mt-20">
      <div className="items-center">
        <div>
          <h1 className="leading-6 text-lg text-black">
            Your Balance
          </h1>
        </div>
        <div>
          <h2 className="text-4xl font-semibold">
            ${total}
          </h2>
        </div>
      </div>
    </div>
  )
}
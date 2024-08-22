
import React, {useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import UserData from './Components/UserData';
import { useLocalStorage } from './hooks/Local';

function App() {
  const [isEditing, setIsEditing] = useState('')
  const [expensesData, setExpensesData] = useLocalStorage('expenses', [])
  const [expense, setExpense] = useLocalStorage('expense',{
    title: ' ',
    cetagory: '',
    amount: '',
  })

  






  return (
    <>
      <h1 
       className='text-6xl mt-12 font-[900] text-[#fbfcfd]'
       
       >Track your Expenses</h1>
      <UserData
        setExpensesData={setExpensesData}
        expense={expense} setExpense={setExpense}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <Calculator
        setExpensesData={setExpensesData}
        expensesData={expensesData}
        setExpense={setExpense}
        setIsEditing={setIsEditing}
      />
    </>
  );
}

export default App;

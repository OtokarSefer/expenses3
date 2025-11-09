import logo from './logo.svg';
import './App.css';
import './components/Expenses.css'
import ExpenseItem from "./components/ExpenseItem";
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import { useState } from 'react';

function App() {
    const [filteredYear, setFilteredYear] = useState("2025")

    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'Icecream',
            price: 3.99
        },
        {
            date: new Date(2024, 0, 5),
            title:'Iceicecream',
            price: 3.99
        },
        {
            date: new Date(2024, 0, 5),
            title:'Good Icecream',
            price: 124.99
        },
        {
            date: new Date(2025, 0, 5),
            title:'Money',
            price: 3.99
        },
        {
            date: new Date(2025, 0, 5),
            title:'Bad Icecream',
            price: 1.99
        }
    ]

    const filterChange = (selectedYear) => {
      setFilteredYear(selectedYear)
      console.log("year selected:", selectedYear)
    }

  return (
    <div className="App">
      <div className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChange}
        />
        <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[2]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[3]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[4]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[5]}></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
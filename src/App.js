import './App.css'
import './components/Expenses.css'
import ExpenseItem from "./components/ExpenseItem"
import ExpensesFilter from './components/Expenses/ExpensesFilter'
import { useState } from 'react'
import NewExpense from './components/NewExpenses/NewExpense.js'

function App() {
  const [filteredYear, setFilteredYear] = useState("2025")

  const [expenses, setExpenses] = useState([
    { 
      date: new Date(2023, 0, 10), 
      title: 'New book', 
      price: 30.99 
    },
    { 
      date: new Date(2023, 0, 5), 
      title: 'Icecream', 
      price: 3.99 
    },
    { 
      date: new Date(2024, 0, 5), 
      title: 'Iceicecream', 
      price: 3.99 
    },
    { 
      date: new Date(2024, 0, 5), 
      title: 'Good Icecream', 
      price: 124.99 
    },
    { 
      date: new Date(2025, 0, 5), 
      title: 'Money', 
      price: 3.99 
    },
    { 
      date: new Date(2025, 0, 5), 
      title: 'Bad Icecream', 
      price: 1.99 
    }
  ])

const addExpenseHandler = (expense) => {
    console.log("App sai uue kulu:", expense)
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  const filterChangeHandler = (selectedYear) => {
    console.log("Aasta valitud:", selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />

      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.length === 0 ? (
          <p>Valitud aastal kulusid ei leitud.</p>
        ) : (
          filteredExpenses.map((expense, index) => (
            <ExpenseItem key={index} expenseData={expense} />
          ))
        )}
      </div>
    </div>
  )
}

export default App

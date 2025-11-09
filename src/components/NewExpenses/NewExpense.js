import { useState } from "react"
import "./NewExpenses.css"
import "./ExpenseForm.css"
import Card from "../UI/Card"

function NewExpense(props) {
  const [IsAddingExpense, setIsAddingExpense] = useState(false)
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value)
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value)
  const dateChangeHandler = (event) => setEnteredDate(event.target.value)

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      price: +enteredAmount,
      date: new Date(enteredDate),
    }

    console.log("inserted price:", expenseData)

    if (props.onAddExpense) {
      props.onAddExpense(expenseData)
    }

    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
    setIsAddingExpense(false)
  }

  if (!IsAddingExpense) {
    console.log("Not adding new expense")
    return (
      <div className="new-expense">
        <button onClick={() => setIsAddingExpense(true)}>Add New Expense</button>
      </div>
    )
  }

  if (IsAddingExpense) {
    console.log("Adding new expense")
  }

  return (
    <Card className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01" step="0.01"
              value={enteredAmount} onChange={amountChangeHandler}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01" max="2025-12-31"
              value={enteredDate} onChange={dateChangeHandler}
              required
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={() => setIsAddingExpense(false)}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Card>
  )
}

export default NewExpense

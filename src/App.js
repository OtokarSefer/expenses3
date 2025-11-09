import logo from './logo.svg';
import './App.css';
import './components/Expenses.css'
import ExpenseItem from "./components/ExpenseItem";

function App() {
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
        }
    ]

  return (
    <div className="App">
      <div className='expenses'>
        <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
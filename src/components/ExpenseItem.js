import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card"
import ExpensesFilter from './Expenses/ExpensesFilter';

function ExpenseItem(props){

    return (
            <div className="card expense-item">
                <ExpenseDate date={props.expenseData.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.expenseData.title}</h2>
                    <div className="expense-item__price">{props.expenseData.price}€</div>
                </div>
            </div>
    )
}

export default ExpenseItem
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

function Expenses(props) {
    return (
        <Card className='expenses'>
            {props.expenses.map(x => 
                <ExpenseItem 
                key = {x.id }
                amount={x.amount}
                title={x.title}
                date={x.date}
                ></ExpenseItem>
            )}
        </Card>
    );
}

export default Expenses;
import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const changeTextHander = () => {
        setTitle('hello world');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
                <button onClick={changeTextHander}>Change Text</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
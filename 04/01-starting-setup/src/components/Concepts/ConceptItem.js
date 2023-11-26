import './ConceptItem.css'
import Card from '../UI/Card'

function ConceptItem(props) {
    return (
        <Card className='concept-item'>
            <div>
                <img className='concept-item__image' src={props.image}></img>
            </div>
            <div className='concept-item__title'>{props.title}</div>
            <div className='concept-item__description'>{props.description}</div>
        </Card>
    )
}

export default ConceptItem;
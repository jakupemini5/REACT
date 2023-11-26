import './Concepts.css'
import ConceptItem from './ConceptItem'

function Concepts(props) {
    return (
        <div className='concepts'>
            {props.concepts.map(x => <ConceptItem
                title={x.title}
                image={x.image}
                description={x.description}
            ></ConceptItem>)}
        </div>
    )
}

export default Concepts;
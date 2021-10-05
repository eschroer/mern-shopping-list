import {useState} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {v4 as uuid} from 'uuid';

function ShoppingList() {
    const [itemsList, setItems] = useState([
            { id: uuid(), name: 'Eggs'},
            { id: uuid(), name: 'Milk'},
            { id: uuid(), name: 'Bread'},
            { id: uuid(), name: 'Water'},
        ]
    )
    return(
    <Container>
        <Button color="dark" style={{marginBottom: '2rem'}} onClick={() => {
            const name = prompt('Enter Item');
            if(name) {
                setItems(item => (
                    [...itemsList, {id: uuid(), name: name}]
                ))
                return itemsList
            }
            }}>
            Add Item
        </Button>
        <ListGroup>
            <TransitionGroup className="shopping-list">
                {itemsList.map(({id, name}) => (
                   <CSSTransition key={id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <Button 
                                className="remove-btn" 
                                color="danger" 
                                size="sm" 
                                onClick={() => {
                                setItems(itemsList.filter((item) => item.id !== id)
                                )}}>
                                &times;
                            </Button>
                            {name}
                            </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    </Container>
    )
}

export default ShoppingList
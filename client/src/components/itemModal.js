
import { useState } from 'react';
import {
    Modal,
    Button,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect } from 'react-redux';
import { addItem} from '../actions/itemActions';



function ItemModal(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('');

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const onChange = (e) => {
        setName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: name
        }
        props.addItem(newItem)
        toggle()
    }

    return(
        <div>
            <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={toggle}>Add Item</Button>
            <Modal 
                isOpen={isOpen}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Shopping List</ModalHeader> 
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input 
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add Shopping Item"
                            onChange={onChange}
                            />
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >Add Item</Button>
                        </FormGroup>
                        
                    </Form>    
                </ModalBody>        
            
            </Modal>    

        </div>
    )

}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);
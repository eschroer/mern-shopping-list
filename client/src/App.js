import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal'
import {Container } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal />
      </Container>
      <ShoppingList />

    </div>
  );
}

export default App;

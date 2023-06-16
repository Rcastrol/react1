import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const myFunction = () => {
    console.log("Hola a todos")
  };
  

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting= "Soy un componente de React"/>
    </div>
  );
}

export default App;

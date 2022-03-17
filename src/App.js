import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from './components/ItemListContainer'

function App() {

  const producto = 'Shampoo de bamboo'

  return (

    <div className="App">
      <Navbar />

      <ItemListContainer greeting='Bienvenidos a Appelle!' producto={producto}/>
    </div>
  );
}

export default App;

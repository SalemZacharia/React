import logo from './logo.svg';
import './App.css';
import Test from './Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './ProductComponent/Product';
import TableProd from './ProductComponent/TableProd';
import Products from './fnComponent/Products';

function App() {
  return (
    <div className="App">
     
     <Products/>
     {/* <TableProd/> */}
    </div>
  );
}

export default App;

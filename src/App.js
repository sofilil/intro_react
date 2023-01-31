import './App.css';
import ProductCard from './components/ProductCard.js';
import products from './products.json';

function App() {
  return (
    <div className="App">
      {products.map((product) => 
        <ProductCard key={product.prodid} name={product.title} price={product.price} category={product.category}/>
      )}
    </div>
  );
}

export default App;

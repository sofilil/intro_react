import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import ProductCategory from './ProductCategory';

export default function ProductCard({name, price, category}){
    return (
      <article className="product-card">
        <ProductTitle productname={name}/>
        <ProductPrice price={price}/>
        <ProductCategory category={category}/>
        <button>Legg til i handlekurv</button>
      </article>
    )
  }

  
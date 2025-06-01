import { useEffect, useState } from 'react';
import Header from '../Componants/Header';
import ProductGrid from '../Componants/ProductGrid';
import ProductTable from '../Componants/ProductTable';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(console.error);
  }, []);

  return (
    <>
      <Header isGrid={isGrid} toggleView={() => setIsGrid(!isGrid)} />
      {isGrid ? (
        <ProductGrid products={products} />
      ) : (
        <ProductTable products={products} />
      )}
    </>
  );
};

export default Home;

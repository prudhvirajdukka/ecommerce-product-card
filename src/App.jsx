import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);
    setFiltered(data.products);
  };
  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === "all") {
      setFiltered(products);
    } else {
      const matches = products.filter(p =>
        p.category.toLowerCase().includes(cat.toLowerCase())
      );
      setFiltered(matches);
    }
  };
  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app-wrapper">
      <Header
        onFilter={handleCategoryChange}
        cartCount={cart.length}
        openCart={() => setShowModal(true)}
      />
      <main className="container py-4 d-flex flex-wrap justify-content-center gap-4">
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </main>
      {showModal && (
        <CartModal cartItems={cart} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default App;

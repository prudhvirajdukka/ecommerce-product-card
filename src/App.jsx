import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    const productsWithStock = data.products.map(p => ({
      ...p,
      stock: 5
    }));
    setProducts(productsWithStock);
    setFiltered(productsWithStock);
  };

  const handleCategoryChange = (cat) => {
    if (cat === "all") {
      setFiltered(products);
    } else if (cat === "watches") {
      const filteredItems = products.filter(p =>
        p.category.includes("watches")
      );
      setFiltered(filteredItems);
    } else {
      const matches = products.filter(p =>
        p.category.toLowerCase().includes(cat.toLowerCase())
      );
      setFiltered(matches);
    }
  };

  const handleAddToCart = (product) => {
    const existingCount = cart.filter(item => item.id === product.id).length;
    if (existingCount >= 5) return; // Simulated limit

    setCart(prev => [...prev, product]);

    setFiltered(prevFiltered =>
      prevFiltered.map(p =>
        p.id === product.id && existingCount + 1 >= 5
          ? { ...p, stock: 0 }
          : p
      )
    );
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
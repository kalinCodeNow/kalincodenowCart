import Header from "./components/Header";
import Products from "./components/Product";
import { useState } from "react";
import { db } from "./data/db";

function App() {

  const [data] = useState(db);

  const agregarProductCarrito = (item) => {
    console.log(item)
  }

  return (
    <>

    <div className="bg-black">
      <h1 className="font-simibold text-cyan-400 text-4xl">KalinCodeNow Bienvenido a React</h1>
      <p>Video 3 minuto 2:03:02</p>
      <Header />
      </div>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0">
        <h3 className="font-simibold text-blue-600 text-3xl">Productos mas Vendidos</h3>
        <div  className="mt-6 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
          {data.map((product) => (
            <Products key={product.id} products={product} addToCart={agregarProductCarrito} />
          ))}
        </div>
      </main>
      <footer>
        <div>
          <p>Cart-React Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default App;

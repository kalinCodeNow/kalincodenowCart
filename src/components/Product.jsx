const Product = ({ products, addToCart }) => {
  const { id, name, descripcion, precio, marca, imagen } = products;
  return (
    <div className="group relative shadow-lg px-3 pb-3 rounded-md bg-gray-200">
      <div>
        <img
          src={imagen}
          alt="Imagen"
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto"
        />
      </div>

<div className="">
<div className="mt-4 flex justify-between">
        <h1 className="font-semibold text-lg">{name}</h1>
        <span className="text-white font-medium bg-blue-900 rounded-md px-2">{marca}</span>
      </div>

      <div className="mt-2 flex flex-col">
        <p className="text-lg text-blue-800">{descripcion}</p>
        <p className="text-sm font-medium text-gray-900"> {precio} </p>
      </div>
      <div className="mt-3">
      <button onClick={()=> addToCart(products)} className="bg-blue-800 w-full rounded-lg py-1.5 cursor-pointer text-white hover:bg-blue-700">Agregar al Carrito</button>
      </div>
</div>
      
    </div>
  );
};

export default Product;

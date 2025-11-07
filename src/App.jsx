import Contenedor from "./Contenedor"
import productos from "./data/productos"
import Header from "./Header";
import Product from "./Product"

function App() {

  const categories = [
    "Plantas medianas/grandes",
    "Plantas pequeñas",
    "Plantas con flores"
  ];

  return (
    <>
    <Header></Header>

      <Contenedor>
        <div className="flex flex-col gap-12 w-full px-6">
          {categories.map((categoria) => (
            <section key={categoria}>
              <h2 className="contenedor_h4">
                {categoria}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productos
                  .filter((p) => p.category === categoria)
                  .map((producto, index) => (
                    <Product
                      key={index}
                      name={producto.name}
                      price={producto.price}
                      description={producto.description}
                      image={producto.image}
                    />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </Contenedor>
    </>
  );
}

export default App

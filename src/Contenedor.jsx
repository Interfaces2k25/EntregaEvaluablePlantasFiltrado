import Product from "./Product"

function Contenedor({children}) {

  return (
    <>
    {/* Recorrer cada producto mediante el tabulador */}
      <main
        id="main-content"
        role="main"
        tabIndex="-1"
        className="min-h-screen bg-linear-to-br flex flex-col items-center justify-center p-8">
        
        <section aria-label="Listado principal de productos" className="w-full max-w7xl text-center">
          {children}
        </section>
      </main>
    </>
  )
}

export default Contenedor

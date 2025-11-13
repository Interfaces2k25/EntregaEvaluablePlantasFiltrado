function Header() {
  return (
    <>
      <header id="main-content" role="banner" aria-labelledby="title-hogarverde">
        <img className="w-40 h-auto flex flex-col items-center justify-center mx-auto" src="imagenes/LogoSinFondoHogarVerde.png" alt="Banner de plantas" />
        <h1 id="title-hogarverde" className="contenedor__h1">NUESTRAS PLANTAS</h1>
      </header>
    </>
  )
}

export default Header;
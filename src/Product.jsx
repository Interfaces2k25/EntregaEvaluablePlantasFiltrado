function Product(props) {
  const { image, name, price, description } = props;

  return (
    <article
      tabIndex={0}
      role="listitem"
      className="flex flex-col items-start gap-3 p-2 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-green-900 transition-shadow duration-300 w-fit"
    >
      {/* Cuando pasamos el cursor por encima de los productos */}
      <div className="bg-white shadow-md hover:shadow-xl overflow-hidden flex flex-col items-center text-left transition-shadow duration-300 w-90 p-5 rounded-2xl">
        <figure className="w-full rounded-lg bg-amber-50 overflow-hidden">
          <img
            className="w-fit object-cover rounded-2xl"
            src={image}
            alt={`Planta ${name}`}
          />
          <figcaption className="sr-only">{props.children}</figcaption>
        </figure>

        <div>
          {/* Precio al lado del nombre */}
          <h2 className="text-xl font-semibold text-black mb-2 pt-3">
            {name}
            <span className="texto_mediano p-3">{price}</span>
          </h2>

          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}

export default Product;

function Product(props) {
  const { image, name, price, description } = props;

  return (
    <article className="flex flex-col items-start gap-3 p-4">
      <div
        tabIndex={0}
        className="bg-white shadow-md overflow-hidden flex flex-col items-center text-left
                   hover:shadow-lg focus:shadow-lg focus:outline focus:outline-black
                   transition-shadow duration-300 w-80 p-5 rounded-2xl">
        
          <figure className="w-full rounded-lg bg-amber-50 overflow-hidden">
            <img className="w-fit object-cover rounded-2xl" src={image} alt={name} />
            <figcaption className="sr-only">{props.children}</figcaption>
          </figure>

          <div>
            {/* Precio al lado del nombre */}
            <h2 className="text-xl font-semibold text-black mb-2 pt-3">{name}
              <span className="text-black font-normal ml-2">{price}</span>
            </h2>

            <p>{description}</p>
          </div>
        </div>
    </article>
  )
}

 export default Product
/**
 * CardDoc component (Docusaurus-safe)
 * Used only for documentation rendering
 */
function CardDoc({ image, name, price, children }) {
  return (
    <article className="flex flex-col items-start gap-3 p-4 rounded-lg">
      <div className="bg-[rgba(212,218,178,1)] shadow-md flex flex-col items-center
        transition-shadow duration-300 w-80 p-5 rounded-2xl">

        <figure className="w-full overflow-hidden bg-gray-100 rounded-lg">
          <img
            className="object-cover w-80 h-90 rounded-2xl"
            src={image}
            alt={name}
          />
        </figure>

        <div>
          <h2 className="pt-3 mb-2 text-xl font-semibold text-gray-800">
            {name}
          </h2>
          <p>{price}</p>
          <p>{children}</p>
        </div>
      </div>
    </article>
  );
}

export default CardDoc;

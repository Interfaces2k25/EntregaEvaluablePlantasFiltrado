import { Link } from "react-router-dom";
// Link para renvolver el card, navega entre rutas sin recargar la página

function Card(props) {
    const { image, name, price, to } = props;
    return (
        <article
            className="flex flex-col items-start gap-3 p-4 rounded-lg">

            {/* Aquí el tabIndex para que me ocupe el tamaño solo de la tarjeta, y no de todo el article */}
            <Link
                to={to} //Ruta de destino donde navega al hacer click
                tabIndex={0} //Accesibilidad por tab
                aria-label={`Abrir detalle de ${name}`}
                className="bg-[rgba(212,218,178,1)] shadow-md overflow-hidden flex flex-col items-center text-left 
            hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300 w-80 p-5 rounded-2xl">

                <figure className="w-full rounded-lg bg-gray-100 overflow-hidden">

                    <img className="w-80 h-90 object-cover rounded-2xl " src={image} alt={name} />

                </figure>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 pt-3">{name}</h2>
                    <p>{price}</p>
                    <p>{props.children}</p>
                </div>
            </Link>
        </article>
    )

}

export default Card;
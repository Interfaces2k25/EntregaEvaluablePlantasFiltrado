function Product(props) {
  const { image, name, price, description } = props;

  return (
    <article
      tabIndex={0}
      className="flex flex-col items-start gap-3 p-4 hover:shadow-2x1 focus:shadow-2x1 transition-shadow duration-300">

    <div className="bg-white shadow-md hover:shadow-xl overflow-hidden flex flex-col items-center text-left transition-shadow duration-300 w-90 p-5 rounded-2xl">
    <figure className="w-full rounded-lg bg-amber-50 overflow-hidden">

      <img className="w-fit object-cover rounded-2xl " src={image} alt={name}/>
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

// function Product(props) {
//   const { image, name, price, description } = props;

//   return (
//     <article
//       tabIndex={0}
//       className="flex flex-col items-start gap-3 p-4 transition-shadow duration-300">
      
//       <div className="bg-white shadow-md hover:shadow-xl overflow-hidden flex flex-col items-center text-left transition-shadow duration-300 w-80 p-5 rounded-2xl">
        
//         <figure className="w-full rounded-lg bg-amber-50 overflow-hidden">
//           <img
//             className="w-full h-60 object-cover rounded-2xl"
//             src={image}
//             alt={name}
//           />
//           <figcaption className="sr-only">{props.children}</figcaption>
//         </figure>

//         <div className="w-full text-center mt-3">
//           {/* Precio al lado del nombre */}
//           <h2 className="text-xl font-semibold text-black mb-2">
//             {name}
//             <span className="text-black font-normal ml-2">{price}</span>
//           </h2>
//           <p>{description}</p>
//         </div>

//       </div>
//     </article>
//   );
// }

// export default Product;

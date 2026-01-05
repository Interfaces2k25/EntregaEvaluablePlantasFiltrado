function PlantDetailGenericDoc({ plant }) {
  if (!plant) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <article>
      <img src={plant.image} alt={plant.name} width="300" />
      <h2>{plant.name}</h2>
      <p>{plant.price}</p>
      <p>{plant.description}</p>
      <p>{plant.information}</p>
    </article>
  );
}

export default PlantDetailGenericDoc;

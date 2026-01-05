import PlantDetailGeneric from "../components/PlantDetailGeneric";
import products from "../data/products";

const defaultPlant = products[0];

export default {
  title: "Catalogo/Detalle de planta",
  component: PlantDetailGeneric,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          `Documentación narrativa:
        El componente PlantDetailGeneric muestra la información completa de una planta.

        Se utiliza en la vista de detalle del producto y presenta datos como la imagen,
        el nombre, el precio, la descripción y la información adicional.

        Este componente recibe un objeto plant como prop, lo que permite reutilizarlo
        con distintas plantas sin duplicar lógica. Es especialmente útil para mostrar
        listados completos, filtros por categoría o vistas editables en Storybook.
    `,
      },
    },
  },
};



/**
 * Render reutilizable
 */
const renderPlant = (plant) => (
  <PlantDetailGeneric plant={plant} />
);

/**
 * Helper para filtrar por categoría
 */
const byCategory = (category) =>
  products.filter((product) => product.category === category);

export const EditableByFields = {
  name: "Editable por campos",
  args: {
    id: defaultPlant.id,
    category: defaultPlant.category,
    name: defaultPlant.name,
    price: defaultPlant.price,
    description: defaultPlant.description,
    information: defaultPlant.information,
    image: defaultPlant.image,
  },

  render: (args) => {
    const plant = {
      id: args.id,
      category: args.category,
      name: args.name,
      price: args.price,
      description: args.description,
      information: args.information,
      image: args.image,
    };

    return <PlantDetailGeneric plant={plant} />;
  },
};


//TODAS LAS PLANTAS
export const AllProducts = {
  name: "Todos los productos",
  render: () => (
    <>
      {products.map((plant) => (
        <div key={plant.id} style={{ marginBottom: "40px" }}>
          {renderPlant(plant)}
        </div>
      ))}
    </>
  ),
};

// PLANTAS CON FLORES
export const FlowerPlants = {
  name: "Plantas con flores",
  render: () => (
    <>
      {byCategory("Plantas con flores").map((plant) => (
        <div key={plant.id} style={{ marginBottom: "40px" }}>
          {renderPlant(plant)}
        </div>
      ))}
    </>
  ),
};

// PLANTAS PEQUEÑAS
export const SmallPlants = {
  name: "Plantas pequeñas",
  render: () => (
    <>
      {byCategory("Plantas pequeñas").map((plant) => (
        <div key={plant.id} style={{ marginBottom: "40px" }}>
          {renderPlant(plant)}
        </div>
      ))}
    </>
  ),
};

//PLANTAS MEDIANAS / GRANDES
export const MediumLargePlants = {
  name: "Plantas medianas/grandes",
  render: () => (
    <>
      {byCategory("Plantas medianas/grandes").map((plant) => (
        <div key={plant.id} style={{ marginBottom: "40px" }}>
          {renderPlant(plant)}
        </div>
      ))}
    </>
  ),
};


import Card from "../components/Card";
import products from "../data/products";
import { MemoryRouter } from "react-router-dom";

//Plantas como ejemplo
const dypsis = products.find((p) => p.name === "DYPSIS LUTESCENS");
const kalanchoe = products.find((p) => p.name === "KALANCHOE");
const ficusBambino = products.find(
  (p) => p.name === "FICUS LYRATA BAMBINO"
);

export default {
  title: "Componentes/Card",
  tags: ["autodocs"],
  component: Card,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          `Documentación narrativa:
            El componente Card se utiliza para mostrar una planta dentro del catálogo.

            Su objetivo es presentar de forma visual la información básica de cada producto,
            como la imagen, el nombre y el precio, y permitir al usuario navegar al detalle
            completo de la planta al hacer clic sobre la tarjeta.

            Este componente utiliza Link de react-router-dom para la navegación,
            por lo que debe renderizarse dentro de un Router. En Storybook se emplea
            MemoryRouter para simular este comportamiento sin depender de la aplicación real.

            El componente está pensado para ser reutilizado en listados de productos,
            como la página principal o las vistas filtradas por categoría.`,
      },
    },
  },
};

export const MedianaGrande = {
  name: "Planta mediana/grande",
  render: (args) => ( //Si un componente necesita Link, necesita un Router aunque sea de mentira para poder renderizarse
    <MemoryRouter>
      <Card {...args} />
    </MemoryRouter>
  ),
  args: {
    image: dypsis.image,
    name: dypsis.name,
    price: dypsis.price,
    to: `/plantas/${dypsis.id}`,
    children: dypsis.description,
  },
};

export const ConFlores = {
  name: "Planta con flores",
  render: (args) => (
    <MemoryRouter>
      <Card {...args} />
    </MemoryRouter>
  ),
  args: {
    image: kalanchoe.image,
    name: kalanchoe.name,
    price: kalanchoe.price,
    to: `/plantas/${kalanchoe.id}`,
    children: kalanchoe.description,
  },
};


//Planta con información extra

export const PlantaPequena = {
  name: "Planta pequeña",
  render: (args) => (
    <MemoryRouter>
      <Card {...args} />
    </MemoryRouter>
  ),
  args: {
    image: ficusBambino.image,
    name: ficusBambino.name,
    price: ficusBambino.price,
    to: `/plantas/${ficusBambino.id}`,
    children: ficusBambino.information,
  },
};


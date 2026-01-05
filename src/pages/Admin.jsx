import FormAddPlant from "./FormAddPlant";

/**
 * Admin component that renders the FormAddPlant component.
 *
 * @component
 * @returns {JSX.Element} The rendered Admin component.
 */
function Admin({isAuthenticated}) {
    if(!isAuthenticated){
        return (
            <p className="mt-10 text-center text-red-700">
              Debes iniciar sesión para acceder a la sección de administración
            </p>
          )
      }
    return (
        <section className="max-w-xl mx-auto mt-10">
            <h1 className="mb-6 text-2xl font-bold">
                Panel de Administración
            </h1>

            <FormAddPlant></FormAddPlant>
        </section>
    )
}

export default Admin;
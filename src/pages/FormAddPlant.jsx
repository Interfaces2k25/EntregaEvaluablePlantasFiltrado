import { useState } from "react";

/**
 * FormAddPlant component for adding a new plant.
 * 
 * This component manages the state of the form data and handles
 * form submission with validation for required fields.
 * 
 * @component
 * @returns {JSX.Element} The rendered form for adding a plant.
 */
function FormAddPlant(){
    const [errors, setErrors] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: "",
        information: "",
      });
      

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
        information: ""
    })

    const handleChange = (e) => {
        console.log(formData);

        const {id, type, value, checked, files} = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : type === "file" ? files[0] : value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};

        if(formData.name == null || formData.name === ""){
            newErrors.name = "Debes introducir un nombre"
        }
        if(formData.price < 0 || formData.price === ""){
            newErrors.price = "El precio debe de ser mayor o igual a 0"
        }
        if(formData.description == null || formData.description === ""){
            newErrors.description = "Debes introducir una descripción"
        }
        if(formData.category == null || formData.category === ""){
            newErrors.category = "Debes seleccionar una categoría"
        }
        if(!formData.image || !formData.image.name.toLowerCase().endsWith(".png")){
            newErrors.image = "Debes importar una imagen .png"
        }
        if(formData.information == null || formData.information === ""){
            newErrors.information = "Debes introducir una información"
        }
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            console.log("Datos del formulario:", formData);
          }
    }

    return(
        <div className="flex justify-center items-center min-h-screen bg-[rgba(212,218,178,1)] p-4">
            <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
            noValidate
            >
                <div className="text-2xl font-bold mb-6 text-[rgba(71,79,35,1)] border-b pb-2">
                    Añadir planta
                </div>

                <div className="mb-4">
                    <label htmlFor="name"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Nombre de la planta:
                    </label>

                    <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]">
                    </input>
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="price"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Precio de la planta:
                    </label>

                    <input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    aria-invalid={!!errors.price}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]">
                    </input>
                    {errors.price && <p className="text-red-600">{errors.price}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Descripción:
                    </label>

                    <input
                    id="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    aria-invalid={!!errors.description}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]">
                    </input>
                    {errors.description && <p className="text-red-600">{errors.description}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="category"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Categoría:
                    </label>

                    <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    aria-invalid={!!errors.category}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="medium/big">Plantas medianas/grandes</option>
                        <option value="small">Plantas pequeñas</option>
                        <option value="flower">Plantas con flores</option>
                    </select>
                    {errors.category && <p className="text-red-600">{errors.category}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="image"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Imagen:
                    </label>

                    <input
                    id="image"
                    type="file"
                    onChange={handleChange}
                    aria-invalid={!!errors.image}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]"
                    >
                    </input>
                    {errors.image && <p className="text-red-600">{errors.image}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="information"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Información de la planta:
                    </label>

                    <input
                    id="information"
                    type="text"
                    value={formData.information}
                    onChange={handleChange}
                    aria-invalid={!!errors.information}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]">
                    </input>
                    {errors.information && <p className="text-red-600">{errors.information}</p>}
                </div>

                <div>
                    <button
                    type="submit"
                    className="w-full bg-[rgba(71,79,35,1)] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#323524] focus:outline-none focus:ring-4 focus:ring-[rgba(212,218,178,1)] focus:ring-opacity-50 transition duration-150 ease-in-out"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormAddPlant;
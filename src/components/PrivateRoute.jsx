import { Outlet } from "react-router-dom";

function PrivateRoute({ isAuthenticated }) {
  return (
    isAuthenticated ? (<Outlet />) : (
      <p className="text-center mt-10 text-red-700">
        Debes iniciar sesión para acceder a la sección de administración
      </p>
    )
  );
}

export default PrivateRoute;

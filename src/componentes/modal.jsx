import React from "react";

const Modal = ({
  children,//representa el contenido que se mostrará dentro del modal
  estado, //controla cuando se muestra el modal, true o false
  cambiarEstado,
  titulo = "Alerta",
  mostrarHeader,//prop boolena, true debe mostrar encabezado
  mostrarOverlay,//prop booleana, true se mostrara semitransparente negro por detras el modal, false (fondo transparente)
  posicionModal,//prop, posicion vertical del modal en la pantalla
  padding,
}) => {
  return (
    <>
      {estado && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen ${
            mostrarOverlay ? "bg-opacity-50 bg-black" : "bg-transparent"
          } flex items-${posicionModal || "center"} justify-center`}
        >
          <div
            className={`w-96 min-h-24 bg-white relative rounded-md shadow-md ${
              padding || "p-5"
            }`}
          >
            {mostrarHeader && (
              <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-200">
                <h3 className="font-medium text-2xl text-blue-600">{titulo}</h3>
                <button
                  className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200"
                  onClick={() => cambiarEstado(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

import React from 'react';
import DonationForm from './DonationForm'; // Reemplaza './DonationForm' con la ruta correcta al componente DonationForm
//modal que muestra un formulario de donación y un botón "Close".
// El modal tiene una superposición semitransparente de fondo negro y está centrado en la pantalla.
const DonationModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white rounded-lg p-4 modal-container"
      >
        <DonationForm />
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DonationModal;

//En resumen, este archivo contiene pruebas para tres endpoints de tu API: /api/users/register, /api/mangas/:id, y /create_preference
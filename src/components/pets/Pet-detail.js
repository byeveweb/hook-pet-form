import React from 'react';

const PetDetail = ({ pet, eliminarPet }) => (
    <>

        <p>Nombre: {pet.nombre}</p>
        <p>Edad: {pet.edad}</p>
        <p>Raza: {pet.raza}</p>
        <p>Raza: {pet.sexo}</p>

        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarPet(pet.id)}
        >Eliminar &times;</button>


    </>
);


export default PetDetail;
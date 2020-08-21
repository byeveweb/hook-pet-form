import React, { useState } from 'react';


const PetType = ({ guardarTypeOfPet, actualizarPregunta }) => {

    //Definir el state
    const [typePet, guardarTypePet] = useState({ typeOfPet: 'Perro' })

    //Actualizar State
    const actualizarState = e => {
        guardarTypePet({
            [e.target.name]: e.target.value
        })
    }


    //Enviamos la info
    const agregarTypePet = e => {
        e.preventDefault(typePet)
        guardarTypeOfPet(typePet)
        actualizarPregunta(false)
    }

    return (
        <>
            <h2>Que animal quieres agregar</h2>
            <form onSubmit={agregarTypePet}>
                <select
                    name="typeOfPet"
                    onChange={actualizarState}
                >
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                </select>

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir mascota"
                />
            </form>
        </>

    );
}

export default PetType;
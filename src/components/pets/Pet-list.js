import React, { useState, useEffect } from 'react';

//Components
import PetDetail from './Pet-detail'
import PetForm from './Pet-form'
import PetAddQuestion from './Pet-add-question'



const PetList = () => {

    //Array Pets
    const [pets, guardarPets] = useState([])
    const [typeOfPet, guardarTypeOfPet] = useState('')
    const [mostrarpregunta, actualizarPregunta] = useState(true)


    //función que traiga toda las citas y agrege la nueva
    const crearPet = pet => {
        guardarPets([
            ...pets,
            pet
        ])
    }


    //    Función que elimina una cita por su id
    const eliminarPet = id => {
        const nuevosPets = pets.filter(pet => pet.id !== id)
        guardarPets(nuevosPets)
    }

    //Mensaje condicional 
    const titulo = pets.length === 0 ? 'No hay mascotas' : 'Administra tus mascotas'

    console.log(typeOfPet)
    console.log(titulo)



    return (
        <>
            <div className="row">

                {mostrarpregunta ?
                    (
                        <PetAddQuestion
                            guardarTypeOfPet={guardarTypeOfPet}
                            actualizarPregunta={actualizarPregunta}
                        />
                    )
                    :

                    (
                        <>
                            <div className="one-half column">
                                <h2>Añade tu mascota</h2>
                                <PetForm
                                    crearPet={crearPet}
                                />
                            </div>
                            <div className="one-half column">
                                <h2>{titulo}</h2>
                                {pets.map(pet => (
                                    <PetDetail
                                        key={pet.id}
                                        pet={pet}
                                        eliminarPet={eliminarPet}
                                    />
                                ))}
                            </div>
                        </>
                    )}
            </div>

        </>

    );
}

export default PetList;
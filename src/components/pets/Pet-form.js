import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Components
import Error from './../error/Error-form'

const PetForm = ({ crearPet }) => {


    //1º State for Add Pet
    const [pet, actualizarPet] = useState({
        nombre: '',
        edad: 0,
        raza: '',
        sexo: 'Hembra',
        vacunas: false,
        gender: '',
        imageUrl: ''
    })

    //State de error
    const [error, mostrarError] = useState(false)




    //2º Actualizar el state
    const actualizarState = e => {
        const target = e.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name
        actualizarPet({
            ...pet,
            [name]: value
        })
    }


    //3º Extraer los valores de pet
    const { nombre, edad, raza, sexo, vacunas, gender, imageUrl } = pet




    //4º Agregamos el pet
    const submitPet = e => {
        e.preventDefault()

        //Validar en caso de error
        if (nombre.trim() === ''
            || edad.trim() === ''
            || raza.trim() === '') {

            mostrarError(true)
            return
        }

        //Eliminar mensaje
        mostrarError(false)

        //Asignar id
        pet.id = uuidv4()

        //Crear el registro
        crearPet(pet)

        //reiniciar el form
        actualizarPet({
            nombre: '',
            edad: 0,
            raza: '',
            sexo: 'hembra',
            gender: '',
            imageUrl: ''
        })
    }


    return (
        <>

            <form onSubmit={submitPet}>
                {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre de Pet"
                    onChange={actualizarState}
                    value={nombre}
                />

                <label>Edad</label>
                <input
                    type="number"
                    name="edad"
                    className="u-full-width"
                    placeholder="Edad"
                    onChange={actualizarState}
                    value={edad}
                />


                <label>Raza</label>
                <input
                    type="text"
                    name="raza"
                    className="u-full-width"
                    placeholder="Raza"
                    onChange={actualizarState}
                    value={raza}
                />

                <label>Sexo</label>
                <select
                    name="sexo"
                    value={sexo}
                    onChange={actualizarState}>
                    <option value="Hembra">Hembra</option>
                    <option value="Macho">Macho</option>
                </select>

                <label>Vacunado</label>

                <input
                    type="checkbox"
                    name="vacunas"
                    onChange={actualizarState}
                    value={vacunas} />

                <input type="radio" id="male" name="gender" value="male" onChange={actualizarState} />
                <label htmlFor="male">Male</label>

                <label>Sube las imágenes</label>
                <input type="file" name="imageUrl" onChange={actualizarState} value={imageUrl} />


                <button type="submit" className="u-full-width button-primary">Agregar Pet</button>
            </form>

        </>
    );
}

export default PetForm;
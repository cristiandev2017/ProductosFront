import {React, useState} from 'react'
import clientAxios from '../config/axios'
import { useHistory} from 'react-router-dom'

const Guardar = () => {

    //Creamos un estado donde va la info
    const [datos, setDatos] = useState({
        codigo: '',
        nombre: '',
        precio: '',
        lote: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const history = useHistory();

    const guardarDatos = async(event) => {
        event.preventDefault()
        await clientAxios.post('/crear',datos);
        history.push("/listar");
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4">Formulario de Guardar productos</h1>
            <form onSubmit={guardarDatos}>
                <div className="mb-3">
                    <label  className="form-label">Codigo</label>
                    <input type="text" className="form-control" name="codigo" onChange={handleInputChange}  placeholder="Codigo del Producto"/>
                </div>
                <div className="mb-3">
                <label  className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" onChange={handleInputChange} placeholder="Nombre del Producto"/>
                </div>
                <div className="mb-3">
                <label  className="form-label">Precio</label>
                    <input type="text" className="form-control" name="precio" onChange={handleInputChange} placeholder="Precio del Producto"/>
                </div>
                <div className="mb-3">
                <label  className="form-label">Lote</label>
                    <input type="text" className="form-control" name="lote" onChange={handleInputChange} placeholder="Lote del Producto"/>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
            </div>
    )
}

export default Guardar;
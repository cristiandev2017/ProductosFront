import { React, useState, useEffect } from 'react'
import clientAxios from '../config/axios';
import Swal from 'sweetalert2'
import { useHistory} from 'react-router-dom'


const Listar = () => {
    //Creamos un estado donde va la info
    const [products, setProducts] = useState([]);


    //Ahora se llenan
    useEffect(async () => {
        const response = await clientAxios.get('/list');
        setProducts(response.data);
    }, [products])

    const history = useHistory();

    const  eliminarProducto = (id,name) =>{
        console.log("Traigo el id", id);
        Swal
        .fire({
            title: name,
            text: "¿Con seguridad desea eliminar este producto?",
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                // Hicieron click en "Sí"
                console.log("*se elimina la venta*");
                clientAxios.delete("/eliminar/"+id)
            } else {
                // Dijeron que no
                console.log("*NO se elimina la venta*");
            }
        });
    }

    const guardarProduct = () =>{
        history.push("/guardar");
    }


    return (
        <div className="text-center container">
            <h4 className="mt-5">Lista de Productos 🥑 <button className="btn btn-dark" onClick={() => guardarProduct() }>+</button></h4> 
            <i className="bi bi-bag-plus-fill"></i>
            
            <table className="table mt-4 table-responsive">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Actualizar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                        {products.map((element, i) => {
                            return (<>
                            <tr key={element.id}>
                                <th key={element.id} scope="row">{i+1}</th>
                                <td>{element.codigo}</td>
                                <td>{element.nombre}</td>
                                <td>{element.precio}</td>
                                <td><button className="btn btn-success">Actualizar</button></td>
                                <td><button className="btn btn-danger" onClick={() =>eliminarProducto(element.id, element.nombre)}>Eliminar</button></td>
                                </tr>
                                </>
                            )   
                        })
                        }    
                </tbody>
            </table>
        </div>
    )
}

export default Listar;

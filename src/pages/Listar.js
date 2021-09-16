import { React, useState, useEffect } from 'react'
import clientAxios from '../config/axios';


const Listar = () => {
    //Creamos un estado donde va la info
    const [products, setProducts] = useState([]);


    //Ahora se llenan
    useEffect(async () => {
        const response = await clientAxios.get('/list');
        setProducts(response.data);
    }, [])


    return (
        <div className="text-center">
            <h4>Lista de Productos 🥑</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
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

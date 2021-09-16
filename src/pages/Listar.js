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
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

            {products.map((element) => {
                return <p key={element.id}>{element.nombre}</p>
            })
            }
        </div>
    )
}

export default Listar;

import { React, useState, useEffect } from "react";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
//Modal
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const Listar = () => {
  //Creamos un estado donde va la info
  const [products, setProducts] = useState([]);

  //Modal
  const [stateModal, setStateModal] = useState(false);
  const [product, setProduct] = useState({});

  const handleInputChange = (event) => {
    setProduct({
        ...product,
      [event.target.name]: event.target.value,
    });
  };

  //Ahora se llenan
  useEffect( async () => {
    const response = await clientAxios.get("/list");
    setProducts(response.data);
  }, [products]);

  const history = useHistory();

  const eliminarProducto = (id, name) => {
    console.log("Traigo el id", id);
    Swal.fire({
      title: name,
      text: "¿Con seguridad desea eliminar este producto?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.value) {
        clientAxios.delete("/eliminar/" + id);
      }
    });
  };

  const guardarProduct = () => {
    history.push("/guardar");
  };

  const actualizarProducto = async () => {
    await clientAxios.put('/actualizar',product);
    setStateModal(false);
  }

  return (
    <div className="text-center container">
      <h4 className="mt-5">
        Lista de Productos 🥑{" "}
        <button className="btn btn-dark" onClick={() => guardarProduct()}>
          +
        </button>
      </h4>
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
            return <tr key={element.id}>
                  <th key={element.id} scope="row">
                    {i + 1}
                  </th>
                  <td>{element.codigo}</td>
                  <td>{element.nombre}</td>
                  <td>{element.precio}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        setStateModal(true);
                        setProduct(element);
                      }}
                    >
                      Actualizar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        eliminarProducto(element.id, element.nombre)
                      }
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
          })}
        </tbody>
      </table>
      <Modal isOpen={stateModal}>
        <ModalHeader>Editar Servicio</ModalHeader>
        <ModalBody>
          <form>
            <label>Código</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              name="codigo"
              defaultValue={product.codigo}
              type="text"
            />
            <label>Nombre</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              name="nombre"
              defaultValue={product.nombre}
              type="text"
            ></input>
            <label>Precio</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              name="precio"
              defaultValue={product.precio}
              type="number"
            ></input>
            <label>Lote</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              name="lote"
              defaultValue={product.lote}
              type="number"
            ></input>
            <hr />
            <center>
              <Button color="primary" onClick={() => actualizarProducto()}>
                Confirmar
              </Button>
              <Button
                onClick={() => {
                  setStateModal(false);
                }}
              >
                Cerrar
              </Button>
            </center>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Listar;

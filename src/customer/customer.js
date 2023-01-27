import { useReducer, useState } from "react"
import { UseReducerCustomer } from "../useReducerCustomer";
import { CustomerItem } from "./customerItem";
import { Form } from "./form";

export const Customer = () => {

    const init  = ()=> {
        return [
            {
                id: new Date().getTime(),
                dni: "46792627",
                name: "Ever Carlos Tojas",
                age: 23,
            }
        ];
    }

    const [ items, dispatch] = useReducer(UseReducerCustomer, [], init)

    const [object, setObject] = useState({
        id: 0,
        dni: "",
        name: "",
        age: 0,
    })
    

    const handleAdd = (newAdd) => {
        
        dispatch({
            type: 'add',
            payload: newAdd
        })
    }
    const handleDelete = (id) => {

        dispatch({
            type: 'delete',
            payload: id,
        })
    }
  
    const handleEdit = (customer) => {

        setObject(customer);
    
    }
  
    return (
      <div className="row container">
        <div className="col-sm-8">
            <h4>Lista de Clientes</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <CustomerItem
                      handleDelete = { handleDelete }
                      handleEdit = { handleEdit }
                      items={ items }
                    />
                </tbody>
            </table>
        </div>
        <div className="col-sm-4">
            <br />
            <Form
              object= { object }
              handleAdd = { handleAdd }
            />
        </div>
      </div>
    )
}
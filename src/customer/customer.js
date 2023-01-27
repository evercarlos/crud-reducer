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
    

    const handleSaveCustomer = (newAdd) => {
        
        dispatch({
            type: 'add',
            payload: newAdd
        })
    }

    const handleEditCustomer = (editData) => {
        
        dispatch({
            type: 'edit',
            payload: editData
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
      <div className="row margin-div">
        <div className="col-sm-8">
            <h4 className="text-center color-text">Lista de Clientes</h4>
            <div
             className="table-responsive"
            >
                <table className="table">
                    <thead>
                        <tr>
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
        </div>
        <div className="col-sm-4">
            <br />
            <Form
              object= { object }
              handleSaveCustomer = { handleSaveCustomer }
              handleEditCustomer = { handleEditCustomer }
            />
        </div>
      </div>
    )
}
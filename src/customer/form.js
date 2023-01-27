import { useEffect } from "react";
import { useForm } from "../hooks/useForm"

export const Form = ( {handleSaveCustomer, handleEditCustomer, object}) => {


    // crearemos un customHooks
    const {values: value, setValue, handleChange, reset } = useForm({
        id: 0,
        dni: '',
        name: '',
        age: 0,
    });

    useEffect(() => {
        setValue(object)
    },[object, setValue]) //Se agrega los dos por error -> React Hook useEffect has missing dependencies: 'object' and 'setValue'. Either

    const handleSubmit = (e) => {
        
        e.preventDefault();

        let params;
        
        if(value.id === 0) {
            params = {...value, id: new Date().getTime()};
            handleSaveCustomer(params);
        } else {
            params = {...value};
            handleEditCustomer(params);
        }

        reset();
    }

    return (
        <>
        <form onSubmit={ handleSubmit }>
          <h4 className="text-center color-text">Registro de Clientes</h4>
        <div className="form-group">
            <label>
              DNI:
            </label>
            <input
            type="text"
            className="form-control"
            id="dni"
            name="dni"
            value={ value.dni }
            onChange={ handleChange }
            />
        </div>
        <div className="form-group">
            <label>
              Nombre:
            </label>
            <input
            type="text"
            className="form-control" 
            id="name" 
            name="name"
            value={ value.name }
            onChange={ handleChange }
            />
        </div>
        <div className="form-group">
            <label>
              Edad:
            </label>
            <input
            type="text"
            className="form-control" 
            id="age" 
            name="age" 
            value={ value.age }
            onChange={ handleChange }
            />
        </div>
        <div
          className="text-center"
        >
           <button
              type="submit"
              className="btn btn-primary"
            >
                Submit
            </button>
        </div>
        </form>
        </>
    )
}
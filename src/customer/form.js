import { useEffect } from "react";
import { useForm } from "../hooks/useForm"

export const Form = ( {handleAdd, object}) => {


    // crearemos un customHooks
    const [value, setValue, handleChange, reset] = useForm({
        id: new Date().getTime(),
        dni: '',
        name: '',
        age: 0,
    });

    useEffect(() => {
        setValue(object)
    },[object, setValue]) //Se agrega los dos por error -> React Hook useEffect has missing dependencies: 'object' and 'setValue'. Either

    const handleSubmit = (e) => {
        
        e.preventDefault();

        const params = {...value, id: new Date().getTime()};

        handleAdd(params);
        reset();
    }

    return (
        <>
        <form onSubmit={ handleSubmit }>
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
        <button
        type="submit"
        className="btn btn-primary text-center"
        >
            Submit
        </button>
        </form>
        </>
    )
}
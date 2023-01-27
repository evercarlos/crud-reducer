import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [values, setValue] = useState(initialState);

    const handleChange = (e) => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setValue(initialState)
    }

    return {
        values,
        setValue,
        handleChange,
        reset
    };
   
}
// Este hook nos sirve para realizar cambios a modo de handleInputChange el cual nos serviría para obtener datos de un input a través de su name
import { useState } from "react";

export const useForm = ( initialState = {} ) => {
  
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        
        setValues({
            ...values,
            [target.name] : target.value
        });

    }

    return [ values, handleInputChange, reset ];

    
};

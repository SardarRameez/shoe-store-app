import { createContext, useReducer } from "react"
import React from 'react'
import { dataReducer } from "./Reducer";

let shoe_data={
    data:[
        // {img:"Men_shoes_01"},
        {img:"Women_shoes_02"},
        {img:"Kid_shoes_02"}
    ]}

export const shoeContex=createContext(shoe_data);


const ContextApi = ({children}) => {
    const [state, dispatch]=useReducer(dataReducer, shoe_data)

    console.log(state)
    console.log(state.data)

    function Add_shoe(img){
        console.log(img)
        dispatch({
            type:"ADD_SHOE",
            payload:{img:img}
        });
    }

    function Delete_shoe(id){
        console.log(id)
        dispatch({
            type:"DELETE_SHOE",
            payload:id
        });
    }

    return (
        <div>
            <shoeContex.Provider value={{state:state.data,Delete_shoe,Add_shoe}}>
                {children}
            </shoeContex.Provider>
        </div>
    )
}

export default ContextApi

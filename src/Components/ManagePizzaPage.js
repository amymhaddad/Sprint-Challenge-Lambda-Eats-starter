import React, { useState } from 'react';
import axios from 'axios';
import PizzaForm from "./PizzaForm"

export default function ManagePizzaPage() {
    const url = "https://reqres.in/api/users"
   
    const [allOrders, setOrder] = useState([])

    const [error, setError] = useState({})

    const [pizza, setPizza] = useState({
        id:null,
        name:"",
        onions:false,
        pepporoni:false,
        cheese:false,
        mushroom:false,
        instructions:"",
        sauce: "", 
        size: ""
    })

    function handleSizeSelection(event) {
        const pizzaSize = event.target.value
        setPizza({...pizza, size:pizzaSize})
    }

    function handleSauceChange(event) {
        const sauceSelection = event.target.value
        setPizza({...pizza, sauce:sauceSelection})
      }
      
    function handleChange(event) {
        const target = event.target
      
        const value = target.type === "checkbox" ? target.checked : target.value;
        const newPizza = {...pizza, [event.target.name]:value} 
        setPizza(newPizza)
      }
      
    function isValid() {
        let _error = {};
        if (pizza.name.length < 2)_error.name="Your name must be at least two characters."
        setError(_error)
        return Object.keys(_error).length === 0;
    }

    function clearData() {
        alert("Congrats! Your pizza is on its way!")
        setPizza ({
            id:null,
            name:"",
            onions:false,
            pepporoni:false,
            cheese:false,
            mushroom:false,
            instructions:"",
            sauce: "",
            size: ""
        })

        setError({})
    }

    function handleSubmit(event) {
        event.preventDefault()

        if(!isValid()) return;    
        axios({
            method: "post",
            url: url,
            data: pizza,
            headers: {
               'Content-Type': 'application/json'
            }
           })
        .then(function (response) {
          const nextOrder = {...pizza, id: response.data.id}
          setOrder([...allOrders, nextOrder])
        })
        .then(() => clearData());   
         
    }

    return (
        <div>
            <PizzaForm 
                pizza={pizza}
                onChange={handleChange}
                onSubmit={handleSubmit}
                error={error}
                checked={pizza}
                sauce={pizza.sauce}
                onSauceSelection={handleSauceChange}
                onSizeSelection={handleSizeSelection}
            />
        </div>
    )
}
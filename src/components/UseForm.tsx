import React from "react";

type UserProps = {
    data: {
        name:string;
        email:string;
    }
    updateFieldHandler: (key:string, value:string) => void
}

const UseForm = ({ data, updateFieldHandler }: UserProps) => {
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFieldHandler("name", event.target.value)
    }
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFieldHandler("email", event.target.value)
    }
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input 
            type="text"
            name="name" 
            id="name" 
            placeholder="Digite seu nome"
            required
            value={data.name || ""}
            onChange={handleNameChange} 
            />
        </div>
        <div className="form-control">
            <label htmlFor="E-mail">E-mail:</label>
            <input 
            type="text"
            name="email" 
            id="email" 
            placeholder="Digite seu E-mail"
            required
            value={data.email || ""}
            onChange={handleEmailChange} 
            />
        </div>
    </div>
  )
}

export default UseForm
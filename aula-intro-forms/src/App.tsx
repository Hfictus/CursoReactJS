




import { useState } from "react";

type FormDate = {
  firstName: string;
  lastName: string;
}


function App() {
  
  const [formData, setFormData] = useState<FormDate>({
    firstName: '',
    lastName: ''
  })

  const [fullName, setFullName] = useState<string>();

  function handleInputChange(event : React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value});
  }

  function handleFormSubmit(event : React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFullName(formData.firstName + " " + formData.lastName);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Digite seu sobrenome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Mostrar nome completo</button>
        </div>
      </form>
      <h2>{fullName}</h2>
    </>
  )
}

export default App

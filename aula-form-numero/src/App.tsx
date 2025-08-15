


import { useState } from "react";

type FormData = {
  salary?: number;
}

function App() {

  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event : React.ChangeEvent<HTMLInputElement> ) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event : any) {
    event.preventDefault();
    /*estudos:
      console.log(formData); -> objeto vazio -> {} -> envio com input vazio
      console.log(formData.salary); -> undefined -> envio com input vazio
    */
    //Valor mínimo padrão (0)
    /*formData.salary == undefined? 0: formData.salary;
      console.log(formData.salary || 0);
    */
    
    //Valor máximo padrão:
    console.log(formData.salary || Number.MAX_VALUE);
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
          name="salary"
          value={formData.salary || ""}
          type="text"
          //placeholder="Digite um valor mínimo"
          placeholder="Digite um valor máximo"
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default App

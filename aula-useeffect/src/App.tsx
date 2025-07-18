


import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {

  console.log("PASSOU NO APP");

  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log("PASSOU NO USEEFECT");
    setProd(findProduct(productId));
  }, [productId]);

  function handleClick() {
    console.log("PASSOU NO HANDLECLICK");
    setProductId(2);
  }

  return (
    <>
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handleClick}>Mudar para produto 2</button>
    </>
  )
}

export default App

import React from "react";
import { useState } from "react";

const DoblarNumero = () => {

  const [doblar, setNumero] = useState(1);

  const handleReset = () =>
  {
        setNumero(1)
  }

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">App Para Doblar Números 🐱‍👤🐺</h1>
        <hr />
        <div className="text-center">
        <h2 className="mt-4 mb-4">El número doblado es: {doblar}</h2>
        <button className="btn btn-success" onClick={()=>setNumero(doblar + doblar)}>Doblar</button>
        <button className="btn btn-info ms-2" onClick={handleReset}>Resetar</button>
        </div>
      </div>
    </>
  );
};

export default DoblarNumero;



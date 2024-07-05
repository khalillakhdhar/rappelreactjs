/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

export default function Indice() {
    // imc= poids/taille² => message de confirmation
    const [poids,setPoids]=useState('');
    const [taille,setTaille]=useState('');
    const [imc,setIMC]=useState(null);
    const [msg,setMsg]=useState('')
    const calculeIMC=()=>
    {
        if(poids!=='' && taille!=='')
        {
            const imcValeur=(poids/(taille*taille)).toFixed(2)
            setIMC(imcValeur)
            if(Math.round(imcValeur)<18)
                setMsg("maigre")
            else if(Math.round(imcValeur)<=25)
                setMsg("idéal")
            else
            setMsg("surpoids")
        setPoids('')
        setTaille('')
        
        }
        else
        {
            setIMC(null)
        setMsg("veuillez remplir tout les champs")
        }


    }

  return (
    <div>
      <div className="mb-3">
        <label >Poids</label>
        <input value={poids} onChange={(e)=>setPoids(e.target.value)} type="number" className="form-control"   />
      </div>
      <div className="mb-3">
        <label>Taille:</label>
        <input value={taille} type="number" onChange={(e)=>setTaille(e.target.value)} className="form-control" />
      </div>
      
      
      <button onClick={calculeIMC} className="btn btn-primary">Calculer</button>
      <div>
        <h3>Votre IMC est: {imc}</h3>
    <p>{msg}</p>
      </div>
    



    </div>
  )
}

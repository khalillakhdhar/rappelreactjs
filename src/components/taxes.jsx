import React, { useState } from 'react';

function Taxes() {
    const [pu,setPu]=useState(0);
    const [quantite,setQuantite]=useState(0);
    const [totale,setTotal]=useState(0);
    const [taxe,setTaxes]=useState(null);
    const calculer=()=>
    {
        const to=pu*quantite;
        setTotal(to);
        if(to<=1000)
            setTaxes(to*0.5)
        else if(to<=10000)
            setTaxes(to*0.12)
        else
        setTaxes(to*0.19)
    }
  return (
    <div>
         <div className='form-group'>
            <label className='form-label'>Prix unitaire</label>
            <input type="number" name='pu' value={pu} placeholder='prix unitaire' onChange={(e)=>setPu(e.target.value)} />
            
         </div>
         <div className='form-group'>
            <label className='form-label'>Quantité</label>
            <input type="number" name='quantite' value={quantite} placeholder='prix unitaire' onChange={(e)=>setQuantite(e.target.value)} />

         </div>
         <button className='btn btn-primary' onClick={calculer} >Calculer</button>
         <div className='text-center'>
            le prix totale net : {totale}<br></br>
            la taxe à payer: { taxe}<br/>
            le montant totale dû: {taxe+totale}
            <br></br>
         </div>
    </div>
  )
}

export default Taxes
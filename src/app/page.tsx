"use client";

import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {

  const [array, setArray] = useState<any[]>([
    {nom:"poires",quantite:3},
    {nom:"pommes de terre",quantite:7},
    {nom:"tomate",quantite:4},
    {nom:"poireau",quantite:1}
  ]);
  const [erreur, setErreur] = useState<boolean>(false);
  

  function ajouterElement(){
    let newValue = {
      nom : (document.getElementById("elementAchatAjout") as HTMLInputElement).value,
      quantite : (document.getElementById("elementQuantiteAjout") as HTMLInputElement).value
    }

    if(newValue.nom && newValue.quantite){
      setErreur(false);
      setArray([...array, newValue]);
      (document.getElementById("elementAchatAjout") as HTMLInputElement).value = "";
      (document.getElementById("elementQuantiteAjout") as HTMLInputElement).value = "";
    }else{
      setErreur(true);
    }
  }

  function modifier(index: number){

  }

  function supprimer(index:number){
    console.log("test")
    setArray(array.slice(0,index).concat(array.slice(index+1)));
  }

  return (
    <div>
      <Header/>
      <main className="flex flex-col justify-center-safe gap-[32px] row-start-2 items-center">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Nom</th>
                <th>Quantité</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {array.map((item,index)=>
                <tr key={index}>
                  <th>{index+1}</th>
                  <td>{item.nom}</td>
                  <td>{item.quantite}</td>
                  <td className="flex flex-row">
                    <img onClick={() => modifier(index)} className="mr-4 hover:cursor-pointer" width="18" height="18" src="https://img.icons8.com/forma-regular/24/create-new.png" alt="create-new"/>
                    <svg onClick={() => supprimer(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" strokeWidth="1.8" stroke="currentColor" className="size-[1.2em] hover:cursor-pointer">
                      <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                    </svg>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="join ">
          <input id="elementAchatAjout" type="text" className="join-item input input-primary w-stretch" placeholder="ajouter un truc a acheter"></input>
          <input
            id="elementQuantiteAjout"
            type="number"
            className="join-item input input-primary w-fit"
            required
            placeholder="1"
            min="1"
            max="99"
          />
          <button onClick={ajouterElement} className="join-item rounded-r-full btn btn-outline btn-primary">Ajouter</button>
        </div>
        {erreur && <p style={{ color: "red" }}>Veuillez entrer une valeur valide.</p>}
      </main>
      <Footer/>
    </div>
  );
}

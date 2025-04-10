"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page(){
    const router = useRouter();
    
    const handleSendToVagas = () =>{
        router.push("/")
    }
    const handleSendToNewVagas = () =>{
        router.push("/AddVagas")
    }
    const handleSendToEntrevista = () =>{
        router.push("/generator")
    }


    return(
        <div className="w-full flex justify-between items-center px-4 py-3">
            <h1 className="text-blue-900 text-3xl mx-4 my-3">Protótipo Analise CV</h1>
            <nav>
                <button className="cursor-pointer px-3 py-2 border-2 bg-gray-200 mx-1 border-blue-900 hover:bg-blue-900 rounded-md text-blue-900 hover:text-white" onClick={handleSendToVagas}>Vagas</button>
                <button className="cursor-pointer px-3 py-2 border-2 bg-gray-200 mx-1 border-blue-900 hover:bg-blue-900 rounded-md text-blue-900 hover:text-white" onClick={handleSendToNewVagas}>Adicionar Vagas</button>
                <button className="cursor-pointer px-3 py-2 border-2 bg-gray-200 mx-1 border-blue-900 hover:bg-blue-900 rounded-md text-blue-900 hover:text-white" onClick={handleSendToEntrevista}>Entrevista</button>
            </nav>
        </div>
    )
}
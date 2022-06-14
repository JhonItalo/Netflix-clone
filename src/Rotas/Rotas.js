//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//hook
import React, { useState, useEffect } from 'react';
//page
import Home from "../Pages/Home"
import Series from "../Pages/Series"
import Filmes from "../Pages/Filmes"
import Bombando from "../Pages/Bombando"
import MinhaLista from "../Pages/MinhaLista"
//componentes
import Banner from "../componentes/HomePage/Banner"
//requisições func
import { listafilmes } from "../Requisicoes"

const Rotas = () => {
    //controle de rotas
    const [rotaAtual, setrotaAtual] = useState("Home")
    //lista de filmes
    const [filmes, setfilmes] = useState('');
    //filme banner principal
    const [filmeDestaque, setfilmeDestaque] = useState("")
    //carregando dados
    useEffect(() => {
        (async function req() {
            const t = await listafilmes();
            setfilmes(t);
            const h = await t[0].lista.results[Math.floor(Math.random() * t[0].lista.results.length)]
            setfilmeDestaque(h)
        })();
    }, []);

    return (
        <BrowserRouter>
            <Banner rotaAtualParams={rotaAtual} filmebanner={filmeDestaque} />
            <Routes>
                <Route index element={<Home setrotaAtualParams={setrotaAtual} />} />
                <Route path="/series" element={<Series setrotaAtualParams={setrotaAtual} />} />
                <Route path="/filmes" element={<Filmes setrotaAtualParams={setrotaAtual} />} />
                <Route path="/bombando" element={<Bombando setrotaAtualParams={setrotaAtual} />} />
                <Route path="/minhalista" element={<MinhaLista setrotaAtualParams={setrotaAtual} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;

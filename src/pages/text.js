import React from 'react'
import Header from '../Components/Header'
import {navigate} from 'gatsby';

const Teste = () => (
    <div>
        <Header/>
        <div><h1>Teste</h1></div>
        <button onClick={()=>navigate("/")}>Navigate to HomePage</button>
        <h1>Teste</h1>
    </div>
)

export default Teste;
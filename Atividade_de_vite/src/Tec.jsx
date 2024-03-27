import style from './Tec.module.css'
import Cards from './components/Cards'
import Menu from './components/Menu'

import { useState } from 'react'

import ReactImg from './assets/img/react.png'
import ViteImg from './assets/img/vite.png'
import AxiosImg from './assets/img/axios.png'
import NpmImg from './assets/img/npm.png'
import NodeImg from './assets/img/nodejs.png'
import DomImg from './assets/img/dom.png'

export const Tec = () =>{ 
    const [show, setShow] = useState('all');
        return(
            <>
                <Menu/>
                <section className={style.wrapCardPrincipal}>
                    <h1>Conheça as tecnologias de React!</h1>
                    <div className={style.styleBtnCards}>
                        <button className={style.btnTec} onClick={() => setShow('vite')}>Vite</button>
                        <button className={style.btnTec} onClick={() => setShow('axios')}>Axios</button>
                        <button className={style.btnTec} onClick={() => setShow('react')}>React</button>
                        <button className={style.btnTec} onClick={() => setShow('npm')}>NPM</button>
                        <button className={style.btnTec} onClick={() => setShow('node_js')}>Node Js</button>
                        <button className={style.btnTec} onClick={() => setShow('react_router_dom')}>React_Router_Dom</button>
                        <button className={style.btnTec} onClick={() => setShow('all')}>All tec</button>
                        {/* <button className={style.btnTec} onClick={() => window.location.reload}>Reset Page!</button> */}
                    </div>
                    <div className={style.wrapCards}>
                        {show === 'vite' && <Cards title='VITE' imgSrc={ViteImg} desc='Vite é um servidor de desenvolvimento local escrito por Evan You, o criador do Vue.js, e usado por padrão pelo Vue e para modelos de projeto React. Possui suporte para TypeScript e JSX. Ele usa Rollup e esbuild internamente para empacotamento.'/>}
                        {show === 'axios' && <Cards title='AXIOS' imgSrc={AxiosImg} desc='O Axios é uma escolha popular para lidar com a comunicação de dados entre o frontend e o backend em aplicações web. Ele fornece uma API simples e flexível para realizar chamadas de API assíncronas, como obter dados de uma API RESTful, enviar dados para um servidor ou atualizar dados em tempo real.'/>}
                        {show === 'react' && <Cards title='REACT' imgSrc={ReactImg} desc='O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'/>}
                        {show === 'npm' && <Cards title='NPM' imgSrc={NpmImg} desc='npm é um gerenciador de pacotes para o Node.JS npm, Inc. é uma subsidiária do GitHub, que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do Git. npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.'/>}
                        {show === 'node_js' && <Cards title='NODE.JS' imgSrc={NodeImg} desc='Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.'/>}
                        {show === 'react_router_dom' && <Cards title='REACT_ROUTER_DOM' imgSrc={DomImg} desc='O React Router é uma excelente opção para gerenciamento de rotas em projetos React, permitindo uma navegação mais fluida e sem a necessidade de fazer novas solicitações ao servidor. Com ele, podemos criar rotas facilmente e criar a navegação entre as páginas do nosso aplicativo de forma simples e intuitiva.'/>}
                        {show === 'all' && 
                            <>
                                <Cards title='VITE' imgSrc={ViteImg} desc='Sou o Vite! Para saber mais, clique no botão "Vite"'/> 
                                <Cards title='AXIOS' imgSrc={AxiosImg} desc='Sou o Axios! Para saber mais, clique no botão "Axios"'/>
                                <Cards title='REACT' imgSrc={ReactImg} desc='Sou o React! Para saber mais, clique no botão "React"'/>
                                <Cards title='NPM' imgSrc={NpmImg} desc='Sou o Npm! Para saber mais, clique no botão "Npm"'/>
                                <Cards title='NODE.JS' imgSrc={NodeImg} desc='Sou o Node.Js! Para saber mais, clique no botão "Node.js"'/>
                                <Cards title='REACT_ROUTER_DOM' imgSrc={DomImg} desc='Sou o React Router Dom! Para saber mais, clique no botão "React Router Dom"'/>
                            </>}
                    </div>
                </section>
            </>
        )
    }
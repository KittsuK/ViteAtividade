import style from './Calc.module.css'
import Menu from './components/Menu'

import { useEffect, useState } from "react"
import Draggable from 'react-draggable';


export const Calc = () =>{
const [n1, setN1] = useState()
const [n2, setN2] = useState()
const [n1md, setN1MD] = useState()
const [n2md, setN2MD] = useState()
const [n3, setN3] = useState()
const [n4, setN4] = useState()
const [n5, setN5] = useState()
const [respsom, setRespSom] = useState()
const [respSub, setRespSub] = useState()
const [respMult, setRespMult] = useState()
const [respDiv, setRespDiv] = useState()
const [respMed, setRespMed] = useState()

// const PageClear = window.location.reload


useEffect(()=> {
        if( n1 !== undefined && n2 !== undefined){
            setRespSom(parseFloat(n1) + parseFloat(n2))
            setRespSub(parseFloat(n1) - parseFloat(n2))
            setRespMult(parseFloat(n1) * parseFloat(n2))
            setRespDiv(parseFloat(n1) / parseFloat(n2))
        }
}, [n1, n2])

useEffect(() => {
    if( n1md !== undefined && n2md !== undefined && n3 !== undefined && n4 !== undefined && n5 !== undefined){
        setRespMed((parseFloat(n1md) + parseFloat(n2md) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5))/5)
    }
})
    return(
        <div className={style.sectionCalc}>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1>Calculos</h1>
                    <div className={style.wrapInputsCalc}>
                        <Draggable>
                            <input 
                            className={style.inpStyle}
                            type="text"
                            placeholder="Digite o primeiro número" 
                            value={n1}
                            onChange={(e) => setN1(e.target.value)}
                            />
                        </Draggable>
                        <Draggable>
                            <input 
                            className={style.inpStyle}
                            type="text" 
                            placeholder="Digite o segundo número" 
                            value={n2}
                            onChange={(e) => setN2(e.target.value)}
                            />
                        </Draggable>
                    </div>
                    <div className={style.wrapInputsCalc}>
                        <Draggable>
                            <div className={style.wrapEach}>
                                <h1>Soma</h1>
                                {!isNaN(respsom) && <p>{respsom.toFixed(2)}</p>}
                            </div>
                        </Draggable>
                        <Draggable>
                            <div className={style.wrapEach}>
                                <h1>Subtração</h1>
                                {!isNaN(respSub) && <p>{respSub.toFixed(2)}</p>}
                            </div>
                        </Draggable>
                        <Draggable>
                            <div className={style.wrapEach}>
                                <h1>Multiplicação</h1>
                                {!isNaN(respMult) && <p>{respMult.toFixed(2)}</p>}
                            </div>  
                        </Draggable>
                        <Draggable>
                            <div className={style.wrapEach}>
                                <h1>Divisão</h1>
                                {!isNaN(respDiv) &&  <p>{respDiv.toFixed(2)}</p>}
                            </div>
                        </Draggable>
                    </div>
                    <div className={style.wrapCalc}>
                        <h1>Calcular média entre 5 numeros:</h1>
                        <div className={style.wrapInputsCalc}>
                        <Draggable>
                            <input 
                            className={style.inpStyle}
                            type="text"
                            placeholder="Digite o primeiro número" 
                            value={n1md}
                            onChange={(e) => setN1MD(e.target.value)}
                            />
                        </Draggable>
                        <Draggable>
                            <input 
                            className={style.inpStyle}
                            type="text" 
                            placeholder="Digite o segundo número" 
                            value={n2md}
                            onChange={(e) => setN2MD(e.target.value)}
                            />
                        </Draggable>
                        <Draggable>
                            <input 
                            className={style.inpStyle}
                            type="text" 
                            placeholder="Digite o segundo número" 
                            value={n3}
                            onChange={(e) => setN3(e.target.value)}
                            />
                        </Draggable>
                        <Draggable>
                            <input 
                            className={style.inpStyle}
                            type="text" 
                            placeholder="Digite o segundo número" 
                            value={n4}
                            onChange={(e) => setN4(e.target.value)}
                            />
                        </Draggable>
                        <Draggable>
                            <input 
                            className={style.inpStyle}
                            type="text" 
                            placeholder="Digite o segundo número" 
                            value={n5}
                            onChange={(e) => setN5(e.target.value)}
                            />
                        </Draggable>
                    </div>
                    <div className={style.wrapInputsCalc}>
                        <Draggable>
                            <div className={style.wrapEachMed}>
                                <h1>Resultado da média:</h1>
                                {!isNaN(respMed) &&  <p>{respMed.toFixed(2)}</p>}
                            </div>
                        </Draggable>
                    </div>
                    </div>
            </div>
        </div>
    )
}
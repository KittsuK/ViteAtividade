import Draggable from 'react-draggable'
import style from './App.module.css'
import Menu from './components/Menu.jsx'

export default function App() {

  return (
    <div className={style.wrapPrincipal}>
      <Menu/>
      <div className={style.divPrincipal}>
        <h1>Seja bem vindo a atividade!</h1>
          <div>
            <h2>Aqui você vai ver:</h2>
            <Draggable>
              <div className={style.cards}>
                <h2>Tecnologias de React!</h2>
                <p> Aprenda um pouco sobre as tecnologias utilizadas em react.</p>
              </div>
            </Draggable>
          </div>
      </div>
    </div>
  )
}



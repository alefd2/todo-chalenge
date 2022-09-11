import { Header } from './components/Header';
import './global.css';
import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import { TodoBox } from './components/TodoBox';


function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>

        <form className={styles.formEdit} >
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            name=""
            id=""
          />
          <button type="submit">
            <strong>Criar</strong>
            <PlusCircle size={32} />
          </button>
        </form>
        <main>
          <TodoBox />
        </main>
      </div>
    </>
  )
}

export default App
import { Header } from './components/Header';
import './global.css';
import { DeviceTabletSpeaker, PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import { TodoBox } from './components/TodoBox';
import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';


export interface TodoProps {
  id: string | any;
  title: string;
  isComplete: boolean;
  onCheckTodo?: (id: any) => void;
}

function App() {

  const [title, setTitle] = useState("")
  const [todos, setTodo] = useState<TodoProps[]>([
    {   
        id: uuidv4(),
        title: "Terminar projeto 1",
        isComplete: false
    },
        {   
        id: uuidv4(),
        title: "Terminar projeto 1",
        isComplete: false
    },
    {   
        id: uuidv4(),
        title: "Visitar os meus pais",
        isComplete: false
    },
    {   
        id: uuidv4(),
        title: "Lavar a louça",
        isComplete: false
    },
    {   
        id: uuidv4(),   
        title: "Terminar projeto 1",
        isComplete: false
    },

])


const deleteTodoById = (id: string) => {

  const newTodo = todos.filter(todo => todo.id !== id);
  setTodo(newTodo);
}

const selectCheckTodo = (id: string) => {
  const newTodo = todos.map(todo => {
    if(todo.id === id) {
      return {
        ...todo,
        isComplete: !todo.isComplete
      }
    }
    return todo
  });
  setTodo(newTodo);
}

//add a new todo
const addTodo = (tasckTitle: string) => {
  setTodo([
    ...todos,
    {
      id: uuidv4(),   
      title: tasckTitle,
      isComplete: false 
    }
  ])
}

const handleSubmmit = (event:FormEvent ) => {
  event.preventDefault();

  if(title === "") {
    alert("Selecione")
  } else {
    addTodo(title);
    setTitle("");
  }
}

const onChangetitle = (event: ChangeEvent<HTMLInputElement>) => {
  setTitle(event.target.value)
}

/***/

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
 
        <form className={styles.formEdit} onSubmit={handleSubmmit} >
          <input
            type="text"
            value={title}
            placeholder="Adicione uma nova tarefa"
            onChange={onChangetitle}
            required
          />
          <button type="submit">
            <strong>Criar</strong>
            <PlusCircle size={32} />
          </button>
        </form>

        <section>
          <TodoBox onCheck={selectCheckTodo} onDelete={deleteTodoById} todos={todos}/>
        </section>
      </div>
    </>
  )
}

export default App
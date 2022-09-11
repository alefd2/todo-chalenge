import styles from './TodoBox.module.css';
import Clipboard2 from '../assets/Clipboard.svg';
import { v4 as uuidv4 } from 'uuid';

import { FormEvent, useState } from 'react';
import { CardTodo } from './CardTodo';


export interface TodoProps {
    id: string;
    title: string;
    isComplete: boolean;
}


export const TodoBox = () => {

    
    const [todo, setTodo] = useState([
        {   
            id: uuidv4(),
            title: "Terminar projeto 1",
            isComplete: false
        },
        {   
            id: uuidv4(),
            title: "Terminar projeto 1",
            isComplete: true
        },
        {   
            id: uuidv4(),
            title: "Terminar projeto 1",
            isComplete: true
        },
        {   
            id: uuidv4(),
            title: "Terminar projeto 1",
            isComplete: false
        },

    ])
    
    const totalCountTask = todo.length;

    const taskComplete = todo.filter(todo => todo.isComplete === true)

    console.log( taskComplete);

    const hadleTodoToStatus = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <>
            <header>
                <div className={styles.wrapperBoxTodo}>
                    <div className={styles.countCriated}>
                        <strong>Tarefas criadas</strong>
                        <div className={styles.boxNumber}>
                            <strong>{totalCountTask}</strong>
                        </div>
                    </div>
                    <div className={styles.countComplited}>
                        <strong>Concluídas</strong>
                        <div className={styles.boxNumber}>
                            <strong> {taskComplete.length} de {totalCountTask}</strong>
                        </div>
                    </div>
                </div>

            </header>

            <main>
                {
                    !todo ? 
                        (
                            <div className={styles.todoContentContainer}>
                                <div className={styles.divider} ></div>
                            <img src={Clipboard2} width={56} alt="" />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                        )
                    :
                        (
                            <div className={styles.todoContentContainer}>
                               { todo.map((todo)=>
                                    <CardTodo 
                                        title={todo.title}
                                        isComplete={todo.isComplete}
                                        id={todo.id}
                                    />
                                )}
                            </div>
                            
                        )
                }
            </main>
        </>
    )
}
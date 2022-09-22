import styles from './TodoBox.module.css';
import Clipboard2 from '../assets/Clipboard.svg';

import { FormEvent, useState } from 'react';
import { CardTodo } from './CardTodo';
import { TodoProps } from '../App';

export interface BoxTodoProps {
    todos: TodoProps[],
    onDelete: (id: string)=> void
    onCheck: (id: string)=> void
}

export const TodoBox = ({todos, onDelete, onCheck}: BoxTodoProps) => {

    const [check, setCheck] = useState(false) 

    const totalCountTask = todos.length;

    const taskComplete = todos.filter(todo => todo.isComplete)

    const validateTodo = todos.length === 0;

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
                    validateTodo ? 
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
                               { todos.map((todo)=>
                                    <CardTodo 
                                        key={todo.id}
                                        id={todo.id}
                                        isComplete={todo.isComplete}
                                        title={todo.title}
                                        onDelete={onDelete}
                                        onCheck={onCheck}
                                    />
                                )}
                            </div>
                            
                        )
                }
            </main>
        </>
    )
}
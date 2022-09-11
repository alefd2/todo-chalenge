import styles from './TodoBox.module.css';
import Clipboard2 from '../assets/Clipboard.svg';
import { useState } from 'react';

export const TodoBox = () => {

    const [todo, setTodo] = useState(0);


    return (
        <>
            <header>
                <div className={styles.wrapperBoxTodo}>
                    <div className={styles.countCriated}>
                        <strong>Tarefas criadas</strong>
                        <div className={styles.boxNumber}>
                            <strong>1</strong>
                        </div>
                    </div>
                    <div className={styles.countComplited}>
                        <strong>Concluídas</strong>
                        <div className={styles.boxNumber}>
                            <strong>1</strong>
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
                            <div>TEm todo</div>
                        )
                }
            </main>
        </>
    )
}
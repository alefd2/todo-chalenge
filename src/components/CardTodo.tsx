import { Trash } from 'phosphor-react';
import styles from './CardTodo.module.css';
import { TodoProps } from './TodoBox';



export const CardTodo = ({ title, isComplete }: TodoProps) => {
    return (
        <div className={styles.wrapperCard}>

            <div className={styles.check}>
                <div className={styles.custonCheck}>
                    <input type="checkbox" id="checkbox1" />
                </div>

                <div className={ isComplete == true ? styles.contentTodoDone : styles.contentTodoDoing}>
                    {title}
                </div>
            </div>

            <div className={styles.buttonActionTodo}>
                <button>
                    <Trash size={16} />
                </button>
            </div>
        </div>
    )
}
import { Trash } from 'phosphor-react';
import styles from './CardTodo.module.css';



interface Props {
    id?: string | any;
    isComplete: boolean;
    title: string;
    onDelete: (id: string)=> void;
    onCheck: (id: string)=> void;

}

export const CardTodo = ({id, title, isComplete, onDelete, onCheck}: Props) => {

    return (
        <div className={styles.wrapperCard}>

            <div className={styles.check}>
                <div className={styles.custonCheck}>
                    <input onClick={()=>onCheck(id)} type="checkbox" id="checkbox1" />
                </div>

                <div className={ isComplete == true ? styles.contentTodoDone : styles.contentTodoDoing}>
                    {title}
                </div>
            </div>

            <div className={styles.buttonActionTodo}>
                <button onClick={()=> onDelete(id)}>
                    <Trash size={16} />
                </button>
            </div>
        </div>
    )
}
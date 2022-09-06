import styles from './Header.module.css';
import logoTodo from '../assets/logoTodo.svg';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logoTodo} alt="" />
        </header>
    );
} 
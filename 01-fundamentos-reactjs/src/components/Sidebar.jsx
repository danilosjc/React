import styles from './sidebar.module.css';

export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
        <img className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
        
        <div className={styles.profile}>
            <strong>Danilo Martins</strong>
            <span>developer</span>
        </div>
        <footer>
            <a href="#">Editar o seu perfil</a>
        </footer>
    </aside>
    )
}
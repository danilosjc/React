import { PencilLine} from 'phosphor-react'
import styles from './sidebar.module.css';
import React from 'react';

export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
        <img className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
        
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/30728761?v=4"/>

            <strong>Danilo Martins</strong>
            <span>developer</span>
        </div>
        <footer>
            
            <a href="#">
            <PencilLine />
            Editar o seu perfil</a>
        </footer>
    </aside>
    )
}
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/30728761?s=96&v=4" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Danilo Martins</strong>
                            <time title="21 de Outubro às 08:30" dateTime="2022-10-10 08:13:38">publica cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content} </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
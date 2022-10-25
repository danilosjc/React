import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/30728761?s=96&v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Danilo Martins</strong>
                        <span>web developer</span>
                    </div>
                </div>
                <time title="21 de Outubro às 08:30" dateTime="2022-10-10 08:13:38">publica há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                <p>Incidunt ipsum eveniet eius modi iste quasi veniam velit </p>
                <p>sapiente minima accusamus, earum impedit tempora rem corrupti alias dolorum explicabo dicta cum.</p>
                
                <p> <a href=''>Jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlu #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
                <button type="submit">Publicar</button>
            </form>
        </article>
    )

}
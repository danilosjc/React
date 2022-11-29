import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from './App.module.css';

import './global.css'

import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/30728761?s=96&v=4',
      name: 'Danilo Martins',
      role: 'PO @ Genesis'
    },
    content: [
            { type: 'paragraph', content: 'Fala galera', },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW '},
            { type: 'link', content: 'jane.desing/doctorcare'},
          ],
          publishedAt: new Date('2022-11-08 19:56:00'),
      },
      {
      id: 2,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/30728761?s=96&v=4',
        name: 'Victor Belarmino',
        role: 'PMO @Genesis'
      },
      content: [
              { type: 'paragraph', content: 'Fala galera', },
              { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW '},
              { type: 'link', content: 'jane.desing/doctorcare'},
            ],
            publishedAt: new Date('2022-11-04 19:56:00'),
          }  
    ];

export function App() {
      return (
        <div>
          <Header />
          <div className={styles.wrapper}>
            <Sidebar />
            <main>
              {posts.map(post => {
                return ( <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
                )
              })}
            </main>
          </div>
        </div>
      )
}

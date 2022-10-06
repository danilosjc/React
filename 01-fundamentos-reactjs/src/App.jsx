import { Header } from "./components/Header"
import { Post } from "./post"

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Danilo Martins"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Accusantium sequi minima expedita optio cumque in distinctio architecto 
        fuga eum asperiores! Repellat fuga quidem, cupiditate consequuntur praesentium doloremque sunt repudiandae eum." />
      <Post 
        author="Roberto Carlos"
        content="Um novo post diferente" />
    </div>
  )
}

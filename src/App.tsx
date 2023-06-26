import "./App.css";
import { useState } from "react";
import axios from "axios";

const api = axios.create({
	baseURL: "https://infoweb-api.vercel.app/",
});

const AppNavBar = () => {
  return (
    <div className="card">
      <h1>Lista de tarefas (apenas leitura)</h1>
    </div>
  );
}

const AppTarefasItem = () => {(<></>)}

const AppTarefas = () => {
  const [tarefas, setTarefas] = useState([
    
  ])
  
  const tratarClique = () => {
    api.get("/tarefas").then((response) => {
      console.info("Alô mundo!")
      console.info(response.data);
      const lista = response.data.data.map((item: any) => item.titulo);
      console.info(lista);
      setTarefas(lista);
    })
    
  }
  return (
    <div className="card">
      <button onClick={tratarClique}>Pegar tarefas</button>
      <ul>
        {tarefas.map((tarefa:string, indice: number) => (
          <li key={indice}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

const App = () => {
  return (
    <>
      <AppNavBar />
      <AppTarefas />
    </>
  );
};

export default App;

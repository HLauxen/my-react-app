import React, {useState} from 'react';
import Formulario from '../formulario';
import Lista from '../lista';
import style from './App.module.scss';
import Cronometro from '../cronometro';
import { ITarefa } from '../../types/tarefa';


function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
      setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa, 
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
    }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
      tarefas={tarefas}
      selecionaTarefa = {selecionaTarefa}
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;

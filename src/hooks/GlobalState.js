import React, {createContext, useState} from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = props => {
   const [listaTarefa, setListaTarefa] = useState([]);   

   // Ações
   const adicionarTarefa = tarefa => {
      setListaTarefa([...listaTarefa, tarefa]);
   };

   const removerTarefa = id => {
      const novaListaTarefa = listaTarefa.filter(tarefa => tarefa.id !== id);
      setListaTarefa(novaListaTarefa);
   };

   const atualizarTarefa = tarefa => {
      const novaListaTarefa = listaTarefa.map(tarefaAnterior =>
         tarefa.id === tarefaAnterior.id ? tarefa : tarefaAnterior
      );
      setListaTarefa(novaListaTarefa);
   };

   const contextValeu = {
      listaTarefa,
      adicionarTarefa,
      removerTarefa,
      atualizarTarefa
   };


   return(
      <GlobalContext.Provider value={contextValeu}>
         {props.children}
      </GlobalContext.Provider>
   );
};
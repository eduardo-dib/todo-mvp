// src/models/TaskModel.js
import { useState } from "react";

export function useTaskModel() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (titulo) => {
    const novaTarefa = { id: Date.now(), titulo, concluida: false };
    setTarefas((prev) => [...prev, novaTarefa]);
  };

  const removerTarefa = (id) => {
    setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
  };

  const completarTarefa = (id) => {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
      )
    );
  };

  return { tarefas, adicionarTarefa, removerTarefa, completarTarefa };
}

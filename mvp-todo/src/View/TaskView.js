// src/components/TaskView.js
import React, { useState } from "react";

const TaskView = ({ tarefas, onAdicionarTarefa, onCompletarTarefa, onRemoverTarefa }) => {
  const [tituloTarefa, setTituloTarefa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tituloTarefa) {
      onAdicionarTarefa(tituloTarefa);
      setTituloTarefa("");
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={tituloTarefa}
          onChange={(e) => setTituloTarefa(e.target.value)}
          placeholder="Adicionar uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
              {tarefa.titulo}
            </span>
            <button onClick={() => onCompletarTarefa(tarefa.id)}>Concluir</button>
            <button onClick={() => onRemoverTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskView;

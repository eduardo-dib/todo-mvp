
import React from "react";
import TaskView from "../View/TaskView";

const TaskPresenter = ({ model }) => {
  const { tarefas, adicionarTarefa, removerTarefa, completarTarefa } = model;

  const handleAdicionarTarefa = (titulo) => {
    adicionarTarefa(titulo);
  };

  const handleCompletarTarefa = (id) => {
    completarTarefa(id);
  };

  const handleRemoverTarefa = (id) => {
    removerTarefa(id);
  };

  return (
    <TaskView
      tarefas={tarefas}
      onAdicionarTarefa={handleAdicionarTarefa}
      onCompletarTarefa={handleCompletarTarefa}
      onRemoverTarefa={handleRemoverTarefa}
    />
  );
};

export default TaskPresenter;

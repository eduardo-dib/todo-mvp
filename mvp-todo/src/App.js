// src/App.js
import React from "react";
import { useTaskModel } from "./Model/TaskModel";
import TaskPresenter from "./Presenter/TaskPresenter";
import './App.css';

const App = () => {
  const model = useTaskModel();
  return <TaskPresenter model={model} />;
};

export default App;

import style from './App.module.css';
import Topbar from './Components/Topbar/Topbar';
import Form from './Components/Form/Form';
import CardContent from './Components/Card/Card';
import { useState } from 'react';
import TaskContext from './context/TaskInformation';

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <TaskContext.Provider value={tareas}>
      <div className={style.App}>
        <Topbar className={style.Topbar} />
        <Form className={style.Form} value={tareas} eject={setTareas} />
        <CardContent />
      </div>
    </TaskContext.Provider>
  );
}

export default App;

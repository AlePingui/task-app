import style from './Topbar.module.css';
import TaskContext from '../../context/TaskInformation';
import { useContext } from 'react';

export default function Topbar({ className }) {
    const tareas = useContext(TaskContext);
    
    return <nav className={style.Topbar + " " + className}>
        <h4>Tareas <span>{tareas.length}</span></h4>
    </nav>
}
import style from './Card.module.css';
import Context from '../../context/TaskInformation';
import { useContext } from 'react';

export function Card ({title, name, description, priority, id}) {
    return <div className={style.Card}>
        <header>
            <h2>{title}</h2>
        </header>
        <main>
            <div>
                <p>{description}</p>
            </div>
            <h4>{name}</h4>
            <span
                className={
                priority == "Baja" ? style.Baja
                : priority == "Media" ? style.Media
                : priority == "Alta" ? style.Alta
                : ''
            }
            >
                {priority}
            </span>
        </main>
        <footer>
            <button>Borrar</button>
        </footer>
    </div>
}

export default function CardContent () {
    const tareas = useContext(Context);

    return <div className={style.CardContent}>
        {tareas.map(({title, name, description, priority, id}) => (
            <Card key={id} title={title} name={name} description={description} priority={priority} />
        ))}
    </div>
}

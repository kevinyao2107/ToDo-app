import { useState } from 'react';
import styles from './app.module.css';

const tachesSiteWeb = [
  "Conception de l'architecture du site web",
  'Développement des fonctionnalités principales',
  'Intégration du design et des éléments visuels',
  'Optimisation du site pour une expérience utilisateur fluide',
  'Tests et débogage pour assurer la stabilité et la performance',
  'Déploiement du site web sur un serveur en ligne',
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const inputForm = () => {
    const submitHadler = (e) => {
      e.preventDefault();
      if (task.trim() !== '') {
        setTasks((prevTask) => [...prevTask, task]);
        setTask('');
      }
    };
    return (
      <form onSubmit={submitHadler} className={styles.form}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type='text'
          placeholder='Details de la tache'
        />

        <button type='submit'>Ajouter</button>
      </form>
    );
  };

  const taksList = () => {
    const removeTasks = (rvTask) => {
      const newTask = tasks.filter((_, index) => index !== rvTask);
      setTasks(newTask);
    };
    return (
      <div className={styles.listContainer}>
        <ul className={styles.lists}>
          {tasks.map((task, index) => (
            <li className={styles.list}>
              <span>{task}</span>
              <span onClick={() => removeTasks(index)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  style={{ height: '20px', width: '20px' }}
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1>To Do app</h1>
      {inputForm()}
      {taksList()}
    </div>
  );
}

export default App;

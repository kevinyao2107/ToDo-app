import { useMemo, useState } from 'react';
import styles from './app.module.css';
import InputForm from './components/InputForm';
import TaksList from './components/TaksList';

const tachesSiteWeb = [
  { id: 1, text: 'Faire les courses', completed: false },
  { id: 2, text: 'Rédiger le rapport', completed: false },
  { id: 3, text: 'Préparer la réunion', completed: false },
  {
    id: 4,
    text: 'Tests et débogage pour assurer la stabilité et la performance',
    completed: false,
  },
  {
    id: 5,
    text: 'Déploiement du site web sur un serveur en ligne',
    completed: false,
  },
  {
    id: 6,
    text: 'Optimisation du site pour une expérience utilisateur fluide',
    completed: false,
  },
  {
    id: 7,
    text: 'Intégration du design et des éléments visuels',
    completed: false,
  },
  {
    id: 8,
    text: 'Développement des fonctionnalités principales',
    completed: false,
  },
  { id: 9, text: `Conception de l'architecture du site web`, completed: false },
];

function App() {
  const [tasks, setTasks] = useState(tachesSiteWeb);

  const totalUncompletedTasks = useMemo(() => {
    return tasks.filter((task) => !task.completed).length;
  }, [tasks]);

  const markAllTasksCompleted = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: true,
    }));
    setTasks(updatedTasks);
  };

  const markAllTasksIncomplete = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: false,
    }));
    setTasks(updatedTasks);
  };

  const removeTasks = (rvTask) => {
    const newTask = tasks.filter((_, index) => index !== rvTask);
    setTasks(newTask);
  };

  const submit = (task) => {
    setTasks((prevTask) => [
      {
        id: Math.floor(Math.random() * 1000),
        text: task,
        completed: false,
      },
      ...prevTask,
    ]);
  };

  const completeTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return {
          ...task,
          completed: true,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>To Do app </h1>
      </div>

      <InputForm onSubmit={submit} />
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'end',
          marginTop: '20px',
        }}
      >
        <button
          style={{
            marginRight: '10px',
            cursor: 'pointer',
            padding: '8px',
            background: '#811092b0',
            borderRadius: '5px',
            border: 'none',
            color: '#fff',
          }}
          onClick={markAllTasksCompleted}
        >
          Complet
        </button>
        <button
          style={{
            marginRight: '10px',
            cursor: 'pointer',
            padding: '8px',
            border: 'none',
            color: '#fff',
            background: '#f60c3fb0',
            borderRadius: '5px',
          }}
          onClick={markAllTasksIncomplete}
        >
          incomplet {totalUncompletedTasks}
        </button>
      </div>
      <TaksList
        onCompleteTask={completeTask}
        removeTasks={removeTasks}
        tasks={tasks}
      />
    </div>
  );
}

export default App;

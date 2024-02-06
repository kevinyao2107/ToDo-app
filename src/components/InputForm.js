import styles from '../app.module.css';

import { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');
  const submitHadler = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onSubmit(task);
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

export default InputForm;

import styles from '../app.module.css';

const TaksList = ({ onCompleteTask, removeTasks, tasks }) => {
  const setComplete = (index) => {
    onCompleteTask(index);
  };
  return (
    <div className={styles.listContainer}>
      <ul className={styles.lists}>
        {tasks.map((task, index) => (
          <li
            style={{
              backgroundColor: task.completed ? '#811092b0' : '#f60c3fb0',
            }}
            className={styles.list}
          >
            <span>{task.text}</span>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span
                onClick={() => setComplete(index)}
                style={{
                  marginRight: '20px',
                  display: task.completed ? 'none' : 'block',
                }}
              >
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
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </span>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaksList;

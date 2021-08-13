import React, { useState } from 'react';
import CreateTask from './CreateTask';
import AllTasks from './AllTasks';
import { TasksProvider } from './TasksContext';

const App = () => {
	const [mode, setMode] = useState('all');

	const handleMode = (e) => {
		if (e.target.textContent === 'All') setMode('all');
		if (e.target.textContent === 'Active') setMode('active');
		if (e.target.textContent === 'Completed') setMode('completed');
	};
	return (
		<TasksProvider>
			<div className="task-section">
				<CreateTask />
				<AllTasks mode={mode} />
				<div className="tasks-switcher">
					<div
						className={mode === 'all' ? 'tasks--selected' : ''}
						onClick={handleMode}
					>
						All
					</div>
					<div
						className={mode === 'active' ? 'tasks--selected' : ''}
						onClick={handleMode}
					>
						Active
					</div>
					<div
						className={mode === 'completed' ? 'tasks--selected' : ''}
						onClick={handleMode}
					>
						Completed
					</div>
				</div>
				<footer>Drag and drop to reorder list</footer>
			</div>
		</TasksProvider>
	);
};

export default App;

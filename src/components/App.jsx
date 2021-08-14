import React, { useState } from 'react';
import CreateTask from './CreateTask';
import AllTasks from './AllTasks';
import { TasksProvider } from './TasksContext';

const App = () => {
	const [mode, setMode] = useState('all');
	const [lightmode, setLighmode] = useState(true);

	const handleMode = (e) => {
		if (e.target.textContent === 'All') setMode('all');
		if (e.target.textContent === 'Active') setMode('active');
		if (e.target.textContent === 'Completed') setMode('completed');
	};

	const handleDisplayMode = () => {
		let mode = lightmode;
		setLighmode(!mode);
	};

	return (
		<TasksProvider>
			<div className={'main ' + (lightmode ? 'main--light' : '')}>
				<img
					src={
						window.innerWidth > 520
							? lightmode
								? './dist/assets/bg-desktop-light.jpg'
								: './dist/assets/bg-desktop-dark.jpg'
							: lightmode
							? './dist/assets/bg-mobile-light.jpg'
							: './dist/assets/bg-mobile-dark.jpg'
					}
					alt="image-mobile-dark"
				/>
				<header>
					<div className="header__text">TODO</div>
					<div className="header__logo">
						<img
							src={
								lightmode
									? '/dist/assets/icon-moon.svg'
									: '/dist/assets/icon-sun.svg'
							}
							alt="Mode"
							onClick={handleDisplayMode}
						/>
					</div>
				</header>
				<div className="task-section">
					<CreateTask display={lightmode} />
					<AllTasks mode={mode} display={lightmode} />
					<div
						className={
							'tasks-switcher ' + (lightmode ? 'tasks-switcher--light' : '')
						}
					>
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
			</div>
		</TasksProvider>
	);
};

export default App;

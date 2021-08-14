import React from 'react';

const TaskSwitcher = ({ mode, lightmode, handleMode}) => {
	return (
		<div
			className={'tasks-switcher ' + (lightmode ? 'tasks-switcher--light' : '')}
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
	);
};

export default TaskSwitcher;

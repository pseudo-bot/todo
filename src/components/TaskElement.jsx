import React, { Children } from 'react';

const Task = ({ done = 1, children, onClick, onDelete }) => {
	return (
		<div
			className={
				'task-element ' + (done ? 'task__status--done' : 'task__status--hide')
			}
		>
			<div className="task__status" onClick={onClick}>
				<img src="/dist/assets/icon-check.svg" alt="Check"/>
			</div>
			{children}
			<div className="task__delete">
				<img
					src="/dist/assets/icon-cross.svg"
					alt="Delete task"
					onClick={onDelete}
				/>
			</div>
		</div>
	);
};

export default Task;

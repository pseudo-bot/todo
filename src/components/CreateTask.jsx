import React, { useContext } from 'react';
import Task from './TaskElement';
import { TasksContext } from './TasksContext';

let key = 0;

const CreateTask = ({ display }) => {
	let [tasks, setTask] = useContext(TasksContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		let taskInput = document.querySelector('.task__input');
		if (taskInput.value === '') return;

		let updatedTasks = [...tasks];
		updatedTasks.push({
			todo: taskInput.value,
			status: false,
			key: key,
		});
		setTask(updatedTasks);
		taskInput.value = '';
		key++;
	};

	return (
		<div className={'create-task tasks ' + (display ? 'tasks--light' : '')}>
			<Task done={0}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="task__input"
						name="newTask"
						placeholder={'Create a new todo...'}
					/>
				</form>
			</Task>
		</div>
	);
};

export default CreateTask;

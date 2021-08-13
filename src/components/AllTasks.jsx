import React, { useContext } from 'react';
import { TasksContext } from './TasksContext';
import Task from './TaskElement';

const AllTasks = ({ mode }) => {
	let [task, setTask] = useContext(TasksContext);

	const handleClick = (key) => {
		let updatedStatus = [...task];
		for (let value of task) {
				if (value.key === key) {
					updatedStatus[task.indexOf(value)].status	= !value.status;
					break;
				}
		}
		setTask(updatedStatus);
	};

	const handleDelete = (key) => {
		let updatedTasks = [...task];
		let index;
		for (let value of task) {
			if (value.key === key) {
				index = task.indexOf(value);
			}
		}
		updatedTasks.splice(index, 1);
		setTask(updatedTasks);
	};

	return (
		<div className="all-tasks tasks">
			{task
				.filter((element) => {
					if (mode === 'active') return !element.status;
					else if (mode === 'completed') return element.status;
					else return true;
				})
				.map((element, index) => (
					<Task
						key={element.key}
						done={element.status}
						onClick={() => handleClick(element.key)}
						onDelete={() => handleDelete(element.key)}
					>
						<form onSubmit={(e) => e.preventDefault()}>
							<input
								type="text"
								className="task__input"
								value={element.todo}
								onChange={(e) => {
									if (element.status) return;
									let updatedTasks = [...task];
									updatedTasks[index].todo = e.target.value;
									setTask(updatedTasks);
								}}
								placeholder={'Create todo'}
							/>
						</form>
					</Task>
				))}
		</div>
	);
};

export default AllTasks;

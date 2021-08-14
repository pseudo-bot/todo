import React, { useContext } from 'react';
import { TasksContext } from './TasksContext';
import Task from './TaskElement';

const AllTasks = ({ mode, display }) => {
	let [task, setTask] = useContext(TasksContext);

	const handleClick = (key) => {
		setTask(task.map(task => {
			if (task.key === key) {
				task.status = !task.status;
				return task;
			} else return task;
		}));
	};

	const handleDelete = (key) => {
		setTask(task.filter(task => {
			if (task.key === key) return false;
			else return true;
		}));
	};

	const tasksLeft = (task) => {
		let length = 0;
		for (let value of task) {
			if (value.status) continue;
			length++;
		}
		return length;
	}

	const clearCompleted = () => {
		setTask(task.filter(task => {
			if (task.status) return false;
			else return true;
		}))
	}

	return (
		<div className={'all-tasks tasks ' + (display ? 'all-tasks--light' : '')}>
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

			<div className="all-tasks__footer">
				<div className="footer__taskLeft">{tasksLeft(task)} items left</div>
				<div className="footer__clearAll" onClick={clearCompleted}>Clear Completed</div>
			</div>
		</div>
	);
};

export default AllTasks;

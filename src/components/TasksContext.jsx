import React, { useState, createContext } from 'react';

export const TasksContext = createContext();

export const TasksProvider = (props) => {
	const [task, setTask] = useState([]);

	return (
		<TasksContext.Provider value={[task, setTask]}>
			{props.children}
		</TasksContext.Provider>
	);
};

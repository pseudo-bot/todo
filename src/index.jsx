import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Sortable from 'sortablejs';

import '../public/css/style.scss';

ReactDOM.render(<App />, document.querySelector('main'));

let sortElement = document.querySelector('.draggableRegion');
let sortable = new Sortable(sortElement, {
	animation: 200,
});

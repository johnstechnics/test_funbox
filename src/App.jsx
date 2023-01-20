import { useState } from 'react';
import './assets/scss/style.scss';
import { ProductsList } from './components/ProductsList';
import { productsData } from './productsData';

export const App = () => {

	const [selected, setSelected] = useState([]);

	const onSelect = (id) => {
		if (selected.find(i => i === id)) {
			setSelected(selected.filter(i => i !== id));
		} else {
			setSelected([...selected, id]);
		};
	};

	return (
		<div className="app">
			<div className="container">
				<h1 className="page-title">
					Ты сегодня покормил кота?
				</h1>
				<ProductsList
					productsData={productsData}
					selected={selected}
					onSelect={onSelect}
				/>
			</div>
		</div>
	);
};

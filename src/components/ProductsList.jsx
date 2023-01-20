import { Product } from './Product';

export const ProductsList = (props) => {
	return (
		<div className="item-list">
			{props.productsData.map(product => (
				<Product
					key={product.id}
					product={product}
					onSelect={props.onSelect}
					selected={props.selected}
				/>
			))}
		</div>
	);
};

import React from 'react';
import CartButton from './app-cart-button';
import AppActions from '../../action/app-actions';

export default (props) => {
	return (
		<tr>
			<td>
				<CartButton
					text="x"
					handler={AppActions.removeItem.bind(null, props.item)}
				/>
			</td>
			<td>{props.item.title}</td>
			<td>{props.item.qty}</td>
			<td>
				<div className="btn-group">
					<CartButton 
						text="-"
						handler={AppActions.decreaseItem.bind(null, props.item)} 
					/>
					<CartButton 
						text="+"
						handler={AppActions.increaseItem.bind(null, props.item)} 
					/>
				</div>
			</td>
			<td>${props.subtotal}</td>
		</tr>
	);
}
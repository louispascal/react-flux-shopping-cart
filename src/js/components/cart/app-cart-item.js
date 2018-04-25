import React from 'react';
import CartButton from './app-cart-button';
import AppActions from '../../action/app-actions';
import AppStore from '../../stores/app-store';

function getCatalogItem( productId ) {
    let item = AppStore.getCatalog().find( ({ id }) => id === productId );
    return {item};
}

export default (props) => {

	function optionsToString(selected) {

		let s = '';
		if(selected.length > 0) {
			let productTitles = [];
			console.log(selected);
			selected.forEach( (option) => {
				option.forEach( (value) => {
					let fullDetails = getCatalogItem(value);
					productTitles.push(fullDetails.item.title);
				});
			});
			s = <span style={{'fontSize': '0.7em'}}> ({productTitles.join(', ')})</span>
		}

		return s;
	}

	return (
		<tr>
			<td>
				<CartButton
					text="x"
					handler={AppActions.removeItem.bind(null, props.item)}
				/>
			</td>
			<td>{props.item.title}{props.item.selected && optionsToString(props.item.selected) }</td>
			<td>{props.item.qty}</td>
			<td>
				<div className="row" style={{'margin':0}}>
					<div className="col s4">
						<CartButton 
							text="-"
							handler={AppActions.decreaseItem.bind(null, props.item)} 
						/>
					</div>
					<div className="col s4">
						<CartButton 
							text="+"
							handler={AppActions.increaseItem.bind(null, props.item)} 
						/>
					</div>
				</div>
			</td>
			<td>${props.subtotal}</td>
		</tr>
	);
}
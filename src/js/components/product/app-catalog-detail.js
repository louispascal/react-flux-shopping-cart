import React, {Component} from 'react';
import AppStore from '../../stores/app-store';
import AppActions from '../../action/app-actions';
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import CartButton from '../cart/app-cart-button';
import { Link } from 'react-router';

function getCatalogItem( props ) {
	let item = AppStore.getCatalog().find( ({ id }) => id === props.params.item );
	return {item};
}


const CatalogDetail = (props) => {

	const actionButton = (props.item.type === 'product') ? (
	<CartButton 
			handler={
				AppActions.addItem.bind(null, props.item)
			}
			text="Add to cart"
		/>
	) : (
		<Link to={`/options/${props.item.id}`} items={props.item} className="waves-effect waves-light btn-small">Choose...</Link>
	)

	return (
		<div>
			<h4>{ props.item.title}</h4>
			<img src={ props.item.imageUrl} />
			<p>{ props.item.description }</p>
			<p>${ props.item.cost }
				<span className="text-success">{props.item.qty && `(${props.item.qty} in cart)`}</span>
			</p> 
			<div className="row">
				<div className="col s2"><Link to ="/" className="waves-effect waves-light btn-small">Continue Shopping</Link></div>
				<div className="col s2">{actionButton}</div>
			</div>
		</div>
	)

}


export default StoreWatchMixin(CatalogDetail, getCatalogItem);
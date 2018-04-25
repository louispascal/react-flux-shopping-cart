import React from 'react';
import AppActions from '../../action/app-actions';
import CartButton from '../cart/app-cart-button';
import { Link } from 'react-router';

export default (props) => {

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
		<div className="col s12 m6 l4">
			<h5>{ props.item.title}</h5>
			<img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
			<div className="row">
				<div className="col s12">
					Price: ${ props.item.cost }
					<span className="text-success">{props.item.qty && `(${props.item.qty} in cart)`}</span>
				</div>
			</div> 

			<div className="row">
				<div className="col s6"><Link to={`/item/${props.item.id}`} className="waves-effect waves-light btn-small">Learn More</Link></div>
				<div className="col s6">{actionButton}</div>
			</div>
		</div>
	)

}


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
			<Link to={`/options/${props.item.id}`} items={props.item} className="btn btn-default btn-sm">Choose...</Link>
		)

	return (
		<div className="col-xs-6  col-sm-4  col-md-3">
			<h4>{ props.item.title}</h4>
			<img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
			<p>{ props.item.summary }</p>
			<p>${ props.item.cost }
				<span className="text-success">{props.item.qty && `(${props.item.qty} in cart)`}</span>
			</p> 

			<div className="btn-group">
				<Link to={`/item/${props.item.id}`} className="btn btn-default btn-sm">Learn More</Link>
				{actionButton}
			</div>
		</div>
	)

}


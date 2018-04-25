import React from 'react';
import CartSummary from './app-cartsummary';

export default () => {
	return (
		<div className="row" style={{borderBottom:'1px solid #ccc'}}>
			<div className="col s2"><h1>Store</h1></div>
			<div className="col s10">
				<CartSummary />
			</div>
		</div>
	);
}
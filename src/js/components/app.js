import React, { Component  } from 'react';
import Catalog from './catalog/app-catalog';
import CatalogDetail from './product/app-catalog-detail';
import CatalogOptions from './product/app-options';
import Cart from './cart/app-cart';
import StoreTemplate from './app-store-template';
import OptionsTemplate from './app-options-template';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

export default () => {
	return (
		<Router history={browserHistory}>
			<Route path={process.env.PUBLIC_URL + '/'} component={StoreTemplate}>
				<IndexRoute component={Catalog} />
				<Route path="cart" component={Cart} />
				<Route path="item/:item" component={CatalogDetail} />
			</Route>
			<Route path="/" component={OptionsTemplate}>
				<Route path="options/:item" component={CatalogOptions} />
			</Route>
		</Router>		
	);
}
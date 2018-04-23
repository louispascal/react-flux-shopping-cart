import Products from './app-products';
import Bundles from './app-bundles';

const CartAPI = {
	catalog: [],
	products: [],
	bundle: [],
	cartItems: [],
	removeItem( item ) {
	    this.cartItems.splice( this.cartItems.findIndex( i => i === item ), 1 );
	},
	findCartItem( item ) {
    	return this.cartItems.find( cartItem => cartItem.id === item.id )
	},
	increaseItem( item ) {
		item.qty++;
	},
	decreaseItem( item ) {
	    item.qty--;
	    if ( item.qty === 0 ) {
	        this.removeItem( item )
	    }
	},
	addItem( item, options = [] ) {
	    const cartItem = this.findCartItem( item );
	    if ( !cartItem ) {
	        this.cartItems.push( Object.assign( {qty: 1, options: []}, item ) );
	    }
	    else {
	        this.increaseItem( cartItem );
	    }
	},
	cartTotals( qty = 0, total = 0 ) {
	    this.cartItems.forEach( cartItem  => {
	        qty += cartItem.qty;
	        total += cartItem.qty * cartItem.cost;
	    } );
	    return {qty, total};
	},
	getCatalog(){
	    return this.catalog.map(item => {
	      	return Object.assign( {}, item, this.cartItems.find( cItem => cItem.id === item.id))
		})
	},
	init() {

		Products.forEach((item) => {
		  this.products.push(item);
		});

		this.catalog = this.products;

		Bundles.forEach((item) => {
		  this.catalog.push(item);
		});
	}
}

CartAPI.init();
export default CartAPI;
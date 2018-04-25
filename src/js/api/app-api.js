import Products from './app-products';
import Bundles from './app-bundles';

const CartAPI = {
	catalog: [],
	products: [],
	bundle: [],
	cartItems: [],
	checkEquality(arr1, arr2) {
	    if(arr1.length !== arr2.length) {
	    	return false;
	    }
	    for(var i = arr1.length; i--;) {
	    	if(typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
	    		if(!this.checkEquality(arr1[i], arr2[i])) {
	    			return false;
	    		}
	    	} else {
		    	if(arr1[i] !== arr2[i]) {
		    		return false;
		        }	
	    	}
	    }
	    return true;
	},
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
	addItem( item ) {
		const cartItem = this.findCartItem( item );
	    if ( !cartItem ) {
	        this.cartItems.push( Object.assign( {qty: 1}, item ) );
	    }
	    else {
	        this.increaseItem( cartItem );
	    }
	},
	addBundleItem( item, selected = [] ) {

		const cartItem = this.findCartItem( item );
		let newItem;
			

		if ( !cartItem ) {
	        this.cartItems.push( Object.assign( {qty: 1, selected: selected}, item ) );
	    }
	    else {
	    	// If the item is the same AND the selections 
	    	// are the same, increase the count...
	    	if(this.checkEquality(cartItem.selected, selected)) {
	    		this.increaseItem( cartItem );
	    	} else {
	    		
	    		newItem = Object.assign( {qty: 1}, item );
	    		newItem.selected = selected;

	    		this.cartItems.push( newItem );		
	    	}
	        
	    }

	    console.log(this.cartItems);
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

		Bundles.forEach((item) => {
		  this.catalog.push(item);
		});

		Products.forEach((item) => {
		  this.catalog.push(item);
		  this.products.push(item);
		});

		
	}
}

CartAPI.init();
export default CartAPI;
import React, {Component} from 'react';
import AppStore from '../../stores/app-store';
import OptionRow from './app-option-row';
import AppActions from '../../action/app-actions';
import CartButton from '../cart/app-cart-button';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

function getCatalogItem( props ) {
    let item = AppStore.getCatalog().find( ({ id }) => id === props.params.item );
    return {item};
}

class CatalogOptions extends Component {
    
    constructor(props) {
        super(props);

        this.onAdd = this.onAdd.bind(this);

        this._rows = [];
    }

    onAdd() {

        let selected = this._rows.map( (option, i) => {
            return option.getData();
        });

        AppActions.addBundleItem(this.props.item, selected);

        // Lets go back to the catalog via the router
        this.props.router.push('/');
    }

    render() {

        const AddToCartButton = 
            (<CartButton 
                handler={
                    this.onAdd.bind(null)
                }
                text="Add to cart"
                />
        );

        var options = this.props.item.options.map( (option, i) => {
            return (
                <OptionRow 
                    ref={(ref) => this._rows[i] = ref}
                    key={i}
                    multiselect={false}
                    inputName={option.id}
                    option={option}
                />
            )
        });

        return (
        <div>
            <h1>Options</h1>
            <div>
                {options}
            </div>
          <div className="row">
            <div className="col s12 m2">
                {AddToCartButton}
            </div>
            <div className="col s12 m2">
                <Link to="/">Go back...</Link>
            </div>
          </div>
        </div>
        );
    }
}

export default StoreWatchMixin(CatalogOptions, getCatalogItem);
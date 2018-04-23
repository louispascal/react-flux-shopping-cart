import React, {Component} from 'react';
import AppStore from '../../stores/app-store';
import OptionRow from './app-option-row';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

function getCatalogItem( props ) {
    let item = AppStore.getCatalog().find( ({ id }) => id === props.params.item );
    return {item};
}

class CatalogOptions extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        var options = this.props.item.options.map( (option, i) => {
            return (
                <OptionRow key={i}
                    multiselect={true}
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
          <Link to="/">Continue Shopping</Link>
        </div>
        );
    }
}

export default StoreWatchMixin(CatalogOptions, getCatalogItem);
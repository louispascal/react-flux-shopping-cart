import React, {Component} from 'react';
import AppStore from '../../stores/app-store';

function getCatalogItem( productId ) {
    let item = AppStore.getCatalog().find( ({ id }) => id === productId );
    return {item};
}

class OptionRow extends Component {
    
    constructor(props) {
      super(props);

      this.state = {
        inputName:props.inputName,
        options: props.option,
        multiselect: props.multiselect,
        values: []
      }

      this.checkSelected = this.checkSelected.bind(this);
      this.createCheckbox = this.createCheckbox.bind(this);
      this.getData = this.getData.bind(this);
    }

    getData() {
      return this.state.values;
    }

    checkSelected(event) {
      if(this.state.multiselect === true) {

        (event.target.checked) 
          ? this.state.values.push(event.target.value) 
          : this.state.values = this.state.values.filter(value => value !== event.target.value);
        

      } else {
        this.state.values = [];
        this.state.values.push(event.target.value);
      }
    }

    createCheckbox(option, index) {

            let name = (this.state.multiselect ? option.id : this.state.inputName),
              productTitle = getCatalogItem(option.item).item.title,
              inputOptions = {
              'id': option.id,
              'name': name,
              'type':(this.state.multiselect ? 'checkbox' : 'radio'),
              'value':option.item,
              'onClick': this.checkSelected
            }

            if(index === 0) {
              inputOptions = Object.assign({defaultChecked:'checked'}, inputOptions);
            }

            return(<p key={index}>
                <label htmlFor={option.id}>
                  <input {...inputOptions} />
                  <span>{productTitle}</span>
                </label>
          </p>);
      
    }

    render() {

        // On re-render we need to set the value to the first option
        this.state.values = [this.state.options.options[0].item];
        
        return (
            <div className="row">
              <p className="col s2">{this.state.options.label}</p>
              <div className="col s10">
                <form action="#">
                {this.state.options.options.map((option, i) => {
                  return this.createCheckbox(option, i);
                })}
                </form>
              </div>
          </div>
        );
    }
}

export default OptionRow;
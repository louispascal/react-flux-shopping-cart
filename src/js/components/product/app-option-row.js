import React, {Component} from 'react';

class OptionRow extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          inputName:props.inputName,
          options: props.option,
          multiselect: props.multiselect,
          checkboxes: []
        }

        this.checkSelected = this.checkSelected.bind(this);
        this.createCheckbox = this.createCheckbox.bind(this);
    }

    checkSelected(event) {

    }

    createCheckbox(option, index) {
      
            let name = (this.state.multiselect ? option.id + '[]' : this.state.inputName),
              inputOptions = {
              'id': option.id,
              'name': name,
              'type':'checkbox',
              'value':option.item,
              'onClick': this.checkSelected()
            }

            if(index === 0) {
              inputOptions = Object.assign({defaultChecked:'checked'}, inputOptions);
            }

            return(<div key={index} >
              <label htmlFor={option.id} className="control-label">  {option.item}</label>
              <input {...inputOptions} />
          </div>);
      
    }

    render() {

        return (
            <div className="form-group">
              <label className="control-label col-md-5">{this.state.options.label}</label>
              <div className="col-md-7">
                {this.state.options.options.map((option, i) => {
                  return this.createCheckbox(option, i);
                })}
              </div>
          </div>
        );
    }
}

export default OptionRow;
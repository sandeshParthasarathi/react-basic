import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            checked: false,
            products: this.props.products
        };
    }

  handleChange = () => {
    let checked = this.state.checked;
    checked = !checked;

    this.setState({
        filterText: '',
        checked: checked,
        products: this.state.products
    })
    if(checked){
        const filter = this.state.products.filter(item => item.stocked);
        this.setState({
            products: filter
        })
    }
    else{
        this.setState({
            products: this.props.products
        })
    }
  };

  searchChange = (filterText) => {
    this.setState({
        filterText: filterText
      });
  }

    render() {
        return (
        <div>
            <div>
                <SearchBar filterText={this.state.filterText} onFilterTextChange={this.searchChange} handleChange={this.handleChange} checked={this.state.checked}/>
            </div>
            <div>
                <ProductTable products={this.state.products}/>
            </div>
        </div>
        )
    }
}

export default FilterableProductTable;

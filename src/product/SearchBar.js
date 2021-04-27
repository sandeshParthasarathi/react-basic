import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './SearchBar.scss'

class SearchBar extends Component {    

    searchChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <form noValidate autoComplete="off" className="form-container">
                <div className="form-container__product-search">
                    <TextField id="outlined-basic" label="Search.."
                        variant="outlined" size="small" 
                        
                        onChange={this.searchChange}
                        />
                </div>
                <div>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={this.props.checked}
                            onChange={this.props.handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Only show products in stock"
                    />
                </div>
            </form>
        )
    }
}

export default SearchBar;

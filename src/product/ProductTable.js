import React, { Component } from "react";


import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from '@material-ui/core/Paper';

import './ProductTable.scss'

class ProductTable extends Component {
  render() {
    const rows = [];
    let commonCategory = {category :this.props.products[0].category, header: true};
    rows.push(commonCategory)
    
    this.props.products.forEach((product) => {
      if(commonCategory.category === product.category){
        rows.push(product);
      }else{
        commonCategory = {category :product.category, header: true};
        rows.push(commonCategory);
        rows.push(product);
      }
    });

    return (
      <div className="productTable">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Instock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow hover key={index} className={ (!row.header &&!row.stocked) ? 'productTable__no-stock' : null}>
                {
                  row.header ? <TableCell className="productTable__category" component="th" scope="row">{row.category}</TableCell> :
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                }
                  
                  <TableCell align="right">{row.price}</TableCell>
                  {
                   !row.header ? <TableCell align="right">{row.stocked ? 'Yes' : 'No'}</TableCell>
                   : <TableCell align="right"></TableCell>
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default ProductTable;

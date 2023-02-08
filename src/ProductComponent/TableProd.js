import React, { Component } from 'react'
import Product from './Product'
import dataT from '../data/products.json'
export class TableProd extends Component {
    constructor(){
        super();
        this.state={data:dataT}
    }
    componentDidMount(){
       console.log(this.state.data)
    }
  render() {
    return (
      <div>
{this.state.data.map(d=>(<Product product={d} />))}
      </div>
    )
  }
}

export default TableProd
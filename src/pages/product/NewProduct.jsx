import React, { Component } from 'react'
import {Container, Tabs, Tab} from 'react-bootstrap' 
import ProductList from './ProductList'
import AddProduct from './AddProduct'





export default class NewProduct extends Component {
                  render() {
                    return (
                      <React.Fragment>
                        <Container>
                        <Tabs defaultActiveKey="AddProduct" id="uncontrolled-tab-example" >
                            <Tab eventKey="AddProduct" title="Add Product">
                              <hr/>
                            <AddProduct />
                      
                            </Tab>
                            <Tab eventKey="productlist" title="Product List">
                              <hr/>
                           <ProductList />
                            </Tab>
                            <Tab eventKey="contact" title="Contact" disabled >
                            <h1>Tab Three</h1>
                            </Tab>
                          </Tabs>

                      </Container>

                      </React.Fragment>
                    )
                  }
                }


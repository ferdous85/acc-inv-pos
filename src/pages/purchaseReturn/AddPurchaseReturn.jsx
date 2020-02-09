import React, { Component } from 'react'
import {Form, Button, Container, Tabs, Tab} from 'react-bootstrap' 
import PurchaseReturnList from './PurchaseReturnList'




export default class AddPurchaseReturn extends Component {
                  render() {
                    return (
                      <React.Fragment>
                        <Container>
                        <Tabs defaultActiveKey="AddPurchaseReturn" id="uncontrolled-tab-example" >
                            <Tab eventKey="AddPurchaseReturn" title="Add Purchase Return">
                              <hr/>
                        <h4>Add Purchage Return</h4>
                        <hr/>
                        <Form>
                          <Form.Row>
                            <Form.Group controlId="purchasereturnno" className='mr-3'>
                              <Form.Label>Purchase Return No</Form.Label>
                              <Form.Control type="number" placeholder="Purchase Return No" />
                            </Form.Group>
                            <Form.Group controlId="productname">
                              <Form.Label>Product Name *</Form.Label>
                              <Form.Control type="text" placeholder="Product Name" />
                            </Form.Group>
                          </Form.Row>
                           <Form.Row>
                            <Form.Group controlId="puchasereturndate">
                              <Form.Label>Purchage Return Date *</Form.Label>
                              <Form.Control type="date" placeholder="dd/mm/yyyy" />
                            </Form.Group>

                            <Form.Group controlId="selectcustomer" className='ml-4'>
                              <Form.Label>Select Customer/Supplier *</Form.Label>
                              <Form.Control as="select">
                                <option>Customer/Supplier One</option>
                                <option>Customer/Supplier Two</option>
                              </Form.Control>
                              <Button className='mt-2'>Add New Supplier</Button>
                            </Form.Group>
                          </Form.Row>
                          <Form.Row>
                            <Form.Group controlId="quantity">
                              <Form.Label>Quantity</Form.Label>
                              <Form.Control type="text" placeholder="Quantity" />
                            </Form.Group>

                          </Form.Row>
                            <Form.Row>
                            <Form.Group controlId="notes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Notes"  />
                          </Form.Group>
                            </Form.Row>

                          <Form.Group id="termandcondition">
                            <Form.Check type="checkbox" label="I agree with Terms & Conditions" />
                          </Form.Group>
                          <Form.Row>
                          <Form.Group>
                          <Button className='mr-5' variant="primary" type="submit">
                            Save Changes
                          </Button>
                          </Form.Group>

                          <Form.Group>
                          <Button variant="danger" type="submit">
                            Cancel
                          </Button>
                          </Form.Group>
                          
                          
                          </Form.Row>
                          
                        </Form>
                      
                            </Tab>
                            <Tab eventKey="purchasereturnlist" title="Purchase Return List">
                              <hr/>
                            <PurchaseReturnList />
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


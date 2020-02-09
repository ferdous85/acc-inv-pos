import React, { Component } from 'react'
import {Form, Button, Container, Tabs, Tab} from 'react-bootstrap' 
import PurchaseList from './PurchaseList'



export default class AddNewPurchage extends Component {
                  render() {
                    return (
                      <React.Fragment>
                        <Container>
                        <Tabs defaultActiveKey="purchaselist" id="uncontrolled-tab-example" >
                            <Tab eventKey="AddPurchase" title="Add Purchase">
                              <hr/>
                      
                        <Form>
                          <Form.Row>
                            <Form.Group controlId="purchaseno" className='mr-3'>
                              <Form.Label>Purchase No *</Form.Label>
                              <Form.Control type="number" placeholder="Purchase No" />
                            </Form.Group>

                            <Form.Group controlId="purchasedate">
                              <Form.Label>Purchase Date *</Form.Label>
                              <Form.Control type="date" placeholder="dd/mm/yyyy" />
                            </Form.Group>
                          </Form.Row>
                          <Form.Row>
                          <Form.Group controlId="selectproduct" className='mr-5'>
                              <Form.Label>Select Product</Form.Label>
                              <Form.Control as="select">
                                <option>Product One</option>
                                <option>Product Two</option>
                              </Form.Control>
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
                            <Tab eventKey="purchaselist" title="Purchase List">
                            <PurchaseList />
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


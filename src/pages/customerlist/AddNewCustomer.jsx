import React, { Component } from 'react'
import {Form, Col, Button, Container, Tabs, Tab} from 'react-bootstrap' 
import CustomerList from './CustomerList'

export default class AddNewCustomer extends Component {
                  render() {
                    return (
                      <React.Fragment>
                        <Container>
                        <Tabs defaultActiveKey="AddNewCustomer" id="uncontrolled-tab-example">
                            <Tab eventKey="AddNewCustomer" title="Add New Customer">
                           <hr/>
                        <Form>
                          <Form.Row>
                            <Form.Group controlId="customercode">
                              <Form.Label>Customer Code</Form.Label>
                              <Form.Control type="text" placeholder="Customer Code" />
                            </Form.Group>
                          </Form.Row>
                          <Form.Row>
                          <Form.Group as={Col} controlId="customername">
                              <Form.Label>Customer or Company Name *</Form.Label>
                              <Form.Control type="text" placeholder="Customer or Company Name" />
                            </Form.Group>
                            </Form.Row>
                          <Form.Row>
                            <Form.Group as={Col} controlId="mobilenumber">
                              <Form.Label>Mobile Number *</Form.Label>
                              <Form.Control type="number" placeholder="Mobile Number" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="email">
                              <Form.Label>Email Id</Form.Label>
                              <Form.Control type="email" placeholder="Email Id" />
                            </Form.Group>
                          </Form.Row>
                          <Form.Row>
                            <Form.Group as={Col} controlId="contactperson">
                              <Form.Label>Contact Person</Form.Label>
                              <Form.Control type="text" placeholder="Contact Person" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="conPerPhone">
                              <Form.Label>Contact Person's Phone</Form.Label>
                              <Form.Control type="number" placeholder="Contact Person's Phone" />
                            </Form.Group>
                          </Form.Row>
                          
                          <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                          </Form.Group>
                          <Form.Group controlId="notes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Notes"  />
                          </Form.Group>

                          <Form.Row>
                            
                            <Form.Group controlId="customerstatus">
                              <Form.Label>Customer Status</Form.Label>
                              <Form.Control as="select">
                                <option>Avtive</option>
                                <option>Inactive</option>
                              </Form.Control>
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
                            <Tab eventKey="customerlist" title="Customer List">
                            <CustomerList />
                            </Tab>
                            <Tab eventKey="contact" title="Contact" disabled >
                            <h1>Tab Three</h1>
                            </Tab>
                          </Tabs>
                          <hr/>

                      
                      </Container>
                      
                      </React.Fragment>
                    )
                  }
                }


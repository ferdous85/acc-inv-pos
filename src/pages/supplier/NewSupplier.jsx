import React, { Component } from 'react'
import { Form, Button, Container, Tabs, Tab} from 'react-bootstrap' 
import SupplierList from './SupplierList'





export default class NewSupplier extends Component {
                  render() {
                    return (
                      <React.Fragment>
                        <Container>
                        <Tabs defaultActiveKey="AddSupplierReturn" id="uncontrolled-tab-example" >
                            <Tab eventKey="AddSupplierReturn" title="Add Supplier">
                              <hr/>
                        <h4>Add New Supplier</h4>
                        <hr/>
                        <Form>
                          <Form.Row>
                            <Form.Group controlId="suppliercode" className='mr-3'>
                              <Form.Label>Supplier Code</Form.Label>
                              <Form.Control type="number" placeholder="Supplier Code" />
                            </Form.Group>
                            <Form.Group controlId="suppliername">
                              <Form.Label>Supplier Name *</Form.Label>
                              <Form.Control type="text" placeholder="Supplier Name" />
                            </Form.Group>
                          </Form.Row>
                           <Form.Row>
                            <Form.Group controlId="contactperson">
                              <Form.Label>Contact Person Name</Form.Label>
                              <Form.Control type="text" placeholder="Contact Person Name" />
                            </Form.Group>

                            <Form.Group className='ml-3' controlId="contactnumber">
                              <Form.Label>Contact Number</Form.Label>
                              <Form.Control type="number" placeholder="Contact Number" />
                            </Form.Group>

                            
                          </Form.Row>
                          <Form.Row>
                          

                            <Form.Group controlId="address">
                              <Form.Label>Address</Form.Label>
                              <Form.Control type="text" placeholder="Address" />
                            </Form.Group>
                            <Form.Group className='ml-3' controlId="selectstatus" >
                              <Form.Label>Select Status *</Form.Label>
                              <Form.Control as="select">
                                <option>Active</option>
                                <option>Inactive</option>
                              </Form.Control>
                              
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
                            <Tab eventKey="supplierlist" title="Supplier List">
                              <hr/>
                            <SupplierList />
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


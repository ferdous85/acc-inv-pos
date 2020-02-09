import React, { Component } from 'react'
import {Form, Button, Container, Tabs, Tab} from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';

import SalesReturnList from './SalesReturnList'


export default class AddSalesReturn extends Component {
                  render() {
                    return (
                      <React.Fragment>
                        
                        <Container>
                        <Paper elevation={5}>
                        <Tabs defaultActiveKey="AddNewSalesReturn" id="uncontrolled-tab-example" >
                            <Tab eventKey="AddNewSalesReturn" title="Add Sales Return">
                      
                      
                        
                        <h4 className='ml-3' >Add Sales Return</h4>
                       
                        <Form>
                          <Form.Row className='ml-3'>
                            <Form.Group controlId="salesreturnno" className='mr-3'>
                              <Form.Label>Sales Return No</Form.Label>
                              <Form.Control type="number" placeholder="Sales Return No" />
                            </Form.Group>

                            <Form.Group controlId="productname">
                              <Form.Label>Product Name *</Form.Label>
                              <Form.Control type="text" placeholder="Product Name" />
                            </Form.Group>
                          </Form.Row>
                          
                          <Form.Row className='ml-3' >
                            <Form.Group controlId="salesreturndate">
                              <Form.Label>Sales Return Date *</Form.Label>
                              <Form.Control type="date" placeholder="dd/mm/yyyy" />
                            </Form.Group>

                            <Form.Group controlId="selectcustomer" className='ml-3'>
                              <Form.Label>Select Customer</Form.Label>
                              <Form.Control type="text" placeholder="Select Customer" />
                            </Form.Group>
                          </Form.Row>
                          <Form.Row className='ml-3' >
                            <Form.Group controlId="quantity">
                              <Form.Label>Quantity</Form.Label>
                              <Form.Control type="text" placeholder="Quantity" />
                            </Form.Group>

                          </Form.Row>
                            <Form.Row className='ml-3' >
                            <Form.Group controlId="notes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Notes"  />
                          </Form.Group>
                            </Form.Row>

                          <Form.Group id="termandcondition" className='ml-3' >
                            <Form.Check type="checkbox" label="I agree with Terms & Conditions" />
                          </Form.Group>
                          <Form.Row className='ml-3'>
                          <Form.Group>
                          <Button className='mr-5' variant="primary" type="submit">
                            Save Changes
                          </Button>
                          </Form.Group>

                          <Form.Group className='ml-3'>
                          <Button variant="danger" type="submit">
                            Cancel
                          </Button>
                          </Form.Group>
                          
                          
                          </Form.Row>
                          
                        </Form>
                        
                      
                            </Tab>
                            <Tab eventKey="salesreturnlist" title="Sales Return List">
                              <hr/>
                            <SalesReturnList />
                            </Tab>
                            <Tab eventKey="contact" title="Contact" disabled >
                            <h1>Tab Three</h1>
                            </Tab>
                          </Tabs>
                          <hr/>
                          </Paper>
                      </Container>
                     
                      </React.Fragment>
                    )
                  }
                }


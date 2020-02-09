import React, { Component } from 'react'
import {Form, Button, Container, Tabs, Tab, Table} from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';

import MoneyReceipt from './MoneyReceipt'
import PaymentReceipt from './PaymentReceipt'

//PaymentReceipt


export default class AddSalesReturn extends Component {
                  render() {
                    return (
                      <React.Fragment>
                        
                        <Container>

                        <Tabs defaultActiveKey="acheadlist" id="uncontrolled-tab-example" >
                            <Tab eventKey="acheadlist" title="A/C Head List">
                        <hr/>
                      <Paper elevation={5}>
                        
                        <h4 className='ml-3' >Add New A/C Head</h4>
                        <hr/>
                        <Form>
                          <Form.Row className='ml-3'>
                          <Form.Group className='ml-3' controlId="acheadlist" >
                              <Form.Label>Under A/C of *</Form.Label>
                              <Form.Control as="select">
                                <option>Account Head List-01</option>
                                <option>Account Head List-02</option>
                              </Form.Control>
                               </Form.Group>

                            <Form.Group className='ml-3' controlId="accode">
                              <Form.Label>A/C Code *</Form.Label>
                              <Form.Control type="text" placeholder="A/C Code" />
                            </Form.Group>
                          </Form.Row>
                          
                          <Form.Row className='ml-3' >
                            <Form.Group className='ml-3' controlId="acname">
                              <Form.Label>A/C Name *</Form.Label>
                              <Form.Control type="text" placeholder="A/C Description" />
                            </Form.Group>

                            <Form.Group className='ml-3' controlId="selectcustomer" className='ml-3'>
                              <Form.Label>Opening Balance</Form.Label>
                              <Form.Control type="number" placeholder="Opening Banlace" />
                            </Form.Group>
                          </Form.Row>
                          <Form.Row className='ml-3' >
                           
                          </Form.Row >
                            <Form.Row className='ml-3' >
                            <Form.Group className='ml-3' controlId="memo">
                            <Form.Label>Memo</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Memo"  />
                          </Form.Group>
                            </Form.Row>

                          <Form.Group id="termandcondition" className='ml-3' >
                            <Form.Check className='ml-3' type="checkbox" label="I agree with Terms & Conditions" />
                          </Form.Group>
                          <Form.Row className='ml-3'>
                          <Form.Group className='ml-3'>
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
                        <br/>
                        <hr/>
                        <Table responsive>
                              <thead>
                                <tr>
                                  <th>SL. No</th>
                                  <th>Product Code</th>
                                  <th>Sypply Date</th>
                                  <th>Product Name</th>
                                  <th>Barcode</th>
                                  <th>Re-Order Level</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>12 Nov 2019</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>Active</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>12 Nov 2019</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>Active</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>12 Nov 2019</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>Active</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>12 Nov 2019</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>Active</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>12 Nov 2019</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>Active</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>12 Nov 2019</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>Active</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                
                                
                              </tbody>
                            </Table>

                        </Paper>
                      
                            </Tab>
                            <Tab eventKey="moneyreceipt" title="Money Receipt">
                              <hr/>
                              <MoneyReceipt />
                            </Tab>
                            <Tab eventKey="paymentreceipt" title="Payment Receipt" >
                            <PaymentReceipt />
                            </Tab>
                          </Tabs>

                          
                          
                      
                      </Container>
                      <br/>
                      
                      
                      </React.Fragment>
                    )
                  }
                }

 
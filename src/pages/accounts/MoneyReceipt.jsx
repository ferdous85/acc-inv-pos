import React, { Component } from 'react'
import {Form, Button, Container, Table} from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';




export default class AddSalesReturn extends Component {
                  render() {
                    return (
                      <React.Fragment>
                        <Container>
                      <Paper elevation={5}>
                        
                        <h4 className='ml-3'>Add New Money Receipt</h4>
                        <hr/>
                        <Form>
                          <Form.Row className='ml-3'>
                          <Form.Group className='ml-3' controlId="acheadlist" >
                              <Form.Label>Money Receipt *</Form.Label>
                              <Form.Control type="text" placeholder="Money Receipt" />
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

                            <Form.Group className='ml-3' controlId="amount" className='ml-3'>
                              <Form.Label>Receipt Amount</Form.Label>
                              <Form.Control type="number" placeholder="Receipt Amount" />
                            </Form.Group>
                          </Form.Row>
                          <Form.Row className='ml-3' >
                           
                          </Form.Row>
                            <Form.Row className='ml-3' >
                            <Form.Group className='ml-3' controlId="notes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Notes"  />
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
                      
                      
                      </Container>
                      
                      </React.Fragment>
                    )
                  }
                }

 
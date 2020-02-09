import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap'

export default class PurchaseList extends Component {
                      render() {
                        return (
                          <div>
                            <h4>Purchage List</h4>
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th>SL. No</th>
                                  <th>Product Code</th>
                                  <th>Product Name</th>
                                  <th>Quantity</th>
                                  <th>Purchase Price</th>
                                  <th>Total Amount</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>Desktop</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>Desktop</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>Desktop</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>Desktop</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>Desktop</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>Desktop</td>
                                  <td>Arpanet Computer</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                
                                
                              </tbody>
                            </Table>
                          </div>
                        )
                      }
                    }

import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap'

export default class SalesReturnList extends Component {
                      render() {
                        return (
                          <div>
                            <h4>Sales Return List</h4>
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th>SL. No</th>
                                  <th>Sales Return Code</th>
                                  <th>Sales Return Date</th>
                                  <th>Customer Name</th>
                                  <th>Total Qantity</th>
                                  <th>Total Amount</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                 <td>1</td>
                                  <td>1001</td>
                                   <td>12 Nov 2019</td>
                                  <td>Parvez Mahmood</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1002</td>
                                   <td>12 Nov 2019</td>
                                  <td>Parvez Mahmood</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1003</td>
                                   <td>12 Nov 2019</td>
                                  <td>Parvez Mahmood</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1004</td>
                                   <td>12 Nov 2019</td>
                                  <td>Parvez Mahmood</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1005</td>
                                   <td>12 Nov 2019</td>
                                  <td>Parvez Mahmood</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                <tr>
                                 <td>1</td>
                                  <td>1006</td>
                                   <td>12 Nov 2019</td>
                                  <td>Parvez Mahmood</td>
                                  <td>5</td>
                                  <td>5</td>
                                  <td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                  </td>
                                </tr>
                                
                                
                              </tbody>
                            </Table>
                          </div>
                        )
                      }
                    }

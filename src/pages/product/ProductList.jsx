import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap'

export default class ProductList extends Component {
                      render() {
                        return (
                          <div>
                            <h4>Product List</h4>
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
                          </div>
                        )
                      }
                    }

import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap'

export default class CustomerList extends Component {
                      render() {
                        return (
                          <div>
                            <h4>Customer List</h4>
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th>SL. No</th>
                                  <th>Customer Code</th>
                                  <th>Customer Name</th>
                                  <th>Address</th>
                                  <th>Mobile</th>
                                  <th>Email</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1001</td>
                                   <td>Parvez Mahmood</td>
                                  <td>Monihar, Jashore</td>
                                  <td>Address</td>
                                  <td>Mobile</td>
                                  <td>parvez@semicolonit.com</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1002</td>
                                   <td>Parvez Mahmood</td>
                                  <td>Monihar, Jashore</td>
                                  <td>Address</td>
                                  <td>Mobile</td>
                                  <td>parvez@semicolonit.com</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1003</td>
                                   <td>Parvez Mahmood</td>
                                  <td>Monihar, Jashore</td>
                                  <td>Address</td>
                                  <td>Mobile</td>
                                  <td>parvez@semicolonit.com</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1004</td>
                                   <td>Parvez Mahmood</td>
                                  <td>Monihar, Jashore</td>
                                  <td>Address</td>
                                  <td>Mobile</td>
                                  <td>parvez@semicolonit.com</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1005</td>
                                   <td>Parvez Mahmood</td>
                                  <td>Monihar, Jashore</td>
                                  <td>Address</td>
                                  <td>Mobile</td>
                                  <td>parvez@semicolonit.com</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1006</td>
                                   <td>Parvez Mahmood</td>
                                  <td>Monihar, Jashore</td>
                                  <td>Address</td>
                                  <td>Mobile</td>
                                  <td>parvez@semicolonit.com</td>
                                  <td>
                                    <Button size="sm" className='mr-2' >Edit</Button>
                                    <Button size="sm" variant="danger">Delete</Button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1007</td>
                                   <td>Parvez Mahmood</td>
                                  <td>Monihar, Jashore</td>
                                  <td>Address</td>
                                  <td>Mobile</td>
                                  <td>parvez@semicolonit.com</td>
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

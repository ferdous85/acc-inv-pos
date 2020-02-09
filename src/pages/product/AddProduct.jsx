import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap' 

export default class AddProduct extends Component {
  render() {
    return (
      <div>
        <h4>Add Product</h4>
        <Container>
                         <Form>
                          <Form.Row>
                            <Form.Group controlId="productcode" className='mr-3'>
                              <Form.Label>Product Code</Form.Label>
                              <Form.Control type="number" placeholder="Product Code" />
                            </Form.Group>
                            <Form.Group controlId="productname">
                              <Form.Label>Product Name</Form.Label>
                              <Form.Control type="text" placeholder="Product Name" />
                            </Form.Group>
                            
                          </Form.Row>
                           <Form.Row>
                           <Form.Group controlId="minsaleprice">
                              <Form.Label>Minimum Sale Price *</Form.Label>
                              <Form.Control type="number" placeholder="Minimum Sale Price" />
                            </Form.Group>

                            <Form.Group className='ml-3' controlId="reorder">
                              <Form.Label>Re-Order Level</Form.Label>
                              <Form.Control type="number" placeholder="Re-Order Level" />
                            </Form.Group>

                            
                          </Form.Row>
                          <Form.Row>
                          

                            <Form.Group controlId="quantity">
                              <Form.Label>Quantity</Form.Label>
                              <Form.Control type="number" placeholder="Quantity" />
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
                            <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Description"  />
                          </Form.Group>
                            </Form.Row>

                          
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
                        </Container>
      </div>
    )
  }
}

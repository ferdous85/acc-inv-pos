import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form  } from 'react-bootstrap'

export class EditBankList extends Component {

            handleSubmit=(event) => {
              event.preventDefault()
             
            }

            render() {
              const { data } = this.props;
                    return (
                      <Modal
                      {...this.props}
                      // onHide={onHide}
                      // show={show}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          Update Bank
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="container">
                         <Row>
                           <Col sm={6}>
                             <Form onSubmit={this.handleSubmit}>
                               <Form.Group controlId='bankName'>
                                 <Form.Label>
                                   Bank Name
                                 </Form.Label>
                                 <Form.Control
                                 type='text'
                                 value={data.bankName}
                                 name='bankName'
                                 placeholder='Bank Name'
                                 />
                                 </Form.Group>
                                 <Form.Group controlId='accName'>
                                 <Form.Label>
                                   Account Name
                                 </Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='accName'
                                 placeholder='Account Name'
                                 />
                                 </Form.Group>
                                 <Form.Group controlId='accNum'>
                                 <Form.Label>
                                   Account Number
                                 </Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='accNum'
                                 placeholder='Account Number'
                                 />
                                 </Form.Group>
                                 <Form.Group controlId='brName'>
                                 <Form.Label>
                                   Branch Name
                                 </Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='brName'
                                 placeholder='Branch Name'
                                 />
                                 </Form.Group>
                                  <Button variant='primary' className='mr-3' >Update</Button>
                                  
                                  <Button variant='danger' onClick={this.props.onHide}>Close</Button>
                                 <Form.Group>

                                 </Form.Group>

                             </Form>

                           </Col>
                         </Row>
                        </div>
                      </Modal.Body>
                      
                    </Modal>
                    )
                  }
                }


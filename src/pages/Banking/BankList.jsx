import React, { Component } from 'react'
import {Button, Table, ButtonToolbar} from 'react-bootstrap'

import { Modal, Row, Col, Form  } from 'react-bootstrap'



class BankList extends Component {
  state = {
    data: {},
    banks: [
      { _id: "5", itenNo: 4, bankName: 'Sonali Bank', accName:'Milon Hossain',accNum:'9999999999',brName:'Daratana Branch',balance:''},
      { _id: "11", itenNo: 9, bankName: 'Rupali Bank', accName:'Ferdous Habib',accNum:'999999dfdfd9999',brName:'Daratana Branch',balance:''},
    ],
    bank: {},
    showEdit: false,
    showDelete: false
  };

  handleChange=(e)=>{
    const {name, value} = e.target;
    const data={...this.state.data};
    data[name]=value;
    this.setState({data})
  } 

  handleSubmit =e=>{
    e.preventDefault()
    const {data}=this.state;
    console.log( data);
    this.setState({ data:{}, showEdit: false })
  }

  handleClose = () => {this.setState({showEdit: false, showDelete: false})}
  handleEditShow = (bank) => {
    this.setState({ data: bank, showEdit: true })
  }
  handleDeleteShow = () => {this.setState({showDelete: true})}

  render() {
    const { data, banks, showEdit, showDelete } = this.state;
    
    return (
      <div>
        <br/>
        
        
      <Table responsive  bordered hover>
          <thead className="bg-info">
            <tr>
              <th>SL. No</th>
              <th>Item Code</th>
              <th>Bank name</th>
              <th>Account Name</th>
              <th>Account No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              banks.map((bank, index) => (<tr key={bank._id}>
                  <td>{index+1}</td>
                  <td>{bank.itenNo}</td>
                  <td>{bank.bankName}</td>
                  <td>{bank.accName}</td>
                  <td>{bank.accNum}</td>
                  <td>
                    <ButtonToolbar>
                    <Button onClick={()=>this.handleEditShow(bank)} size="sm" className='mr-2' >Edit</Button>
                    <Button onClick={this.handleDeleteShow} size="sm" variant="danger">Delete</Button>
                    </ButtonToolbar>
                  </td>
                </tr>)
                
              )
            }
                      
            </tbody>
        </Table>

        <Modal
          {...this.props}
          onHide={this.handleClose}
          show={showEdit}
          data={data}
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
                <Col sm={10}>
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
                      onChange={this.handleChange}
                      />
                      </Form.Group>
                      <Form.Group controlId='accName'>
                      <Form.Label>
                        Account Name
                      </Form.Label>
                      <Form.Control
                      value={data.accName}
                      type='text'
                      name='accName'
                      placeholder='Account Name'
                      onChange={this.handleChange}
                      />
                      </Form.Group>
                      <Form.Group controlId='accNum'>
                      <Form.Label>
                        Account Number
                      </Form.Label>
                      <Form.Control
                      value={data.accNum}
                      type='text'
                      name='accNum'
                      placeholder='Account Number'
                      onChange={this.handleChange}
                      />
                      </Form.Group>
                      <Form.Group controlId='brName'>
                      <Form.Label>
                        Branch Name
                      </Form.Label>
                      <Form.Control
                      value={data.brName}
                      type='text'
                      name='brName'
                      placeholder='Branch Name'
                      onChange={this.handleChange}
                      />
                      </Form.Group>
                      <Button type="submit" variant='primary' className='mr-3' >Update</Button>
                      
                      <Button variant='danger' onClick={this.handleClose}>Close</Button>
                      <Form.Group>

                      </Form.Group>

                  </Form>

                </Col>
              </Row>
            </div>
          </Modal.Body>
          
        </Modal>
       
        {/* <EditBankList
          show={showEdit}
          onHide={this.handleClose}
          data={data}
        /> */}
        <Modal
            show={showDelete}
            onHide={this.handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Delete Bank
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                Are you sure to delete this bank
              </div>
            </Modal.Body>
            <ButtonToolbar className='mb-2'>
                <Button  className='mr-5 ml-5 d-flex'>Confirm</Button>
                <Button onClick={this.handleClose} variant='danger'>Cancel</Button>
            </ButtonToolbar>            
          </Modal>
      </div>
    )
  }
}

 
export default BankList
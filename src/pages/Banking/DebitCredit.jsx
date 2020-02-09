import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';

export default class DebitCredit extends Component {

            state={
              data:{},
              errors: {}
            }

            handleChange=(e)=>{
              const {name, value} = e.target;
              const {data}=this.state;
              data[name]=value
              this.setState({data})
            } 

            handleSubmit =e=>{
              e.preventDefault()
              
              this.setState({date:{}})
              return //console.log(this.state)
            }



    render() {
      const {data}=this.state;
        return (
          <div>
                 <Paper elevation={5}>
                        <h4 className='ml-3' >Debit & Credit</h4>
                      <hr/>
                  
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Row className='ml-3'>
                        <Form.Group className='ml-3' controlId="BankName" >
                              <Form.Label>Bank</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Select a Bank"
                                name='bankName'
                                value={data.bankName}
                                onChange={this.handleChange}
                                required
                                />
                        </Form.Group>

                      <Form.Group className='ml-3' controlId="accType">
                            <Form.Label>Account Type</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Account Type"
                            type="text" 
                            name='accType'
                            value={data.accType}
                            onChange={this.handleChange}
                            />
                      </Form.Group>
                    </Form.Row>
                    
                    <Form.Row className='ml-3' >
                      <Form.Group className='ml-3' controlId="slipNum">
                        <Form.Label>Slip No.</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Slip Number"
                        type="text" 
                        name='slipNum'
                        value={this.state.slipNum}
                        onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group className='ml-3' controlId="amount" className='ml-3'>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Amount"
                        type="text" 
                        name='amount'
                        value={this.state.amount}
                        onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form.Row>
                        <Form.Row className='ml-3' >
                        <Form.Group className='ml-3' controlId="date" className='ml-3'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control 
                        type="date" 
                        placeholder="Date"
                        type="date" 
                        name='date'
                        value={this.state.date}
                        onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form.Row >
                      <Form.Row className='ml-3' >
                      <Form.Group className='ml-3' controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control 
                      as="textarea" 
                      rows="3" 
                      type="text" 
                      placeholder="Description"
                      name='description'
                      value={this.state.description}
                      onChange={this.handleChange}
                      />
                    </Form.Group>
                      </Form.Row>

                    
                    <Form.Row className='ml-3'>
                    <Form.Group className='ml-3'>
                    <Button 
                    className='mr-5' 
                    variant="info" 
                    type="submit"
                    >
                      Deposit
                    </Button>
                    </Form.Group>
                    </Form.Row>
                    
                  </Form>
                  </Paper>
      </div>
    )
  }
}

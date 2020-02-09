import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
//import Paper from './node_modules/@material-ui/core/Paper';

export default class AddNewBank extends Component {

            state={
              data:{},
              errors: {}
            }

            handleChange=(e)=>{
              const {name, value} = e.target;
              const data={...this.state};
              data[name]=value;
              this.setState({data})
            } 

            handleSubmit =e=>{
              e.preventDefault()
              const {data}=this.state;
              console.log(data);
              this.setState({ date:{} })
            }



    render() {
      const {data}=this.state;
        return (
          <div>
              
                        <h4 className='ml-3' >Add New Bank Detail</h4>
                      <hr/>
                  
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Row className='ml-3'>
                        <Form.Group className='ml-3' controlId="Bank Name" >
                              <Form.Label>Bank Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Bank Name"
                                name='bankName'
                                value={data.bankName}
                                onChange={this.handleChange}
                                required
                                />
                        </Form.Group>

                      <Form.Group className='ml-3' controlId="accountname">
                            <Form.Label>Account Name *</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Account Name"
                            type="text" 
                            name='accountName'
                            value={data.accountName}
                            onChange={this.handleChange}
                            />
                      </Form.Group>
                    </Form.Row>
                    
                    <Form.Row className='ml-3' >
                      <Form.Group className='ml-3' controlId="acnumber">
                        <Form.Label>Account Number *</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Account Number"
                        type="text" 
                        name='accNum'
                        value={this.state.accNum}
                        onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group className='ml-3' controlId="branchname" className='ml-3'>
                        <Form.Label>Branch Name</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Branch Name"
                        type="text" 
                        name='brName'
                        value={this.state.brName}
                        onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='ml-3' >
                     
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
                    variant="primary" 
                    type="submit"
                    
                    >
                      Submit
                    </Button>
                    </Form.Group>

                    <Form.Group className='ml-3'>
                    <Button variant="danger">
                      Cancel
                    </Button>
                    </Form.Group>
                    
                    
                    </Form.Row>
                    
                  </Form>
                
      </div>
    )
  }
}

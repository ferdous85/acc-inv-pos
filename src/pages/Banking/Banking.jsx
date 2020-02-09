import React, { Component } from 'react'
import {Container, Tabs, Tab} from 'react-bootstrap'
import ListIcon from '@material-ui/icons/List';



import BankList from './BankList';
import AddNewBank from './AddNewBank';
import DebitCredit from './DebitCredit';



export default class Banking extends Component {

                      
                  render() {
                    
                   
                    return (
                      <React.Fragment>
                        
                        <Container>

                        <Tabs defaultActiveKey="banks" id="uncontrolled-tab-example" >

                        <Tab eventKey="banks" title="Banks">
                              
                              <BankList />
                          </Tab>
                      {/* Add Bank For area Starts */}
                          <Tab eventKey="addbank" title="Add Bank">
                              <AddNewBank />
                            
                      
                            </Tab>
                            <Tab eventKey="moneyreceipt" title="Debit & Credit">
                              <hr/>
                              <DebitCredit />
                            </Tab>
                            <Tab eventKey="transaction" title="Transactions" >
                            
                            </Tab>
                          </Tabs>
                      </Container>
                      
                      
                      </React.Fragment>
                    )
                  }
                }

 
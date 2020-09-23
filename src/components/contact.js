import React, { Component } from "react"
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl"

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kekeli Afantchao</h2>
            <img 
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: "250px"}}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em"}}>
              Feel free to contact me with either of the listed methods!
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: "25px", fontFamily: "Kumbh Sans"}}>
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                  860.916.7093</ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{fontSize: "25px", fontFamily: "Kumbh Sans"}}>
                  <i className="fa fa-envelope-square" aria-hidden="true"></i>
                  kekeli.afantchao@yahoo.com</ListItemContent>
                </ListItem>
              </List>              
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
import React, { Component } from "react"
import { Card, CardText, CardTitle, CardActions, Button, IconButton, CardMenu} from "react-mdl"

class Projects extends Component {
  render() {
    return(
      <div className = "project-cards">
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
          <CardActions border>
              <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>

      
    )
  }
}

export default Projects;
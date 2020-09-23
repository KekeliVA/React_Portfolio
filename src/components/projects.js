import React, { Component } from "react"
import { Card, CardText, CardTitle, CardActions, Button, IconButton, CardMenu} from "react-mdl"

class Projects extends Component {
  render() {
    return(
      <div className = "project-cards">

      {/* Need to figure out how to make buttons linkable*
        so we know that the button can take an onclick, however we want html
        to be as semantic as possible so maybe just use a regular link
        check w3schools/}

        {/* Project 1 */}
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Find and Dine</CardTitle>
            <CardText>
                This web application provides recipes for the user based on ingredients they have readily available to them.
            </CardText>
          <CardActions border>
              <Button colored href="https://github.com/kellymedia/find-and-dine" target="_blank">Github</Button>
              <Button colored href="https://kellymedia.github.io/find-and-dine/" target="_blank">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        
        {/* Project 2 */}
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Adopt Me</CardTitle>
            <CardText>
                AdoptMe is an application that allows a user to find pets in their area to adopt. 
            </CardText>
          <CardActions border>
              <Button colored href="https://github.com/sthapa411/AdoptMe" target="_blank">Github</Button>
              <Button colored href="https://desolate-waters-99049.herokuapp.com/" target="_blank">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Coming Soon...</CardTitle>
            <CardText>
                Project 3 coming soon...
            </CardText>
          <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
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
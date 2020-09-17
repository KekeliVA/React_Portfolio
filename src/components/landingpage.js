import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}></Cell>
            <img src= "../public/_DSC0717.jpg"/>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
            </div>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
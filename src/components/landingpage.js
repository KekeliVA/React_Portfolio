import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"
import image from "../_DSC0717.jpg"

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}></Cell>
            {/* <img src= {image}/> */}
            
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <p>HTML/CSS | JavaScript | React | MySQL | Express | NodeJS | Bootstrap</p>
            
              <div className= "socials">
                {/*LinkedIn */}
                <a href="https://www.linkedin.com/in/afantchao/" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>

                {/*GitHub */}
                <a href="https://github.com/KekeliVA" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-github-square" aria-hidden="true"></i>
                </a>
              </div>             
            </div>

          <div className="bio-div" style={{width: "75%", margin: "auto", marginTop: "1.5em"}}>
            <Cell col={6}>
              <img width= "70%" alt= "Picture of developer" src= {image}/>
            </Cell>

            <Cell col={6}>
              <div className= "bio-text">
                <h1>Hello</h1>
              </div>
            </Cell>
          </div>
      

        </Grid>
      </div>
    )
  }
}

export default LandingPage;
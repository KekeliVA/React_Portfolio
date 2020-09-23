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
            <Grid>
              <Cell col={6}>
                <img width= "90%" alt= "Picture of developer" src= {image}/>
              </Cell>
              
              <Cell col={6}>
                <strong>Kekeli Afantchao </strong>
                is a recent college grad from the University of Hartford. Earning his degrees in Audio Engineering Technology and Electrical Engineering Technology. 
                Since a young age Kekeli was interested in software and programming. After spending some time in the work force he saw it would be worthwhile to pivot to software 
                engineering to earn more technical positions at an array of companies. In his free time he enjoys videogames, playing drums in a band, and ultimate frisbee.
              </Cell>
            </Grid>
          </div>
          

 

        </Grid>
      </div>
    )
  }
}

export default LandingPage;
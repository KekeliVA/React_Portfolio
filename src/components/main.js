import React from "react"
import landingPage from "./landingpage"
import aboutMe from "./aboutme"
import projects from "./projects"
import contact from "./contact"
import resume from "./resume"
import { Switch, Route} from "react-router-dom"


const Main = () => (
  <Switch>
    <Route exact path = "/" component={landingPage} />
    <Route path = "/aboutme" component={aboutMe} />
    <Route path = "/contact" component={contact} />
    <Route path = "/projects" component={projects} />
    <Route path = "/resume" component={resume} />
  </Switch>
  )



export default Main;
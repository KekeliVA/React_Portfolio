import React from "react"
import landingPage from "./landingpage"
import projects from "./projects"
import contact from "./contact"
import { Switch, Route} from "react-router-dom"


const Main = () => (
  <Switch>
    <Route exact path = "/" component={landingPage} />
    <Route path = "/contact" component={contact} />
    <Route path = "/projects" component={projects} />
  </Switch>
  )



export default Main;
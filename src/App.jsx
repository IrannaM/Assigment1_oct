import { useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TextJSON from './container/textJSON';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TextJSON}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

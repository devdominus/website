import React from 'react';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import {Switch,Route,withRouter} from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import './pageTransitions/slideTransition.scss'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      prevloc:this.props.location.pathname.split("/")[1]||"/"
    }
  }
  componentWillReceiveProps(){
    this.setState({prevloc:this.props.location.pathname.split("/")[1]||"/"})
  }
  
  getPathDepth(location) {
    let order=["/","about","projects","contact"]
    let pathArr = location.pathname.split("/")[1]||"/"
    if(order.indexOf(pathArr)>order.indexOf(this.state.prevloc))
    {return "left"}
    else if(order.indexOf(pathArr)<order.indexOf(this.state.prevloc))
    {return "right"}
    else return ""

  }
  render(){
    const {location}=this.props;
    const classNames = `${this.getPathDepth(location)}`;
    const currentKey=location.pathname.split("/")[1] || "/";
    const timeout={enter:900,exit:900}
  return (
    <div>
      <Nav />
        <TransitionGroup component="div" className="App"
        childFactory={child => React.cloneElement(child,{classNames})}>
        <CSSTransition
        key={currentKey}
        timeout={timeout}
        classNames={classNames}>
        <Switch location={location}>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
      
    </div>  
  );
  }
}
export default withRouter(App);

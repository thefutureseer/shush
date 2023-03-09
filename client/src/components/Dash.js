import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../css/App.css'
import text from '../text/basics.txt';

export default class Dash extends Component{
 constructor(props) {
  super(props);
  this.state = {}
 };
 componentDidMount () {
  const Jtext = JSON.stringify(this.state.text)
  console.log(Jtext);
 }

  render(){
  return(

   <div className='App'>
    <div className="App App-div">
    <img src={logo} className="App-logo" alt="logo" />
    <div className='catagory-container'>
    <h1 className='pop-up move-hide'>FIRST RELIGION ON EARTH?</h1>
    <div className='pop-up'>I need to clarify that the concept of "first religions on earth" is a subject of ongoing research and debate among scholars, as the development of religion and spirituality is shrouded in prehistory and archaeological evidence is limited. However, based on available information, here is a list of some of the earliest known religious traditions:</div>
    <div className='fancy'> 1.  It is difficult to say what spiritual practices existed before animism, as the development of religion and spirituality is shrouded in prehistory and archaeological evidence is limited. However, some scholars suggest that the earliest human spiritual practices may have involved the worship of ancestors or the veneration of powerful natural forces, such as the sun, moon, and stars. Others propose that shamanic practices, which involve communicating with spirits and other non-physical entities, may have been one of the earliest forms of human spirituality. Ultimately, the specific nature and origins of prehistoric spiritual practices remain a subject of ongoing research and debat
    </div>
      Edit <code>src/App.js</code> and save to reload.
    </div>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    </div>
   </div>
  )}
}
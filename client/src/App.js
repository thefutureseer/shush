import './css/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dash from './components/Dash';
import text from './text_APIs/basics.txt';
import StatusBar from './components/StatusBar';
import MessageBoard from './pages/MessageBoard';
// import ShowApi from './components/ShowApi';

function App() {
  const jsonData = JSON.stringify(text);
  console.log(jsonData);
  return (
     <BrowserRouter>
    <div >
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/message-board">Message Board</Link>
        </li>
      </ul>
    </nav>
      <StatusBar/>
      <Routes>
        <Route exact path='/' element={<Dash/>}/>
        <Route path='/message-board' element={<MessageBoard/>}/>
      </Routes>
    </div>
     </BrowserRouter>
  );
}

export default App;

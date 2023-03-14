import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dash from './components/Dash';
import text from './text_APIs/basics.txt';
import StatusBar from './components/StatusBar';
import MessageBoard from './pages/MessageBoard';

function App() {
  const jsonData = JSON.stringify(text);
  console.log(jsonData);
  return (
     <BrowserRouter>
    <div >
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

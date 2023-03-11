import '../css/App.css';
import Dash from './components/Dash';
import text from '../text_APIs/basics.txt';
import StatusBar from './components/StatusBar';

function App() {
  const jsonData = JSON.stringify(text);
  console.log(jsonData);
  return (
    <div >
      <StatusBar/>
      <Dash/>
    </div>
  );
}

export default App;

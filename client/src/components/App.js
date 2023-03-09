import '../css/App.css';
import Dash from './Dash';
import text from '../text/basics.txt';

function App() {
  const jsonData = JSON.stringify(text);
  console.log(jsonData);
  return (
    <div >
      <Dash/>
    </div>
  );
}

export default App;

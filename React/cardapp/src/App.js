import logo from './logo.svg';
import Button from './components/Button';

import './App.css';
/*import { extractDigits, updateTime } from './date/Date';*/

function App() {
  /*let result = updateTime();*/
  
  return (
    <div className="App">
      <div className="day">
        <Button number=""/>
        <Button number="2"/>
      </div>
      <div className="hours">
        <Button className="firstChiild" number="2"/>
        <Button number="2"/>
      </div>
      <div className="minutes">
        <Button className="firstChiild" number="2"/>
        <Button number="2"/> 
      </div>
    </div>
  );
}

export default App;

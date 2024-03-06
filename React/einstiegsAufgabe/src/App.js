import './App.css'
import List from './components/List'
import Button from './components/Button';
import Card from './components/Card';
import Header from './components/Header'


function App() {
  return (
    <div className='container'>

      <Header name="Liste" />
      <div className='component'>
        <List value="Coffee" />
        <List value="Tee" />
        <List value="Beer" />
      </div>

      <Header name="Button" />
      <div className='component'>
        <Button value="Sender" />
      </div>

      <Header name="Card" />
      <div className='component'>
        <Card image="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" desc="Architect & Engineer" />
      </div>
    </div>
  );
}

export default App;

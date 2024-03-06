import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage'
import ChatPage from './page/ChatPage'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' Component={HomePage} exact />
      <Route path='/chat' Component={ChatPage} exact />
      </Routes>
    </div>
  );
}

export default App;

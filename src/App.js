import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './container/layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;

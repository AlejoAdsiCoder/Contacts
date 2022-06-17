import logo from './logo.svg';
import './App.css';
import List from './components/list';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Menu } from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { Create } from './components/create';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Edit } from './components/edit';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        
      <Routes>
        <Route exact path='/' element={<List />} />
        <Route path='/create' element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} exact />
      </Routes>
      </div>
    </div>
  );
}

export default App;

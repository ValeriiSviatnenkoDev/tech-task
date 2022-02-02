import { Route, Routes } from 'react-router-dom';
import '@progress/kendo-theme-default/dist/all.css';
import './app.css';
import Main from './components/Main';
import EditGrid from './components/EditUser/EditGrid';

const App = () => {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/:id" element={<EditGrid />}/>
     </Routes>
    </div>
  );
}

export default App;

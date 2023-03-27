import { Routes, Route } from 'react-router-dom';
import Map from './component/Map';

function App() {

  return (
      <Routes>
        <Route path="*" element={<Map />} /> 
      </Routes>
  );
}

export default App; 

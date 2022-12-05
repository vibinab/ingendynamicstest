import logo from './logo.svg';
import './App.css';
import { UserFormData } from './components/UserFormData';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Success } from './components/Success';

function App() {
  return (
    
     <>
<BrowserRouter>
<Routes>
<Route path="/" element={<UserFormData />} /> 
<Route path="/success" element={<Success />} />

</Routes>

</BrowserRouter>

     </>
  );
}

export default App;

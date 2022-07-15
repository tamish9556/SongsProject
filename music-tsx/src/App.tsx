import ApiConnections from './Api/ApiConnections';
import './App.css';
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";


export default function App() {
  const navigate = useNavigate();
    return (
      <>
        <img onClick={() => {navigate('/')}} src={require('./image.png')} style={{width:'50px' ,display:'inline'}}/>
        <Routes>
          <Route path="*" element={<ApiConnections/>} />
        </Routes>
      </>
    )
}

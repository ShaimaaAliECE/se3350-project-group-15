import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./levels/HomePage";
import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import Level3 from "./levels/Level3";
import CustomLevel from './levels/CustomLevel';
import Header from "./components/Header"
import SignInPage from './Authentication/SignInPage';
import LoginPage from './Authentication/LoginPage';
import AdminPage from './components/AdminPage';

export default function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          {/*LevelMain: home page */}
          <Route path="/" element={<HomePage />} />
          {/*Level1: level 1 */}
          <Route path="/level1" element={<Level1 />} />
          {/*Level2: level 2 */}
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/customLevel" element={<CustomLevel />} />
          {/*Auth*/}
          <Route path="/sign_in" element={<SignInPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin_page" element={<AdminPage />} />
        </Routes>
    </div>
  );
}

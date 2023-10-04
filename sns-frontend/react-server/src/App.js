import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet-async';
import ExamplePage from './pages/ExamplePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyPagePage from "./pages/MyPagePage";
import FollowPage from "./pages/FollowPage";

function App() {
  return (
    <>
      <Helmet>
        <title>BitSNS</title>
      </Helmet>
      <Routes>
        <Route element={<ExamplePage />} path={'/'} />
        <Route element={<LoginPage />} path={'/auth/login'} />
        <Route element={<RegisterPage />} path={'/auth/register'} />
        <Route element={<MyPagePage />} path={'/mypage/detail'} />
        <Route element={<FollowPage />} path={'/mypage/follow'} />
      </Routes>
    </>
  );
}

export default App;

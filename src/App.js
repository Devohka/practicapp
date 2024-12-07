import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import ArticlePage from "./pages/ArticlePage/ArticlePage";
import HomePage from './pages/HomePage/HomePage';
import MonthPage from './pages/MonthPage/MonthPage';
import TodaysPage from './pages/TodaysPage/TodaysPage';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todays-news' element={<TodaysPage/>} />
        <Route path='/month-news' element={<MonthPage/>} >
          
        </Route>
        <Route path='/month-news/article' element={<ArticlePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

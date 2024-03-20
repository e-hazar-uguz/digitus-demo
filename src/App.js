import './App.css';
import Header from './components/header';
import MiniPosts from './components/mini-posts';
import Posts from './components/posts';
import { BrowserRouter, Routes, Route,useLocation  } from 'react-router-dom';
import Moms from './pages/moms';
import MomTalk from './pages/mom-talk';
import Forum from './pages/forum';
import Explore from './pages/explore';
import Experts from './pages/experts';

function MiniPostsWrapper() {
  const location = useLocation();

  return location.pathname === "/" ? <MiniPosts /> : null;
}


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header className="header" />

        <div className="main-content">
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/mom-talk" element={<MomTalk />} />
        <Route path="/moms" element={<Moms />} />
      </Routes>
      <MiniPostsWrapper />
    </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

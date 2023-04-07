import ImgScroll from './Components/ImgScroll';
import NavBar from './Components/NavBar';
import './Styles/marvel.scss';
import Layout from './Commons/Layout';
import AppWrapper from './Commons/AppWrapper';
import { Routes, Route } from 'react-router-dom';
import ComicsPage from './Pages/ComicsPage';
import AboutPage from './Pages/AboutPage';
import CharactersPage from './Pages/CharactersPage';
import Avengers from './Components/Avengers';
import Footer from './Components/Footer';

function App() {

  return (
    <AppWrapper>
      <Layout>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/" element={<Avengers />}></Route>
            <Route path="/comics" element={<ComicsPage />}></Route>
            <Route path="/about-us" element={<AboutPage />}></Route>
            <Route path="/characters" element={
            <CharactersPage>
              <div className="container-styles">
                <ImgScroll parentWidth={1200}/>
              </div>
            </CharactersPage>
            }></Route>
          </Routes>
        </div>
        <Footer />
      </Layout>
    </AppWrapper>
  );
}

export default App;
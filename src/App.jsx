import ImgScroll from './Components/ImgScroll';
import NavBar from './Components/NavBar';
import './Styles/marvel.scss';
import Layout from './Commons/Layout';
import AppWrapper from './Commons/AppWrapper';
import { Routes, Route } from 'react-router-dom';
import ComicsPage from './Pages/ComicsPage';
import AboutPage from './Pages/AboutPage';
import CharactersPage from './Pages/CharactersPage';


function App() {

  return (
    <AppWrapper>
      <Layout>
        <NavBar />
        <div className="Body">
          <Routes>
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
          <div id="img-avengers"></div>
        </div>
      </Layout>
    </AppWrapper>
  );
}

export default App;
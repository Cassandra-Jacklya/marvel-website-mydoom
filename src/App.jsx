import ImgScroll from './Components/ImgScroll';
import NavBar from './Components/NavBar';
import './Styles/marvel.scss';
import Layout from './Commons/Layout';
import AppWrapper from './Commons/AppWrapper';


function App() {

  return (
    <AppWrapper>
      <Layout>
        <NavBar />
        <div className="Body container-styles">
          <ImgScroll parentWidth={1200}/>
          <div id="img-avengers"></div>
        </div>
      </Layout>
    </AppWrapper>
  );
}

export default App;
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Ourmusic from './components/music/Ourmusic';
import Instinct from './components/music/Instinct';
import Uncaged from './components/music/Uncaged';
import Silk from './components/music/Silk';
import Artists from './components/Artist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
               <Route
					        exact
				          path="/"
				          element={
						                   <>
							                 <Header />
							                 <Home />
							                 <Footer />{" "}
						                   </>
				                     	}
				                    />

                            <Route
                                 exact
                                 path="/ourmusic"
                                 element={
                                  <>
                                  <Header />
                                  <Ourmusic />
                                  <Footer />{" "}
                                  </>
                                 }       
                                 />

                              <Route
                                 exact
                                 path="/instinct"
                                 element={
                                  <>
                                  <Header/>
                                  <Instinct/>
                                  <Footer/>{" "}
                                  </>
                                 }
                                 />

                              <Route
                                 exact
                                 path="/uncaged"
                                 element={
                                  <>
                                  <Header/>
                                  <Uncaged/>
                                  <Footer/>{" "}
                                  </>
                                 }
                                 />

                                <Route
                                  exact
                                  path="/silk"
                                  element={
                                    <>
                                    <Header/>
                                    <Silk/>
                                    <Footer/>{" "}
                                    </>
                                  }
                                  />

                                <Route
                                   exact
                                   path="/artists"
                                   element={
                                    <>
                                    <Header/>
                                    <Artists/>
                                    <Footer/>{" "}
                                    </>
                                   }
                                />
        </Routes>
        </BrowserRouter>


      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;

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
import AboutMonstercat from './components/about/AboutMonstercat';
import Diversity from './components/about/Diversity';
import Ethics from './components/about/Ethics';
import Environment from './components/about/Environmental'
import Contact from './components/about/Contact';
import NewsPage from './components/NewsPage';
import EventsPage from './components/EventsPage';
import UpcomingEventsPage from './components/UpcomingEventsPage';
import GoldPage from './components/GoldPage';
import Partnership from './components/Partnership';

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

<Route
					exact
					path="/aboutmonstercat"
					element={
						<>
							<Header />
							<AboutMonstercat />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/diversity"
					element={
						<>
							<Header />
							<Diversity />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/ethics"
					element={
						<>
							<Header />
							<Ethics />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/environment"
					element={
						<>
							<Header />
							<Environment />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/contact"
					element={
						<>
							<Header />
							<Contact />
							<Footer />{" "}
						</>
					}
				/>
        
        <Route
					exact
					path="/news"
					element={
						<>
							<Header />
							<NewsPage />
							<Footer />{" "}
						</>
					}
				/>
        <Route
					exact
					path="/events"
					element={
						<>
							<Header />
							<EventsPage />
							<Footer />{" "}
						</>
					}
				/>
        <Route
					exact
					path="/upcomming-events"
					element={
						<>
							<Header />
							<UpcomingEventsPage/>
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/gold"
					element={
						<>
							<Header />
							<GoldPage />
							<Footer />{" "}
						</>
					}
				/>

<Route
					exact
					path="/partnership"
					element={
						<>
							<Header />
							<Partnership />
							<Footer />{" "}
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

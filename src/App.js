import MyRouter from './MyRouter';import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './styles.css';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      
      <Router>
        
        {/* HEADER  */}
        <Header/>
        <div className="panel"></div>

        {/* ROUTER  */}
        <MyRouter/>
        
        {/* FOOTER  */}
        <Footer/>

      
        </Router>

    </div>
  );
}

export default App;

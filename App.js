import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      
        <Route path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={AboutUs} />
        <Route path="/" element ={<NavBar />}/>
      
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import BookingScreen from './screens/BookingScreen';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/booking" component={BookingScreen} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
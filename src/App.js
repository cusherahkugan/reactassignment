
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';

function App() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://kit.fontawesome.com/fc0fb1f370.css" crossOrigin="anonymous" />

      <Home />
      <About />
      <Contact />

    </div>

  );
}

export default App;

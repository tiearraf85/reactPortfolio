import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css'
// import App from './App.jsx'
import App from './App.jsx'
// import Nav from './component/Nav.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)

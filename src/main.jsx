import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css'
// import App from './App.jsx'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/next";
// import Nav from './component/Nav.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,

  <SpeedInsights />
)

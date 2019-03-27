// Import Dependencies
    import React from 'react';
    import ReactDOM from 'react-dom';
    // Import React-Router-Dom
        import { BrowserRouter as Router, Router} from 'react-router-dom';

// Import Components
    import App from './App';

// Styles
    import './index.css';
    import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

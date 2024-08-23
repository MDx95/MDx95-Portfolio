import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

// import './static/js/script.js'
// import 'bootstrap/dist/js/bootstrap'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

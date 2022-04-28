import ReactDOM from 'react-dom/client'
import App from './App'
import '@/assets/css/main.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // https://github.com/rnosov/react-reveal/issues/101
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)

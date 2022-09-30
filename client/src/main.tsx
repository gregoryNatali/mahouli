import ReactDOM from 'react-dom/client'
import dotenv from 'dotenv'
import App from './App'
import './index.css'

dotenv.config()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
)

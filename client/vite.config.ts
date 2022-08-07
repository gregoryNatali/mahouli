import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// setting proxy to other port
// is useful to make requests

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'https://localhost:8080',
				secure: false,
			}
		}
	}
})

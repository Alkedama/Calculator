import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Calculator/',
    server: {
        port: 8080,
        host: true
    }
})
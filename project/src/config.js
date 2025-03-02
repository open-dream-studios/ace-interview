const local_server = true;
export const API_URL = local_server? 'http://localhost:8080/api' : 'https://combined-project-server.up.railway.app/api';
export const PAGE_URL = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://inspireconnect.site"
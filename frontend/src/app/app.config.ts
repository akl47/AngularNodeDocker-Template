import {
    environment
} from '../environments/environment';
export const BASE_URL = environment.production ? 'https://letwin.co:30000/api/v1' : 'http://localhost:3000/api';
export const IMAGE_URL = environment.production ? 'https://letwin.co:30000/uploads/' : 'http://localhost:3000/uploads/';
export const NAME_KEY = 'name';
export const TOKEN_KEY = 'token';

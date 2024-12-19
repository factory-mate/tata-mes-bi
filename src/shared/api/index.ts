import { HttpClient } from '../axios'

export const KB_SERVICE_API_PREFIX = import.meta.env.VITE_KB_SERVICE_API_PREFIX

export const httpClient = new HttpClient()

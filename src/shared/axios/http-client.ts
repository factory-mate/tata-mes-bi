import { AuthUtils } from '@bit-ocean/utils'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'

import type { R } from './types'

axios.defaults.timeout = 60_000
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'

export class HttpClient {
  /**
   * The instance of Axios.
   */
  #instance: AxiosInstance

  /**
   * The flag to indicate whether the interceptors are loaded.
   */
  #interceptorsLoaded = false

  constructor(config?: CreateAxiosDefaults) {
    this.#instance = axios.create(config)
  }

  /**
   * Initialize the interceptors.
   */
  async initInterceptors() {
    // NOTE: Prevent repeating the initialization.
    if (this.#interceptorsLoaded) {
      return
    }
    this.#interceptorsLoaded = true

    this.#initRequestInterceptor()
    this.#initResponseInterceptor()
  }

  /**
   * Initialize the request interceptor.
   */
  #initRequestInterceptor() {
    this.#instance.interceptors.request.use(
      (req: InternalAxiosRequestConfig) => {
        this.#addAuthorization(req)
        return req
      },
      (err: AxiosError) => Promise.reject(err)
    )
  }

  /**
   * Initialize the response interceptor.
   */
  #initResponseInterceptor() {
    this.#instance.interceptors.response.use(
      async (res: AxiosResponse<R>) => {
        if (res.config.responseType === 'blob' || res.data instanceof ArrayBuffer) {
          return res
        }
        const { data, success } = res.data

        if (!success) {
          throw res.data
        }

        return data as any
      },
      async (err: AxiosError<R>) => {
        const { response } = err

        // If the request is canceled, throw the error.
        if (axios.isCancel(err)) {
          throw err
        }

        throw response?.data
      }
    )
  }

  /**
   * Add the authorization to the request header.
   */
  #addAuthorization(req: InternalAxiosRequestConfig) {
    if (AuthUtils.isAuthenticated()) {
      req.headers.Authorization = AuthUtils.getAuthorization()
    }
  }

  /**
   * The method to send a request.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.request({ url: '/api/users', method: 'GET' })
   * ```
   */
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.#instance.request(config)
  }

  /**
   * The method to send a `GET` request.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.GET('/api/users')
   * ```
   */
  get<T, D = any>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return this.#instance.get(url, { params, ...config })
  }

  /**
   * The method to send a `POST` request.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.POST('/api/users', { id: 1, name: 'Bruce' })
   * ```
   */
  post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.#instance.post(url, data, config)
  }

  /**
   * The method to send a `PUT` request.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.PUT('/api/users/1', { name: 'Bruce' })
   * ```
   */
  put<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.#instance.put(url, data, config)
  }

  /**
   * The method to send a `DELETE` request.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.DELETE('/api/users/1')
   * ```
   */
  delete<T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.#instance.delete(url, config)
  }

  /**
   * The method to send a `PATCH` request.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.PATCH('/api/users/1', { name: 'Bruce' })
   * ```
   */
  patch<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.#instance.patch(url, data, config)
  }

  /**
   * The method to send a `GET` request.
   * @description In order to highlight the method of request, also support the upper case methods.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.GET('/api/users')
   * ```
   */
  GET<T, D = any>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return this.#instance.get(url, { params, ...config })
  }

  /**
   * The method to send a `POST` request.
   * @description In order to highlight the method of request, also support the upper case methods.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.POST('/api/users', { id: 1, name: 'Bruce' })
   * ```
   */
  POST<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.#instance.post(url, data, config)
  }

  /**
   * The method to send a `PUT` request.
   * @description In order to highlight the method of request, also support the upper case methods.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.PUT('/api/users/1', { name: 'Bruce' })
   * ```
   */
  PUT<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.#instance.put(url, data, config)
  }

  /**
   * The method to send a `DELETE` request.
   * @description In order to highlight the method of request, also support the upper case methods.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.DELETE('/api/users/1')
   * ```
   */
  DELETE<T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.#instance.delete(url, config)
  }

  /**
   * The method to send a `PATCH` request.
   * @description In order to highlight the method of request, also support the upper case methods.
   * @example
   * ```ts
   * const httpClient = new HttpClient()
   * httpClient.PATCH('/api/users/1', { name: 'Bruce' })
   * ```
   */
  PATCH<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.#instance.patch(url, data, config)
  }
}

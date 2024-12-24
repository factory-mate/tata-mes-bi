import type { PropsWithChildren } from 'react'

/**
 * A provider for mounting the Axios interceptors.
 * @description
 * - Used to inject routes, i18n, messages, etc. into the Axios interceptors in the React context.
 * - Before injection, present the global Loading animation.
 */
export default function AxiosProvider(props: PropsWithChildren) {
  const { children } = props

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (initialized) {
      return
    }

    httpClient.initInterceptors()

    setInitialized(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!initialized) {
    return null
  }

  return <>{children}</>
}

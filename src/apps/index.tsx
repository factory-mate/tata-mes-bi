import '@/shared/echarts'

import { RouterProvider } from '@tanstack/react-router'

export default function App() {
  return (
    <QueryProvider>
      <AxiosProvider>
        <RouterProvider router={router} />
      </AxiosProvider>
    </QueryProvider>
  )
}

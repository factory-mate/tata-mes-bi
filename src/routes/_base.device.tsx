import { createFileRoute } from '@tanstack/react-router'

import { wxtjQO } from '@/features/device'

export const Route = createFileRoute('/_base/device')({
  staticData: {
    title: '设备部看板'
  },
  beforeLoad: async () => {
    await Promise.all([queryClient.ensureQueryData(wxtjQO())])
  }
})

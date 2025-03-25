import type { DeviceRepairDto } from './types'

export const LINE_COMPLETE_RATE_QK = 'door-leaf-package:line-complete-rate'

export const LINE_PERSON_QK = 'door-leaf-package:line-person'

export const INTERNAL_RETURN_TYPE_QK = 'door-leaf-package:internal-return-type'

export const DEVICE_UTILIZATION_RATE_QK = 'door-leaf-package:device-utilization-rate'

export const DEVICE_REPAIR_QK = 'door-leaf-package:device-repair'

export const HOUR_COMPLETION_QK = 'door-leaf-package:hour-completion'

export const LATE_PRODUCTION_QK = 'door-leaf-package:late-production'

export const INTERNAL_RETURN_REASON_QK = 'door-leaf-package:internal-return-reason'

export const lineCompleteRateQK = (params: FullPageDto) => [LINE_COMPLETE_RATE_QK, params] as const

export const linePersonQK = (params: FullPageDto) => [LINE_PERSON_QK, params] as const

export const internalReturnTypeQK = (params: FullPageDto) =>
  [INTERNAL_RETURN_TYPE_QK, params] as const

export const deviceUtilizationRateQK = () => [DEVICE_UTILIZATION_RATE_QK] as const

export const deviceRepairQK = (params: DeviceRepairDto) => [DEVICE_REPAIR_QK, params] as const

export const hourCompletionQK = (params: FullPageDto) => [HOUR_COMPLETION_QK, params] as const

export const lateProductionQK = (params: FullPageDto) => [LATE_PRODUCTION_QK, params] as const

export const internalReturnReasonQK = (params: FullPageDto) =>
  [INTERNAL_RETURN_REASON_QK, params] as const

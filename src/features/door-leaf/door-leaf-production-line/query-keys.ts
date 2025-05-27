import type { CheckDto, DeviceRepairDto, LineCompleteRateDto } from './types'

export const LINE_COMPLETE_RATE_QK = 'door-leaf-production-line:line-complete-rate'

export const LINE_PERSON_QK = 'door-leaf-production-line:line-person'

export const MATERIAL_CALL_QK = 'door-leaf-production-line:material-call'

export const INTERNAL_RETURN_TYPE_QK = 'door-leaf-production-line:internal-return-type'

export const GAUGE_QK = 'door-leaf-production-line:gauge'

export const MATERIAL_TYPE_QK = 'door-leaf-production-line:material-type'

export const INTERNAL_RETURN_REASON_QK = 'door-leaf-production-line:internal-return-reason'

export const CHECK_QK = 'door-leaf-production-line:check'

export const DEVICE_REPAIR_QK = 'door-leaf-production-line:device-repair'

export const UNFINISHED_TASK_QK = 'door-leaf-production-line:unfinished-task'

export const HOUR_COMPLETION_QK = 'door-leaf-production-line:hour-completion'

export const DEVICE_RUNNING_STATUS_QK = 'door-leaf-production-line:device-running-status'

export const lineCompleteRateQK = (params: LineCompleteRateDto) =>
  [LINE_COMPLETE_RATE_QK, params] as const

export const linePersonQK = (params: FullPageDto) => [LINE_PERSON_QK, params] as const

export const materialCallQK = (params: FullPageDto) => [MATERIAL_CALL_QK, params] as const

export const internalReturnTypeQK = (params: FullPageDto) =>
  [INTERNAL_RETURN_TYPE_QK, params] as const

export const gaugeQK = (params: FullPageDto) => [GAUGE_QK, params] as const

export const materialTypeQK = (params: FullPageDto) => [MATERIAL_TYPE_QK, params] as const

export const internalReturnReasonQK = (params: FullPageDto) =>
  [INTERNAL_RETURN_REASON_QK, params] as const

export const checkQK = (params: CheckDto) => [CHECK_QK, params] as const

export const deviceRepairQK = (params: DeviceRepairDto) => [DEVICE_REPAIR_QK, params] as const

export const unfinishedTaskQK = (params: FullPageDto) => [UNFINISHED_TASK_QK, params] as const

export const hourCompletionQK = (params: FullPageDto) => [HOUR_COMPLETION_QK, params] as const

export const deviceRunningStatusQK = (params: FullPageDto) =>
  [DEVICE_RUNNING_STATUS_QK, params] as const

import type { DeviceRepairDto } from './types'

export const BASIC_INFO_QK = 'line-workshop:basic-info'

export const PRODUCTION_REACHED_QK = 'line-workshop:production-reached'

export const PACKAGE_NUM_QK = 'line-workshop:package-num'

export const HOUR_WORKING_QK = 'line-workshop:hour-working'

export const INTERNAL_RETURN_QK = 'line-workshop:internal-return'

export const INTERNAL_RETURN_REASON_QK = 'line-workshop:internal-return-reason'

export const DEVICE_REPAIR_QK = 'line-workshop:device-repair'

export const MATERIAL_CALL_QK = 'line-workshop:material-call'

export const basicInfoQK = (params: FullPageDto) => [BASIC_INFO_QK, params] as const

export const productionReachedQK = (params: FullPageDto) => [PRODUCTION_REACHED_QK, params] as const

export const packageNumQK = (params: FullPageDto) => [PACKAGE_NUM_QK, params] as const

export const hourWorkingQK = (params: FullPageDto) => [HOUR_WORKING_QK, params] as const

export const internalReturnQK = (params: FullPageDto) => [INTERNAL_RETURN_QK, params] as const

export const internalReturnReasonQK = (params: FullPageDto) =>
  [INTERNAL_RETURN_REASON_QK, params] as const

export const deviceRepairQK = (params: DeviceRepairDto) => [DEVICE_REPAIR_QK, params] as const

export const materialCallQK = (params: PageDto) => [MATERIAL_CALL_QK, params] as const

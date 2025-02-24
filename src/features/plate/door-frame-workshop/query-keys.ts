import type { DeviceRepairDto } from './types'

export const BASIC_INFO_QK = 'door-frame-workshop:basic-info'

export const PRODUCTION_REACH_QK = 'door-frame-workshop:production-reach'

export const PACKAGE_NUM_QK = 'door-frame-workshop:package-num'

export const HOUR_WORKING_QK = 'door-frame-workshop:hour-working'

export const INTERNAL_RETURN_QK = 'door-frame-workshop:internal-return'

export const INTERNAL_RETURN_REASON_QK = 'door-frame-workshop:internal-return-reason'

export const DEVICE_REPAIR_QK = 'door-frame-workshop:device-repair'

export const MATERIAL_CALL_QK = 'door-frame-workshop:material-call'

export const basicInfoQK = (params: FullPageDto) => [BASIC_INFO_QK, params] as const

export const productionReachQK = (params: FullPageDto) => [PRODUCTION_REACH_QK, params] as const

export const packageNumQK = (params: FullPageDto) => [PACKAGE_NUM_QK, params] as const

export const hourWorkingQK = (params: FullPageDto) => [HOUR_WORKING_QK, params] as const

export const internalReturnQK = (params: FullPageDto) => [INTERNAL_RETURN_QK, params] as const

export const internalReturnReasonQK = (params: FullPageDto) =>
  [INTERNAL_RETURN_REASON_QK, params] as const

export const deviceRepairQK = (params: DeviceRepairDto) => [DEVICE_REPAIR_QK, params] as const

export const materialCallQK = (params: PageDto) => [MATERIAL_CALL_QK, params] as const

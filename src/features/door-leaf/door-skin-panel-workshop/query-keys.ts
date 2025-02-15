import type { FullPageDto } from '@/shared/types'

import type { DeviceRepairDto } from '../door-leaf-production-line'

export const BASIC_INFO_QK = 'door-skin-panel-workshop:basic-info'

export const LATE_PRODUCTION_QK = 'door-skin-panel-workshop:late-production'

export const PRODUCTION_REACHED_QK = 'door-skin-panel-workshop:production-reached'

export const INTERNAL_RETURN_QK = 'door-skin-panel-workshop:internal-return'

export const DEVICE_REPAIR_QK = 'door-skin-panel-workshop:device-repair'

export const MATERIAL_CALL_QK = 'door-skin-panel-workshop:material-call'

export const basicInfoQK = (params: FullPageDto) => [BASIC_INFO_QK, params] as const

export const lateProductionQK = (params: FullPageDto) => [LATE_PRODUCTION_QK, params] as const

export const productionReachedQK = (params: FullPageDto) => [PRODUCTION_REACHED_QK, params] as const

export const internalReturnQK = (params: FullPageDto) => [INTERNAL_RETURN_QK, params] as const

export const deviceRepairQK = (params: DeviceRepairDto) => [DEVICE_REPAIR_QK, params] as const

export const materialCallQK = (params: FullPageDto) => [MATERIAL_CALL_QK, params] as const

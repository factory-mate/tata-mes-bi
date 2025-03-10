import type { PageDto } from '@/shared/types'

export const REPAIR_QK = 'device:repair'

export const MAINTAIN_QK = 'device:maintain'

export const CHECK_QK = 'device:check'

export const REPAIR_INFO_QK = 'device:repair-info'

export const REPAIR_TIME_QK = 'device:repair-time'

export const CUMULATIVE_DOWN_TIME_QK = 'device:cumulative-down-time'

export const FAULT_CLASSIFY_QK = 'device:fault-classify'

export const MTTR_QK = 'device:mttr'

export const repairQK = () => [REPAIR_QK] as const

export const maintainQK = () => [MAINTAIN_QK] as const

export const checkQK = () => [CHECK_QK] as const

export const repairInfoQK = (params: PageDto) => [REPAIR_INFO_QK, params] as const

export const repairTimeQK = () => [REPAIR_TIME_QK] as const

export const cumulativeDownTimeQK = () => [CUMULATIVE_DOWN_TIME_QK] as const

export const faultClassifyQK = () => [FAULT_CLASSIFY_QK] as const

export const mttrQK = () => [MTTR_QK] as const

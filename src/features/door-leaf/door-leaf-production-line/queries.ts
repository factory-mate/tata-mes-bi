import type { FullPageDto, PageDto } from '@/shared/types'

import { DoorLeafProductionLineAPI } from './api'
import {
  deviceRepairQK,
  hourCompletionQK,
  internalReturnReasonQK,
  internalReturnTypeQK,
  lineCompleteRateQK,
  linePersonQK,
  materialCallQK,
  materialTypeQK,
  unfinishedTaskQK
} from './query-keys'
import type { DeviceRepairDto } from './types'

export const lineCompleteRateQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: lineCompleteRateQK(data),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getLineCompleteRate(data, signal)
  })

export const linePersonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: linePersonQK(data),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getLinePerson(data, signal)
  })

export const materialCallQO = (data: PageDto) =>
  queryOptions({
    queryKey: materialCallQK(data),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getMaterialCall(data, signal)
  })

export const internalReturnTypeQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnTypeQK(data),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getInternalReturnType(data, signal)
  })

export const materialTypeQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: materialTypeQK(data),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getMaterialType(data, signal)
  })

export const internalReturnReasonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnReasonQK(data),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getInternalReturnReason(data, signal)
  })

export const deviceRepairQO = (params: DeviceRepairDto) =>
  queryOptions({
    queryKey: deviceRepairQK(params),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getDeviceRepair(params, signal)
  })

export const unfinishedTaskQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: unfinishedTaskQK(data),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getUnfinishedTask(data, signal)
  })

export const hourCompletionQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: hourCompletionQK(data),
    queryFn: ({ signal }) => DoorLeafProductionLineAPI.getHourCompletion(data, signal)
  })

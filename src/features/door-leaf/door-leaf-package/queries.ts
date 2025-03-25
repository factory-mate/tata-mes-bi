import { DoorLeafPackageAPI } from './api'
import {
  deviceRepairQK,
  deviceUtilizationRateQK,
  hourCompletionQK,
  internalReturnReasonQK,
  internalReturnTypeQK,
  lateProductionQK,
  lineCompleteRateQK,
  linePersonQK
} from './query-keys'
import type { DeviceRepairDto } from './types'

export const lineCompleteRateQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: lineCompleteRateQK(data),
    queryFn: ({ signal }) => DoorLeafPackageAPI.getLineCompleteRate(data, signal)
  })

export const linePersonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: linePersonQK(data),
    queryFn: ({ signal }) => DoorLeafPackageAPI.getLinePerson(data, signal)
  })

export const internalReturnTypeQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnTypeQK(data),
    queryFn: ({ signal }) => DoorLeafPackageAPI.getInternalReturnType(data, signal)
  })

export const deviceUtilizationRateQO = () =>
  queryOptions({
    queryKey: deviceUtilizationRateQK(),
    queryFn: () => DoorLeafPackageAPI.getDeviceUtilizationRate()
  })

export const deviceRepairQO = (params: DeviceRepairDto) =>
  queryOptions({
    queryKey: deviceRepairQK(params),
    queryFn: ({ signal }) => DoorLeafPackageAPI.getDeviceRepair(params, signal)
  })

export const hourCompletionQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: hourCompletionQK(data),
    queryFn: ({ signal }) => DoorLeafPackageAPI.getHourCompletion(data, signal)
  })

export const lateProductionQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: lateProductionQK(data),
    queryFn: ({ signal }) => DoorLeafPackageAPI.getProductionLate(data, signal)
  })

export const internalReturnReasonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnReasonQK(data),
    queryFn: ({ signal }) => DoorLeafPackageAPI.getInternalReturnReason(data, signal)
  })

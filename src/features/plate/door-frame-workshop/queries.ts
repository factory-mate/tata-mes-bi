import { DoorFrameWorkshopAPI } from './api'
import { basicInfoQK, deviceRepairQK } from './query-keys'
import type { DeviceRepairDto } from './types'

export const basicInfoQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getBasicInfo(data, signal)
  })

export const productionReachQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getProductionReach(data, signal)
  })

export const packageNumQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getPackageNum(data, signal)
  })

export const hourWorkingQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getHourWorking(data, signal)
  })

export const internalReturnQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getInternalReturn(data, signal)
  })

export const internalReturnReasonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getInternalReturnReason(data, signal)
  })

export const deviceRepairQO = (params: DeviceRepairDto) =>
  queryOptions({
    queryKey: deviceRepairQK(params),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getDeviceRepair(params, signal)
  })

export const materialCallQO = (data: PageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getMaterialCall(data, signal)
  })

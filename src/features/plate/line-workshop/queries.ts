import type { FullPageDto, PageDto } from '@/shared/types'

import { LineWorkshopAPI } from './api'
import { basicInfoQK, deviceRepairQK } from './query-keys'
import type { DeviceRepairDto } from './types'

export const basicInfoQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getBasicInfo(data, signal)
  })

export const productionReachQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getProductionReach(data, signal)
  })

export const packageNumQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getPackageNum(data, signal)
  })

export const hourWorkingQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getHourWorking(data, signal)
  })

export const internalReturnQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getInternalReturn(data, signal)
  })

export const internalReturnReasonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getInternalReturnReason(data, signal)
  })

export const deviceRepairQO = (params: DeviceRepairDto) =>
  queryOptions({
    queryKey: deviceRepairQK(params),
    queryFn: ({ signal }) => LineWorkshopAPI.getDeviceRepair(params, signal)
  })

export const materialCallQO = (data: PageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getMaterialCall(data, signal)
  })

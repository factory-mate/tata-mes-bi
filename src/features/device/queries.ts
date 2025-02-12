import { queryOptions } from '@tanstack/react-query'

import { DeviceAPI } from './api'
import {
  checkQK,
  cumulativeDownTimeQK,
  faultClassifyQK,
  maintainQK,
  mttrQK,
  repairInfoQK,
  repairQK,
  repairTimeQK
} from './query-keys'

export const repairQO = () =>
  queryOptions({
    queryKey: repairQK(),
    queryFn: ({ signal }) => DeviceAPI.getRepair(signal)
  })

export const maintainQO = () =>
  queryOptions({
    queryKey: maintainQK(),
    queryFn: ({ signal }) => DeviceAPI.getMaintain(signal)
  })

export const checkQO = () =>
  queryOptions({
    queryKey: checkQK(),
    queryFn: ({ signal }) => DeviceAPI.getCheck(signal)
  })

export const repairInfoQO = () =>
  queryOptions({
    queryKey: repairInfoQK(),
    queryFn: () => DeviceAPI.getRepairInfo()
  })

export const repairTimeQO = () =>
  queryOptions({
    queryKey: repairTimeQK(),
    queryFn: ({ signal }) => DeviceAPI.getRepairTime(signal)
  })

export const cumulativeDownTimeQO = () =>
  queryOptions({
    queryKey: cumulativeDownTimeQK(),
    queryFn: ({ signal }) => DeviceAPI.getCumulativeDownTime(signal)
  })

export const faultClassifyQO = () =>
  queryOptions({
    queryKey: faultClassifyQK(),
    queryFn: ({ signal }) => DeviceAPI.getFaultClassify(signal)
  })

export const mttrQO = () =>
  queryOptions({
    queryKey: mttrQK(),
    queryFn: ({ signal }) => DeviceAPI.getMMTR(signal)
  })

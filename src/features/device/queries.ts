import { queryOptions } from '@tanstack/react-query'

import { DeviceAPI } from './api'
import { bytjQK, wxtjQK } from './query-keys'

export const wxtjQO = () =>
  queryOptions({
    queryKey: wxtjQK(),
    queryFn: ({ signal }) => DeviceAPI.getWXTJ(signal)
  })

export const bytjQO = () =>
  queryOptions({
    queryKey: bytjQK(),
    queryFn: ({ signal }) => DeviceAPI.getBYTJ(signal)
  })

export const djtjQO = () =>
  queryOptions({
    queryKey: wxtjQK(),
    queryFn: ({ signal }) => DeviceAPI.getDJTJ(signal)
  })

export const wxcstjQO = () =>
  queryOptions({
    queryKey: wxtjQK(),
    queryFn: ({ signal }) => DeviceAPI.getWXCSTJ(signal)
  })

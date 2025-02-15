import type { ChartRawData } from '@/shared/types'

export interface BasicInfoVo {
  cFactoryUnitCode: string
  iStandartWokerCount: number
  iManagerCount: number
  iActureWokerCount: number
  cDefindParm01: number
  cDefindParm02: number
  cDefindParm03: string
}

export interface ProductionReachedVo extends ChartRawData {
  cProcessCode: string
  cProcessName: string
  EndCount: number
  AllCount: number
  iRate: number
}

export interface PackageNumVo extends ChartRawData {
  cFactoryUnitCode: string
  cFactoryUnitName: string
  cProcessCode: string
  cProcessName: string
  AllCount: number
  iRate: string
}

export interface HourWorkingVo extends ChartRawData {
  GDCode: string
  iPackageCount01: number
  iPackageCount02: number
  iPackageCount03: number
  iPackageCount04: number
  iPackageCount05: number
  iPackageCount06: number
  iPackageCount07: number
  iPackageCount08: number
  iPackageCount09: number
  iPackageCount10: number
}

export interface InternalReturnVo extends ChartRawData {
  cFactoryUnitCode: string
  WXCount: number
  WXRate: number
  FXCount: number
  FXRate: number
  CZCount: number
  CZRate: number
}

export interface InternalReturnReasonVo extends ChartRawData {
  cFactoryUnitCode: string
  cRepairReasonTypeName: string
  nQuantity: number
}

export interface DeviceRepairVo {
  cLineName: string
  cPersonName: string
  cDeviceCode: string
  cDeviceName: string
  cFaultName: string
  dCreateTime: string
  iStatus: string
  iStatusName: string
}

export interface DeviceRepairDto {
  cFactoryUnitCode: string
  cType: CType
}

export enum CType {
  WORKSHOP = 1,
  SECTION = 2,
  LINE = 3
}

export interface MaterialCallVo {
  cInWareHouseName: string
  cDefindParm04: string
  cDefindParm05: string
  cInvCode: string
  cInvName: string
  cInvStd: string
  nQuantity: number
  dCreateTime: string
}

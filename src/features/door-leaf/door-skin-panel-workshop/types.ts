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

export interface LateProductionVo {
  /**
   * 生产日期
   */
  dPlanStartDate?: null | string
  /**
   * 差货数量
   */
  RestQuantity?: number | null
  /**
   * 产线名称
   */
  SourceUnitName?: null | string
}

export interface ProductionReached {
  /**
   * 总任务数
   */
  AllCount?: number | null
  /**
   * 产线编码
   */
  cFactoryUnitCode?: null | string
  /**
   * 产线名称
   */
  cFactoryUnitName?: null | string
  /**
   * 工序编码
   */
  cProcessCode?: null | string
  /**
   * 工序名称
   */
  cProcessName?: null | string
  /**
   * 完成数
   */
  EndCount?: number | null
  /**
   * 占比
   */
  iRate?: number | null
}

export interface ProductionReachedVo {
  /**
   * 总任务数
   */
  AllCount?: number | null
  /**
   * 产线编码
   */
  cFactoryUnitCode?: null | string
  /**
   * 产线名称
   */
  cFactoryUnitName?: null | string
  /**
   * 工序编码
   */
  cProcessCode?: null | string
  /**
   * 工序名称
   */
  cProcessName?: null | string
  /**
   * 完成数
   */
  EndCount?: number | null
  /**
   * 占比
   */
  iRate?: number | null
  [k: string]: any
}

export interface InternalReturnType extends ChartRawData {
  cFactoryUnitCode: string
  WXCount: number
  WXRate: number
  FXCount: number
  FXRate: number
  CZCount: number
  CZRate: number
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

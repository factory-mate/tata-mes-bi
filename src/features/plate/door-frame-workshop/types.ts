export interface LinePersonVo {
  cFactoryUnitCode: string
  cFactoryUnitName: string
  iStandartWokerCount: number
  iManagerCount: number
  iActureWokerCount: number
  UID: string
  IsValid: true
  IsDelete: true
  cCreateUserCode: string
  cCreateUserName: string
  dCreateTime: string
  cModifyUserCode: string
  cModifyUserName: string
  dModifyTime: string
  cSourceAppType: string
  iStatus: number
  utfs: string
  cDefindParm01: string
  cDefindParm02: string
  cDefindParm03: string
  cDefindParm04: string
  cDefindParm05: string
  cDefindParm06: string
  cDefindParm07: string
  cDefindParm08: string
  cDefindParm09: string
  cDefindParm10: string
}

export interface ProductionReachVo extends ChartRawData {
  iType: number // 类型：1 计划 2：实际完工数
  cProcessCode: string
  cProcessName: string
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

export interface PrimaryYieldVo extends ChartRawData {
  cType: string
  cProcessCode: string
  cProcessName: string
  iRate: string
  cFactoryUnitCode: string
  cFactoryUnitName: string
}

export interface HourWorkingVo extends ChartRawData {
  WSScanData: string
  cProcessCode: string
  cProcessName: string
  cType: string
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

export interface LineCompleteRateVo {
  cFactoryUnitCode: string
  cFactoryUnitName: string
  cProcessCode: string
  cProcessName: string
  EndCount: number
  AllCount: number
  iRate: number
}

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

export interface InternalReturnType {
  cFactoryUnitCode: string
  WXCount: number
  WXRate: number
  FXCount: number
  FXRate: number
  CZCount: number
  CZRate: number
  [key: string]: string | number
}

export interface MaterialType {
  cFactoryUnitCode: string
  cFactoryUnitName: string
  cProcessCode: string
  cProcessName: string
  cDynamicsParm06: string
  nQuantity: number
  iRate: string
  [key: string]: string | number
}

export interface InternalReturnReasonVo {
  cFactoryUnitCode: string
  cRepairReasonTypeName: string
  nQuantity: number
  [key: string]: string | number
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

export interface UnfinishedTaskVo {
  dPlanStartDate: string
  cFactoryUnitCode: string
  cFactoryUnitName: string
  cProcessCode: string
  cProcessName: string
  WWGCount: number
}

export interface HourCompletionVo {
  cCreateUserCode?: null | string
  cCreateUserName?: null | string
  cFactoryUnitCode?: null | string
  cFactoryUnitName?: null | string
  cModifyUserCode?: null | string
  cModifyUserName?: null | string
  cSourceAppType?: null | string
  dCreateTime?: Date | null
  dModifyTime?: Date | null
  iEighthHour?: number | null
  iFifthHour?: number | null
  iFirstHour?: number | null
  iFourthHour?: number | null
  iNinthHour?: number | null
  iOvertimeHout?: number | null
  IsDelete?: boolean | null
  iSecondHour?: number | null
  iSeventhHour?: number | null
  iSixthHour?: number | null
  iStatus?: number
  IsValid?: boolean | null
  iThirdHour?: number | null
  /**
   * 类型：
   * 1 - 标准
   * 2 - 实际完工数
   */
  iType?: number | null
  UID?: string
  utfs?: null | string
}

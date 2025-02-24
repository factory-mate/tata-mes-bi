export interface RepairVo {
  DWXCount: number
  JXZCount: number
  WCCount: number
  AllCount: number
}

export interface MaintainVo {
  DBYCount: number
  JXZCount: number
  WCCount: number
  AllCount: number
}

export interface CheckVo {
  DDJCount: number
  JXZCount: number
  WCCount: number
  AllCount: number
}

export interface RepairInfoVo {
  cLineName: string
  cPersonName: string
  cDeviceCode: string
  cDeviceName: string
  cFaultName: string
  dCreateTime: string
  iStatus: string
  iStatusName: string
}

export interface RepairTimeVo extends ChartRawData {
  cDeviceCode: string
  cDeviceName: string
  nQuantity: number
}

export interface CumulativeDownTimeVo extends ChartRawData {
  cMonth: string
  iHour: number
}

export interface FaultClassifyVo extends ChartRawData {
  cFaultClassName: string
  nQuantity: number
  iRate: string
}

export interface MTTRVo extends ChartRawData {
  cDeviceName: string
  iMinute: number
}

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

export interface RepairTimeVo {
  cDeviceCode: string
  cDeviceName: string
  nQuantity: number
  [key: string]: string | number
}

export interface CumulativeDownTimeVo {
  cMonth: string
  iHour: number
  [key: string]: string | number
}

export interface FaultClassifyVo {
  cFaultClassName: string
  nQuantity: number
  iRate: string
  [key: string]: string | number
}

export interface MTTRVo {
  cDeviceName: string
  iMinute: number
  [key: string]: string | number
}

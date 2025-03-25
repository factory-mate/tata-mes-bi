export const INTERNAL_RETURN_REASON_QK = 'door-leaf-production-line:internal-return-reason'

export const internalReturnReasonQK = (params: FullPageDto) =>
  [INTERNAL_RETURN_REASON_QK, params] as const

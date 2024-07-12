import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

interface State {
  theme: string
}

interface Actions {}

const initialState: State = {
  theme: 'dark'
}

export const useChartStore = create<State & Actions>()(
  subscribeWithSelector(
    devtools((set, get) => ({
      ...initialState
    }))
  )
)

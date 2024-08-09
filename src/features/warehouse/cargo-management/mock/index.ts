export interface CargoGroup {
  id: string
  name: string
  data: Cargo[]
}

export interface Cargo {
  name: string
  current: number
  total: number
  type: CargoType
}

export type CargoType = 'wait' | 'part' | 'done' | 'out'

export const cargoTypeColorMap = new Map<CargoType, string>([
  ['wait', '#f56c6c'],
  ['part', '#e6a23c'],
  ['done', '#67c23a'],
  ['out', '#409eff']
])

export const cargoData: CargoGroup[] = [
  {
    id: '1',
    name: 'xxx物流有限公司',
    data: [
      {
        name: 'EM001',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM002',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM003',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM004',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM005',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM006',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM007',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM008',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM009',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM010',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM011',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM012',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM013',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM014',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM015',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM016',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM017',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM018',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM019',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM020',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM021',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM022',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM023',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM024',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM025',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM026',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM027',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM028',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM029',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM030',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM031',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM032',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM033',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM034',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM035',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM036',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM037',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM038',
        current: 50,
        total: 100,
        type: 'part'
      }
    ]
  },
  {
    id: '2',
    name: 'yyy物流有限公司',
    data: [
      {
        name: 'EM001',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM002',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM003',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM004',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM005',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM006',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM007',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM008',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM009',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM010',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM011',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM012',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM013',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM014',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM015',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM016',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM017',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM018',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM019',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM020',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM021',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM022',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM023',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM024',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM025',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM026',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM027',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM028',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM029',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM030',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM031',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM032',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM033',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM034',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM035',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM036',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM037',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM038',
        current: 50,
        total: 100,
        type: 'part'
      }
    ]
  },
  {
    id: '3',
    name: 'zzzzzzzzzz物流有限公司',
    data: [
      {
        name: 'EM001',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM002',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM003',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM004',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM005',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM006',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM007',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM008',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM009',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM010',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM011',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM012',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM013',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM014',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM015',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM016',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM017',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM018',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM019',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM020',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM021',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM022',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM023',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM024',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM025',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM026',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM027',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM028',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM029',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM030',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM031',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM032',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM033',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM034',
        current: 50,
        total: 100,
        type: 'part'
      },
      {
        name: 'EM035',
        current: 0,
        total: 100,
        type: 'wait'
      },
      {
        name: 'EM036',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM037',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM038',
        current: 50,
        total: 100,
        type: 'part'
      }
    ]
  },
  {
    id: '4',
    name: 'ddd物流有限公司',
    data: [
      {
        name: 'EM036',
        current: 100,
        total: 100,
        type: 'out'
      },
      {
        name: 'EM037',
        current: 100,
        total: 100,
        type: 'done'
      },
      {
        name: 'EM038',
        current: 50,
        total: 100,
        type: 'part'
      }
    ]
  }
]

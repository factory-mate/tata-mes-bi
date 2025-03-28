import type { EChartsOption } from 'echarts'

import { hourCompletionQO } from '../queries'

export function AutomaticLineHourCompletionLine() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    hourCompletionQO({
      orderByFileds: '',
      conditions: 'cFactoryUnitCode = FM0101040101'
    })
  )

  const option = useMemo<EChartsOption>(() => {
    const standardData = data.find((i) => i.iType === 1)
    const actualData = data.find((i) => i.iType === 2)
    return {
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: `${standardData?.cFactoryUnitName ?? '工位'}小时完工统计`,
        top: 10,
        left: 'center',
        textStyle: {
          fontSize: 24
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        left: 0,
        right: 50,
        bottom: 20,
        tooltip: true,
        containLabel: true
      },
      // legend: {
      //   data: ['标准量', '实际量'],
      //   align: 'left',
      //   top: 4,
      //   right: 0,
      //   orient: 'horizontal',
      //   width: 10
      // },
      xAxis: {
        type: 'category',
        name: '小时',
        data: ['1小时', '2小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '加班'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 16,
          interval: 0,
          width: 60
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 100,
        nameTextStyle: {
          padding: 8
        },
        axisLabel: {
          fontSize: 16
        }
      },
      series: [
        {
          type: 'line',
          name: '标准量',
          data: [
            standardData?.iFirstHour ?? 0,
            standardData?.iSecondHour ?? 0,
            standardData?.iThirdHour ?? 0,
            standardData?.iFourthHour ?? 0,
            standardData?.iFifthHour ?? 0,
            standardData?.iSixthHour ?? 0,
            standardData?.iSeventhHour ?? 0,
            standardData?.iEighthHour ?? 0,
            standardData?.iNinthHour ?? 0
          ],
          label: {
            show: true
          }
        },
        {
          type: 'line',
          name: '实际量',
          data: [
            actualData?.iFirstHour ?? 0,
            actualData?.iSecondHour ?? 0,
            actualData?.iThirdHour ?? 0,
            actualData?.iFourthHour ?? 0,
            actualData?.iFifthHour ?? 0,
            actualData?.iSixthHour ?? 0,
            actualData?.iSeventhHour ?? 0,
            actualData?.iEighthHour ?? 0,
            actualData?.iNinthHour ?? 0
          ],
          label: {
            show: true
          }
        }
      ]
    }
  }, [data])

  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={option}
    />
  )
}

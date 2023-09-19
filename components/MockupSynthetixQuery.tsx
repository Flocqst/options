"use client"

import useSynthetixQueries, { CandleResult } from '@synthetixio/queries'
import Wei, { WeiSource, wei } from '@synthetixio/wei'
import { PriceChart } from './PriceChart'
import { UTCTimestamp } from 'lightweight-charts';
import { useEffect } from 'react';

// { id: "SNX-2629728-640" },

export type CandleChartData = {
	time: UTCTimestamp,
  open: number,
  high: number,
  low: number,
  close: number,
};

export default function MockupSynthetix() {
  const { subgraph } = useSynthetixQueries()

  useEffect(() => {
    
  }, []);

  
  const candles = subgraph.useGetCandles(
    {
			first: 10,
			where: {
				synth: 'SNX',
				period: '2629728',
			},
			orderBy: 'timestamp',
			orderDirection: 'asc',
		},
    {
			id: true,
			synth: true,
			open: true,
			high: true,
			low: true,
			close: true,
			timestamp: true,
			average: true,
			period: true,
			aggregatedPrices: true,
		}
  )
  
  if (candles.isLoading) {
    return <p>Loading...</p>
  }

  if (candles.isError) {
    return <p>Error pulling chart Data</p>
  }

  const newData: CandleChartData[] = candles.data?.map((item) => ({
    open: item.open.toNumber(),
    high: item.high.toNumber(),
    low: item.low.toNumber(),
    close: item.close.toNumber(),
    time: item.timestamp as unknown as UTCTimestamp,
  }))!

  return (
    <div>
      <strong>Candles:</strong>{' '}
      {candles.isSuccess
        ? candles.data[0].timestamp.toLocaleString()
        : 'Loading...'}
        <PriceChart dataC={newData}></PriceChart>
    </div>
  )
}

"use client"

import useSynthetixQueries, { CandleResult } from '@synthetixio/queries'
import React, { useEffect, useState, useRef } from 'react';
import { ColorType, createChart, CrosshairMode, IChartApi, UTCTimestamp } from 'lightweight-charts';


export type CandleChartData = {
	time: UTCTimestamp,
  open: number,
  high: number,
  low: number,
  close: number,
};

export default function MockupSynthetix() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  const { subgraph } = useSynthetixQueries()

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
  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: 800,
        height: 400,
        layout: {
          background: { type: ColorType.Solid, color: '#00000000' },
        },
        grid: {
          vertLines: {
            color: 'rgba(197, 203, 206, 0.5)',
          },
          horzLines: {
            color: 'rgba(197, 203, 206, 0.5)',
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        rightPriceScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
        timeScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
      });

      const candlestickSeries = chartRef.current.addCandlestickSeries({
        upColor: 'green',
        downColor: 'red',
        borderVisible: false,
        wickVisible: true,
        borderUpColor: 'green',
        borderDownColor: 'red',
        wickUpColor: 'green',
        wickDownColor: 'red',
      });

      if (candles.isSuccess) {
        const newData: CandleChartData[] = candles.data?.map((item) => ({
          open: item.open.toNumber(),
          high: item.high.toNumber(),
          low: item.low.toNumber(),
          close: item.close.toNumber(),
          time: item.timestamp.toNumber() as UTCTimestamp,
        }))

        const sortedCandleData = newData.sort((a, b) => a.time - b.time);

        candlestickSeries.setData(sortedCandleData);

        chartRef.current.applyOptions({
          crosshair: {
            mode: CrosshairMode.Normal,
          },
          timeScale: {
            timeVisible: true,
            secondsVisible: false,
          },
        });
      }
    }
  }, [candles]);


  return (
    <div>
      <strong>Candles:</strong>{' '}
      {candles.isSuccess
        ? candles.data[0].timestamp.toLocaleString()
        : 'Loading...'}
        <div ref={chartContainerRef} />;
    </div>
  )
}

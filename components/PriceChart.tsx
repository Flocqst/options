"use client"

import React, { useEffect, useState, useRef } from 'react';
import { ColorType, createChart, CrosshairMode, IChartApi, UTCTimestamp } from 'lightweight-charts';

import axios from 'axios';

type PriceChartProps = {
	asset: string;
};

export const PriceChart = ({ asset }: PriceChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

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

      const data = [
        { time: '2018-10-19' as unknown as UTCTimestamp, open: 100, high: 110, low: 90, close: 105 },
        { time: '2018-10-22' as unknown as UTCTimestamp, open: 105, high: 115, low: 95, close: 100 },
        { time: '2018-10-23' as unknown as UTCTimestamp, open: 100, high: 108, low: 98, close: 105 },
        // Add more data points here
      ];

      candlestickSeries.setData(data);

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

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, []);

  return <div ref={chartContainerRef} />;
};

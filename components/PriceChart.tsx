import React, { useEffect, useMemo, useRef } from 'react';
import { ColorType, createChart, CrosshairMode } from 'lightweight-charts';
import axios from 'axios';

type PriceChartProps = {
	asset: string;
};

export const PriceChart = ({ asset }: PriceChartProps) => {
  const chartRef = useRef('0');

  useEffect(() => {
    const chart = createChart(chartRef.current, {
			width: 160,
			height: 64,
			rightPriceScale: {
				visible: false,
				scaleMargins: {
					top: 0.5,
					bottom: 0,
				},
			},
			leftPriceScale: {
				visible: false,
				scaleMargins: {
					top: 0.5,
					bottom: 0,
				},
			},
			layout: {
				background: { type: ColorType.Solid, color: '#00000000' },
			},
			timeScale: {
				visible: false,
				barSpacing: 4,
			},
			grid: {
				vertLines: {
					visible: false,
				},
				horzLines: {
					visible: false,
				},
			},
			handleScale: false,
			handleScroll: false,
			crosshair: {
				vertLine: {
					visible: false,
				},
				horzLine: {
					visible: false,
				},
			},
		});
  })
}

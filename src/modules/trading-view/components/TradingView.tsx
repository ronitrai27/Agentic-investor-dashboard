'use client';

import React, { memo } from 'react';

import { cn } from "@/lib/utils";
import useTradingViewWidget from './useTradingViewHook';

interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number | string;
    className?: string;
}

const TradingViewComponent = ({ title, scriptUrl, config, height = 600, className }: TradingViewWidgetProps) => {
    const containerRef = useTradingViewWidget(scriptUrl, config, height);
    const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

    return (
        <div className="w-full">
            {title && <h3 className="font-semibold text-lg text-white mb-3 text-center">{title}</h3>}
            <div className={cn('tradingview-widget-container', className)} ref={containerRef} style={{ height: resolvedHeight }}>
                <div className="tradingview-widget-container__widget" style={{ height: resolvedHeight, width: "100%" }} />
            </div>
        </div>
    );
}

export default memo(TradingViewComponent);
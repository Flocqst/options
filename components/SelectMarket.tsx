"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import React from 'react';

import { atom, useAtom } from 'jotai';

export const selectionAtom = atom("SNX")

export const styles = [
  {
    name: "sETH",
    label: "Ethereum",
  },
  {
    name: "sBTC",
    label: "Bitcoin",
  },
  {
    name: "SNX",
    label: "Synthetix Network",
  },
] as const

export type Style = (typeof styles)[number]


export function SelectMarket() {
  const [selection, setSelection] = useAtom(selectionAtom)

  const handleValueChange = (value: string) => {
    setSelection(value);
  };

  return (
    <Select
      defaultValue={selection}
      onValueChange={handleValueChange}
    >
      <SelectTrigger>
        <span className="text-muted-foreground">Market: </span>
        <SelectValue placeholder="Select style" />
      </SelectTrigger>
      <SelectContent>
        {styles.map((style) => (
          <SelectItem key={style.name} value={style.name} className="text-xs">
            {style.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

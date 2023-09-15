'use client';

import { useAccount, useBalance } from "wagmi";

export default function MockupWagmi() {
  const { address, isConnected } = useAccount();

  const opBalance = useBalance({
    address: address,
    token: "0x4200000000000000000000000000000000000042",
  })

  return (
    <div>
      <label className="text-zinc-400 block mb-2">Wallet Address</label>
      <code className="bg-zinc-700 text-zinc-200 p-4 rounded block mb-4"><pre>{address}</pre></code>
      <label className="text-zinc-400 block mb-2">{opBalance?.data?.formatted}</label>
    </div>
  )
}

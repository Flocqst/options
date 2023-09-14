'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
  goerli,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import {
  createQueryContext,
  SynthetixQueryContextProvider,
} from '@synthetixio/queries'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NetworkId } from '@synthetixio/contracts-interface';

const { chains, publicClient, webSocketPublicClient } =
  configureChains(
    [
      mainnet,
      polygon,
      optimism,
      arbitrum,
      zora,
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
        ? [goerli]
        : []),
    ],
    [publicProvider()]
  );

const projectId = 'YOUR_PROJECT_ID';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const queryClient = new QueryClient()

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        <QueryClientProvider client={queryClient}>
          <SynthetixQueryContextProvider
            value={createQueryContext({
              networkId: 10 as NetworkId, // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), 69 (Optimism Kovan),42 (Goerli) and 69 (Optimism Goerli)
              synthetixjs: null,
            })}
          >
            {mounted && children}
          </SynthetixQueryContextProvider>
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

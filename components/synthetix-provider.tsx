'use client';

import { useEthersProvider } from '@/utils/ethers';
import {
  createQueryContext,
  SynthetixQueryContextProvider,
} from '@synthetixio/queries'
import { useMemo } from 'react';
import { NetworkId, synthetix } from '@synthetixio/contracts-interface';
import MockupSynthetix from './MockupSynthetixQuery';


export function SynthetixQueryProvider({children}: {children: React.ReactNode;}) {
  const provider = useEthersProvider({
    chainId: 1,
  })

  const synthetixjs = useMemo(
		() => synthetix({ provider, networkId: 10 as NetworkId }),
		[provider]
	);

  return (
    <SynthetixQueryContextProvider
          value={createQueryContext({
            provider,
            networkId: 1, // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), 69 (Optimism Kovan),42 (Goerli) and 69 (Optimism Goerli)
            synthetixjs
          })}
        >
      <MockupSynthetix />
      {children}
    </SynthetixQueryContextProvider>
  );
}

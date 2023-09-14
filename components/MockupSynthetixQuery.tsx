"use client"

import useSynthetixQueries from '@synthetixio/queries'

export default function MockupSynthetix() {
  const { subgraph } = useSynthetixQueries()
  const result = subgraph.useGetDebtStates(
    { first: 1, orderBy: 'timestamp', orderDirection: 'desc' },
    { totalIssuedSynths: true },
  )

  return (
    <div>
      <strong>Value of Total Issued Synths:</strong>{' '}
      {result.isSuccess
        ? result.data[0].totalIssuedSynths.toNumber().toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })
        : 'Loading...'}
    </div>
  )
}

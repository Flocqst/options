import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ModeToggle } from '@/components/ModeToggle'
import { MarketCombobox } from '@/components/MarketCombobox';
import MockupWagmi from '@/components/MockupWagmi';
import MockupSynthetix from '@/components/MockupSynthetixQuery';

function Page() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Option Trading Platform
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam non sapien eu odio venenatis molestie.
      </p>
      <ConnectButton />
      <ModeToggle />
    </div>
    <div className="flex gap-4">
      <MarketCombobox />
    </div>
    <MockupWagmi />
    <MockupSynthetix />
  </section>
  );
}

export default Page;

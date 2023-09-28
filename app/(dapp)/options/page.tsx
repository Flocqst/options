import PriceChart from "@/components/price-chart";
import { SelectMarket } from "@/components/select-market";

export default function Page() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex gap-4 w-80">
        <SelectMarket />
      </div>
      <PriceChart />
    </section>
  )
}

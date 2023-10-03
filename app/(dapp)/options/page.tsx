import Box from "@/components/box";
import PriceChart from "@/components/price-chart";
import { SelectMarket } from "@/components/select-market";

export default function Page() {
  return (
    <section className="grid grid-cols-6 grid-rows-6 gap-4 px-4">
      <div className="">
        <SelectMarket />
      </div>
      <div className="col-start-2 col-span-4 row-start-2 row-span-2">
        <PriceChart />
      </div>
    </section>
  )
}

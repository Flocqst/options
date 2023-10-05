import Box from "@/components/box";
import PriceChart from "@/components/price-chart";
import { SelectMarket } from "@/components/select-market";

export default function Page() {
  return (
    <section className="grid grid-cols-5 grid-rows-12 gap-4 px-4">
      <div className="">
        <SelectMarket />
      </div>
      <div className="bg-gray-700 col-start-2 col-span-4 row-start-1 row-span-1">
        TODO : market info
      </div>
      <div className="col-start-2 col-span-4 row-start-2 row-span-4">
        <PriceChart />
      </div>
      <div className="bg-gray-700 col-start-1 row-start-2 row-span-4">
        todo : strike dates
      </div>
      <div className="bg-gray-700	col-start-1 col-span-5 row-start-6 row-span-6">
        TODO : Option trading interface
      </div>
    </section>
  )
}

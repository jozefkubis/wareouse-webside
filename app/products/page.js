import { Suspense } from "react"
import Spinner from "../_components/Spinner"
// import ReservationReminder from "@/app/_components/ReservationReminder"
import { getWarehouseStore } from "../_lib/data-service"
import ProductList from "../_components/ProductList"

export const revalidate = 3600 /* seconds */

export const metadata = {
  title: "Products",
}

export default function Page() {
  const products = getWarehouseStore()
  console.log(products)

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Products
      </h1>
      {/* <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p> */}

      {/* <div className="flex justify-end mb-8">
        <Filter />
      </div> */}

      <Suspense fallback={<Spinner />}>
        <ProductList />
        {/* <ReservationReminder /> */}
      </Suspense>
    </div>
  )
}

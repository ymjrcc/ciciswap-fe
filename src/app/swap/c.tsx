'use client'

import { Button } from "@nextui-org/react"
import { ArrowUpDown } from "lucide-react"

const Page = () => {
  return (
    <div className="pt-16">
      <div className="mx-auto w-[500px] border-2 border-gray-500 rounded-3xl shadow-lg p-4 bg-white">
        <div className="font-bold text-lg">Swap</div>
        <div className="h-32 border-2 border-gray-400 rounded-xl mt-4 relative">
          <ArrowUpDown className="w-9 h-9 bg-white border-2 border-gray-400 rounded text-gray-500 absolute -bottom-7 left-1/2 -translate-x-1/2 cursor-pointer" />
        </div>
        <div className="h-32 border-2 border-gray-400 rounded-xl mt-4"></div>
        <Button className="mt-4 mb-2 w-full border-gray-500 bg-amber-300 text-lg" variant="bordered">Swap</Button>
      </div>
    </div>
  )
}

export default Page
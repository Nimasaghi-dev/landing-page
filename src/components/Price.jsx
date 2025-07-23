import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Price = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider text-gray-900 dark:text-white">
            Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((Option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="relative p-10 border border-white/30 dark:border-white/20 rounded-xl bg-white/40 dark:bg-neutral-900/60 backdrop-blur-xl shadow-lg dark:shadow-black/30 overflow-hidden">
                        {/* Glass gloss gradient overlay */}
                        <div className="pointer-events-none absolute top-0 left-0 w-full h-1/3 rounded-t-xl bg-gradient-to-b from-white/60 to-transparent opacity-70" />
                        <p className="text-4xl mb-8 text-gray-900 dark:text-white">
                            {Option.title}
                            {Option.title === "Pro" && (
                                <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2 ">(Most Popular)</span>
                            )}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2 text-gray-900 dark:text-white">{Option.price}</span>
                            <span className="text-neutral-500 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {Option.features.map((feature, index) => (
                                <li key={index} className="flex mt-8 item-center">
                                    <CheckCircle2 />
                                    <span className="ml-2 text-gray-700 dark:text-neutral-500">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex items-center justify-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl bg-orange-600 hover:bg-orange-700 text-white border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Price
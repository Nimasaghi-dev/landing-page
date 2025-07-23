import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <div className="mt-10 tarcking-wide">
        <h2 className="text-3x sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-gray-900 dark:text-white">
            What people are saying
        </h2>
        <div className="flex flex-wrap justify-center items-stretch">
            {testimonials.map((testimonials, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 flex">
                    <div className="bg-white dark:bg-neutral rounded-md p-6 text-md border border-gray-300 dark:border-neutral-800 text-thin flex flex-col h-full min-h-[320px]">
                        <p className="text-gray-700 dark:text-neutral-300 flex-1">{testimonials.text}</p>
                        <div className="flex mt-8 items-center">
                            <img 
                                className="h-12 w-12 mr-6 rounded-full border border-neutral-300" 
                                src={testimonials.image} 
                                alt={testimonials.user}
                            />
                            <div>
                                <h6 className="text-gray-900 dark:text-white">{testimonials.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600 dark:text-neutral-400">{testimonials.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial
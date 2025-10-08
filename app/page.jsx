export default function Page() {
	return (
		// <section className="m-auto">
		//     <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		//         <div className="mr-auto place-self-center lg:col-span-7">
		//             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The modular lighting control system.</h1>
		//             <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
		//             <a href="/docs" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
		//                 Get started
		//                 <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
		//             </a>
		//             <a href="https://github.com/SpectrumPro/spectrum" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
		//                 See on Github
		//             </a>
		//         </div>
		//         <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
		//             <img src="https://raw.githubusercontent.com/SpectrumPro/Spectrum/master/.github/MainUI.png" alt="mockup" className="rounded"/>
		//         </div>
		//     </div>
		// </section>
		<section className="flex flex-col justify-center items-center min-h-screen px-4">
			<div className="grid max-w-screen-xl w-full mx-auto lg:grid-cols-2 gap-8 items-center">
				{/* Text Section */}
				<div className="text-center lg:text-left">
					<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
						The modular lighting control system.
					</h1>

					<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
						Spectrum. The realtime modular DMX lighting engine. Do away with unintuitive interfaces and allow anyone to create complex lighting
					</p>

					<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<a
							href="/docs"
							className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white gradient-btn rounded-lg hover:bg-blue-700"
						>
							Get started →
						</a>
						<a
							href="https://github.com/SpectrumPro/spectrum"
							className="inline-flex items-center justify-center px-5 py-3 text-base font-medium border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
						>
							See on GitHub
						</a>
					</div>
				</div>

				{/* Image Section */}
				<div className="flex justify-center lg:justify-end">
					<img
						src="https://raw.githubusercontent.com/SpectrumPro/Spectrum/master/.github/MainUI.png"
						alt="Spectrum lighting control interface"
						className="max-w-full h-auto rounded-md shadow-lg "
					/>
				</div>
			</div>
		</section>
	);
}

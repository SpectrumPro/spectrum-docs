export default function Page() {
	return (
		<section className="flex flex-col justify-center items-center min-h-screen px-4">			
			<div className="grid max-w-screen-lg w-full mx-auto lg:grid-cols-2 gap-8 items-center">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
						The modular lighting system.
					</h1>

					<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
						Spectrum. The realtime modular DMX lighting engine. Do
						away with unintuitive interfaces and allow anyone to
						create complex lighting
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

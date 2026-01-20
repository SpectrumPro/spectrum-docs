import SpectrumClientDownload from "@/components/SpectrumClientDownload";
import SpectrumServerDownload from "@/components/SpectrumServerDownload";

export default function DownloadsPage() {
	return (
		<section className="flex flex-col justify-center items-center min-h-screen px-4">
			<SpectrumClientDownload />
			<div className="mb-5" />
			<SpectrumServerDownload />
			<a
				href="/downloads/dev"
				className="mt-6 font-medium text-gray-500 hover:text-gray-700 hover:underline"
			>
				Dev Build Downloads →
			</a>
		</section>
	);
}

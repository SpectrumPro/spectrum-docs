import SpectrumClientDownload from "@/components/SpectrumClientDownload";
import SpectrumServerDownload from "@/components/SpectrumServerDownload";

export default function DownloadsPage() {
	return (
		<section className="flex flex-col justify-center items-center min-h-screen px-4">
			<SpectrumClientDownload prerelease />
			<div className="mb-5" />
			<SpectrumServerDownload prerelease />
			<a
				href="/downloads/"
				className="mt-6 font-medium text-gray-500 hover:text-gray-700 hover:underline"
			>
				← Release Build Downloads
			</a>
		</section>
	);
}

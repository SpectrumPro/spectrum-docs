// app/downloads/page.tsx
import LatestReleaseTable from "@/components/LatestReleaseTable";

export default function DownloadsPage() {
	return (
		<section className="flex flex-col justify-center items-center min-h-screen px-4">
			<LatestReleaseTable
				org="SpectrumPro"
				repo="spectrum"
				title="Spectrum Client Dev"
				prerelease={true}
			/>
			<div className="mb-5" />
			<LatestReleaseTable
				org="SpectrumPro"
				repo="spectrum-server"
				title="Spectrum Server Dev"
				prerelease={true}
			/>
			<a
				href="/downloads/"
				className="mt-6 font-medium text-gray-500 hover:text-gray-700 hover:underline"
			>
				← Release Build Downloads
			</a>
		</section>
	);
}

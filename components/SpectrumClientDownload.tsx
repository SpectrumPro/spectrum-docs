import LatestReleaseTable from "@/components/LatestReleaseTable";

export default function SpectrumClientDownload() {
	return (
		<LatestReleaseTable
			org="SpectrumPro"
			repo="spectrum"
			title="Spectrum Client"
			prerelease={false}
			logoLinkLight="https://raw.githubusercontent.com/SpectrumPro/logos/refs/heads/main/spectrum/spectrum_light.svg"
			logoLinkDark="https://raw.githubusercontent.com/SpectrumPro/logos/refs/heads/main/spectrum/spectrum_dark.svg"
		/>
	);
}

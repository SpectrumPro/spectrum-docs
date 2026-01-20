import LatestReleaseTable from "@/components/LatestReleaseTable";

export default function SpectrumClientDownload() {
	return (
		<LatestReleaseTable
			org="SpectrumPro"
			repo="spectrum-server"
			title="Spectrum Server"
			prerelease={false}
			logoLinkLight="https://raw.githubusercontent.com/SpectrumPro/logos/refs/heads/main/spectrum_server/spectrum_server_light.svg"
			logoLinkDark="https://raw.githubusercontent.com/SpectrumPro/logos/refs/heads/main/spectrum_server/spectrum_server_dark.svg"
		/>
	);
}

import LatestReleaseTable from "@/components/LatestReleaseTable";

type SpectrumServerDownloadProps = {
	prerelease?: boolean;
};

export default function SpectrumServerDownload({
	prerelease = false,
}: SpectrumServerDownloadProps) {
	return (
		<LatestReleaseTable
			org="SpectrumPro"
			repo="spectrum-server"
			title="Spectrum Server"
			prerelease={prerelease}
			logoLinkLight="https://raw.githubusercontent.com/SpectrumPro/logos/refs/heads/main/spectrum_server/spectrum_server_light.svg"
			logoLinkDark="https://raw.githubusercontent.com/SpectrumPro/logos/refs/heads/main/spectrum_server/spectrum_server_dark.svg"
		/>
	);
}

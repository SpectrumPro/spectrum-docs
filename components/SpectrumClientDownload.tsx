import LatestReleaseTable from "@/components/LatestReleaseTable";

type SpectrumClientDownloadProps = {
	prerelease?: boolean;
};

export default function SpectrumClientDownload({
	prerelease = false,
}: SpectrumClientDownloadProps) {
	return (
		<LatestReleaseTable
			org="SpectrumPro"
			repo="spectrum"
			title={"Spectrum Client" + (prerelease ? " Dev" : "")}
			prerelease={prerelease}
			logoLinkLight="https://raw.githubusercontent.com/SpectrumPro/logos/refs/heads/main/spectrum/spectrum_light.svg"
			logoLinkDark="https://raw.githubusercontent.com/SpectrumPro/logos/refs/heads/main/spectrum/spectrum_dark.svg"
		/>
	);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type Asset = {
	id: number;
	name: string;
	browser_download_url: string;
	size: number; // size in bytes
};

type Release = {
	id: number;
	tag_name: string;
	name: string;
	published_at: string;
	assets: Asset[];
};

type LatestReleaseTableProps = {
	org: string;
	repo: string;
	title: string;
};

async function fetchReleases(
	owner: string,
	repo: string,
	prerelease: bool,
): Promise<Release[]> {
	const url = `https://api.github.com/repos/${owner}/${repo}/releases`;

	const res = await fetch(url, {
		cache: "no-store", // Always fetch fresh data
	});

	if (!res.ok) {
		throw new Error(`GitHub API error: ${res.status}`);
	}

	const data = (await res.json()) as any[];
	const stableReleases = data.filter((r) =>
		prerelease ? r.prerelease : !r.prerelease,
	);
	// console.log(prerelease);
	return stableReleases.map((r) => ({
		id: r.id,
		tag_name: r.tag_name,
		name: r.name,
		published_at: r.published_at,
		assets: r.assets.map((a: any) => ({
			id: a.id,
			name: a.name,
			browser_download_url: a.browser_download_url,
			size: a.size,
		})),
	}));
}

// helper to parse filename: {PKG_NAME}.{ARCH}.{OS}.{VERSION}
function parseFilename(filename: string) {
	const parts = filename.split(".");
	if (parts.length < 4) return { os: "-", arch: "-" };
	const arch = parts[1];
	const os = parts[2];
	return { os, arch };
}

export default async function LatestReleaseTable({
	org,
	repo,
	title,
	prerelease,
}: LatestReleaseTableProps) {
	const releases = await fetchReleases(org, repo, prerelease);

	// Filter for release tagged as "latest"
	const latest = releases.sort(
		(a, b) =>
			new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
	)[0];

	if (!latest) return <p>No latest release found.</p>;

	return (
		<div className="relative overflow-x-auto shadow-lg sm:rounded-lg w-full max-w-4xl dark:shadow-neutral-800">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-neutral-900">
					<div className="flex items-center justify-between">
						<div>
							{title}
							<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
								{latest.name || latest.tag_name}{" "}
								{new Date(latest.published_at).toLocaleDateString()}
							</p>
						</div>
						<a
							href={`https://github.com/${org}/${repo}/releases/tag/${latest.tag_name}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:underline dark:text-gray-400 text-sm font-medium flex items-center"
						>
							View on GitHub
							<svg
								className="w-4 h-4 ml-1"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13 7h6m0 0v6m0-6L10 16"
								/>
							</svg>
						</a>
					</div>
				</caption>
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-800 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Operating System
						</th>
						<th scope="col" className="px-6 py-3">
							Architecture
						</th>
						<th scope="col" className="px-6 py-3">
							Size
						</th>
						<th scope="col" className="px-6 py-3">
							<span className="sr-only">Download</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{latest.assets.map((asset) => {
						const { os, arch } = parseFilename(asset.name);
						return (
							<tr
								key={asset.id}
								className="bg-white border-b dark:bg-neutral-900 dark:border-neutral-700 border-gray-200"
							>
								<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
									{os}
								</td>
								<td className="px-6 py-4">{arch}</td>
								<td className="px-6 py-4">
									{Math.round(asset.size / 1024 / 1024)} MB
								</td>
								<td className="px-6 py-4 text-right">
									<a
										href={asset.browser_download_url}
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Download
									</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

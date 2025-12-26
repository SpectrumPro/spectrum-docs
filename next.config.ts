// next.config.mjs
import nextra from "nextra";

const withNextra = nextra({
	// Nextra options here (we’ll add more later)
	// e.g. search: { codeblocks: false }
	// contentDirBasePath: "/docs",
});

export default withNextra({
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
			},
		],
	},
	turbopack: {
		resolveAlias: {
			"next-mdx-import-source-file": "./mdx-components.tsx",
		},
	},
});

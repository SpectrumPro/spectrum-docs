"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type LogoImageProps = {
	title: string;
	logoLinkLight: string;
	logoLinkDark: string;
};

export default function LogoImage({
	title,
	logoLinkLight,
	logoLinkDark,
}: LogoImageProps) {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<img
			src={resolvedTheme === "dark" ? logoLinkDark : logoLinkLight}
			alt={`${title} logo`}
			className="h-8 w-8 object-contain"
		/>
	);
}

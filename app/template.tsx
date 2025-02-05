'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { sendEvent } from "@/app/googleTag";

export default function Template({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	useEffect(() => {
		sendEvent('landing-page', { url: pathname });
	}, [pathname]);

	return children;
}

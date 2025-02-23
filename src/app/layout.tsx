import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Veena Dharshini Web Developer | Designer | Weather | Mobile app",
	description: "View live weather and forcast",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[max-content_1fr_max-content] min-h-screen w-full`}>
				<Toaster />
				{/* <AppHeader /> */}
				{children}
				{/* <AppFooter /> */}
			</body>
		</html>
	);
}

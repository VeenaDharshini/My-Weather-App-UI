import type { CSSProperties, HTMLAttributes } from "react";

import { cn } from "@/app/utils/cn";

import styles from "./spinner.module.css";

type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
	size?: number;
	animDuration?: number;
	thickness?: number;
	accentColor?: string;
	borderColor?: string;
};

export function Spinner({
	className,
	size = 24,
	animDuration = 0.8,
	thickness = 2,
	accentColor = "#432f83",
	borderColor = "#d5d5d5",
	...rest
}: SpinnerProps) {
	return (
		<div
			style={
				{
					"--spiner-accent": accentColor,
					"--spiner-border": borderColor,
					"--spinner-thickness": `${thickness}px`,
					"--spinner-size": `${size}px`,
					"--spin-anim-duration": `${animDuration}s`,
				} as CSSProperties
			}
			className={cn(styles.spinner, className)}
			{...rest}
		/>
	);
}

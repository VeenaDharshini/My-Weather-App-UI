import * as React from "react";

import { cn } from "../utils/cn";

const Input = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"flex h-10 w-full focus:bg-white active:bg-white rounded-md bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#7740ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:text-black active:text-black",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});

Input.displayName = "Input";
export { Input };

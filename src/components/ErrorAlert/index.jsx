import { Warning, XCircle } from "phosphor-react";

export function ErrorAlert({ setShowErrorAlert, message }) {
	return (
		<div className="p-4 bg-[#f8d7da] border-1 border-[#f5c6cb] rounded flex items-center justify-between">
			<span className="text-[#721c24] flex items-center">
				<Warning size={24} className="mr-4" />
				{ message}
			</span>
			<XCircle
				size={24}
				className="text-[#721c24] cursor-pointer"
				onClick={() => setShowErrorAlert({ show: false, message: ""})}
			/>
		</div>
	);
}

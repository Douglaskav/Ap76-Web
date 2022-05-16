import { Bed, Bathtub, Car, Ruler } from "phosphor-react";

export function GeralInfoAboutProperty({
	bedrooms,
	bathrooms,
	parkingSpot,
	size,
}) {
	return (
		<div className="flex items-center mt-4">
			<span className="flex items-center text-xs text-primary-700 font-medium mr-5">
				<Bed size={16} weight="bold" className="mr-1" />
				{bedrooms} Quartos
			</span>
			<span className="flex items-center text-xs text-primary-700 font-medium mr-5">
				<Bathtub size={16} weight="bold" className="mr-1" />
				{bathrooms} Banheiros
			</span>
			<span className="flex items-center text-xs text-primary-700 font-medium mr-5">
				<Car size={16} weight="bold" className="mr-1" />
				{parkingSpot} Vagas
			</span>
			<span className="flex items-center text-xs text-primary-700 font-medium mr-5">
				<Ruler size={16} weight="bold" className="mr-1" /> {size} m²
			</span>
		</div>
	);
}

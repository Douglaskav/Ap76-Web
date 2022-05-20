import { Bed, Bathtub, Car, Ruler } from "phosphor-react";

export function GeralInfoAboutProperty({
	bedrooms,
	bathrooms,
	parkingSpot,
	size,
	compressed,
}) {
	let roomsNames;

	if (compressed) {
		roomsNames = {
			bedrooms,
			bathrooms,
			parkingSpot,
			size: `${size} m²`,
		};
	} else {
		roomsNames = {
			bedrooms: `${bedrooms} Quartos`,
			bathrooms: `${bathrooms} Banheiros`,
			parkingSpot: `${parkingSpot} Vagas`,
			size: `${size} m²`,
		};
	}

	return (
		<div className="flex items-center mt-4">
			<span className="flex items-center text-xs text-primary-700 font-medium mr-5">
				<Bed size={16} weight="bold" className="mr-1" />
				{roomsNames.bedrooms}
			</span>
			<span className="flex items-center text-xs text-primary-700 font-medium mr-5">
				<Bathtub size={16} weight="bold" className="mr-1" />
				{roomsNames.bathrooms}
			</span>
			<span className="flex items-center text-xs text-primary-700 font-medium mr-5">
				<Car size={16} weight="bold" className="mr-1" />
				{roomsNames.parkingSpot}
			</span>
			<span className="flex items-center text-xs text-primary-700 font-medium mr-5">
				<Ruler size={16} weight="bold" className="mr-1" /> {roomsNames.size}
			</span>
		</div>
	);
}

export type THidingSpot = {
	id: string;
	attributeIds: Array<string>;
	textQuery: string;
	hotspot: {
		position: {
			x: number;
			y: number;
			z: number;
		};
	};
};

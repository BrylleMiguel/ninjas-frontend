import { Image } from '@mantine/core';
import { useQuery } from 'react-query';
import { getCharacters } from '../../api';

export default function CharacterList() {
	const { data: characters } = useQuery({
		queryKey: ['characters'],
		queryFn: getCharacters,
	});

	return (
		<div>
			{characters?.map((character: any) => {
				return (
					<Image
						key={character.id}
						width={50}
						src={`../src/assets/${character.element}-ninja.png`}
						alt={character.name}
					/>
				);
			})}
		</div>
	);
}

import { Container } from '@mantine/core';
import { useQuery } from 'react-query';
import { getNinjas } from '../../api';

export default function NinjaList() {
	const { data: ninjas } = useQuery({
		queryKey: ['ninjas'],
		queryFn: getNinjas,
	});

	return (
		<Container>
			{ninjas?.map((ninja: any) => {
				return (
					<main key={ninja.id}>
						<h1>{ninja.name}</h1>
						<p>{ninja.primaryWeapon.name}</p>
					</main>
				);
			})}
		</Container>
	);
}

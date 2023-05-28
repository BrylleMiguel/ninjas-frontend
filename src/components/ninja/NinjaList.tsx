import { Box, Text, Title } from '@mantine/core';
import { useQuery } from 'react-query';
import { getNinjas } from '../../api';

export default function NinjaList() {
	const { data: ninjas } = useQuery({
		queryKey: ['ninjas'],
		queryFn: getNinjas,
	});

	return (
		<Box mt={10}>
			<Title>Ninjas</Title>
			{ninjas?.map((ninja: any) => {
				return (
					<main key={ninja?.id}>
						<Text>{ninja?.name}</Text>
						<Text>{ninja?.primaryWeapon?.name}</Text>
					</main>
				);
			})}
		</Box>
	);
}

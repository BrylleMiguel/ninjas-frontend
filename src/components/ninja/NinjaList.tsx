import { Divider, Text, Title } from '@mantine/core';
import { GiNinjaStar } from 'react-icons/gi';
import { useQuery } from 'react-query';
import { getNinjas } from '../../api';

export default function NinjaList() {
	const { data: ninjas } = useQuery({
		queryKey: ['ninjas'],
		queryFn: getNinjas,
	});

	return (
		<>
			<Title>{<GiNinjaStar />} Ninjas</Title>
			<Divider />
			{ninjas?.map((ninja: any) => {
				return (
					<main key={ninja?.id}>
						<Text>{ninja?.name}</Text>
						<Text>{ninja?.primaryWeapon?.name}</Text>
					</main>
				);
			})}
		</>
	);
}

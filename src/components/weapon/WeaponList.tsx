import { Box, List, Table, Text } from '@mantine/core';
import { useQuery } from 'react-query';
import {
	getAccessoryList,
	getPrimaryWeaponList,
	getSecondaryWeaponList,
} from '../../api';

export default function WeaponList() {
	const { data: primaryWeapons } = useQuery({
		queryKey: ['primary-weapons'],
		queryFn: getPrimaryWeaponList,
	});

	const { data: secondaryWeapons } = useQuery({
		queryKey: ['secondary-weapons'],
		queryFn: getSecondaryWeaponList,
	});

	const { data: accessories } = useQuery({
		queryKey: ['accessories'],
		queryFn: getAccessoryList,
	});

	console.log({ secondaryWeapons, accessories });
	return (
		<Box mt={10}>
			<Text fz='xl'>Primary Weapons</Text>
			<Table striped highlightOnHover withBorder withColumnBorders my={10}>
				<thead>
					<tr>
						<th>id</th>
						<th>weapon</th>
						<th>damage</th>
						<th>damageType</th>
						<th>weaponType</th>
						<th>attack speed</th>
					</tr>
				</thead>
				<tbody>
					{primaryWeapons?.map((weapon: any) => {
						const { id, attackSpeed, damage, damageType, name, weaponType } =
							weapon;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{name}</td>
								<td>{damage}</td>
								<td>{damageType}</td>
								<td>{weaponType}</td>
								<td>{attackSpeed}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>

			<Text fz='xl'>Secondary Weapons</Text>
			<List type='ordered'>
				{secondaryWeapons?.map((weapon: any) => {
					return <List.Item key={weapon.id}>{weapon.name}</List.Item>;
				})}
			</List>

			<Text fz='xl'>Accessories</Text>
			<List type='ordered'>
				{accessories?.map((accessory: any) => {
					return <List.Item key={accessory.id}>{accessory.name}</List.Item>;
				})}
			</List>
		</Box>
	);
}

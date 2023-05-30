import { Box, Table, Text } from '@mantine/core';
import { useQuery } from 'react-query';
import { getWeaponList } from '../../api';

export default function WeaponList() {
	const { data: weapons } = useQuery({
		queryKey: ['weapons'],
		queryFn: getWeaponList,
	});
	return (
		<Box mt={10}>
			<Text fz='xl'>Primary Weapons</Text>
			<Table striped highlightOnHover withBorder withColumnBorders mt={10}>
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
					{weapons?.map((weapon: any) => {
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
		</Box>
	);
}

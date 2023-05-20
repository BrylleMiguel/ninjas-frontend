import React from 'react';
import { useQuery } from 'react-query';

function App() {
	const [ninjaName, setNinjaName] = React.useState('');
	const [selectedWeapon, setSelectedWeapon] = React.useState('');
	const [ninjaDetails, setNinjaDetails] = React.useState({});

	const { data: ninjas } = useQuery({
		queryKey: ['ninjas'],
		queryFn: getNinjas,
	});

	const { data: weaponList } = useQuery({
		queryKey: ['weapon-list'],
		queryFn: getWeaponList,
	});

	const {
		data: specific_weapon,
		isLoading,
		isFetched,
	} = useQuery({
		queryKey: ['weapon-list', selectedWeapon || ''],
		queryFn: () => getSelectedWeapon(selectedWeapon),
		enabled: !!selectedWeapon,
	});

	console.log(specific_weapon);

	return (
		<React.Fragment>
			<select
				name='weapons'
				id='weapons'
				onChange={(e: any) => {
					setSelectedWeapon(e.target.value);
				}}
			>
				<option value=''>primary weapon</option>;
				{weaponList?.map((weapon: any) => {
					return (
						<option value={weapon.name} key={weapon.id}>
							{weapon.name}
						</option>
					);
				})}
			</select>
		</React.Fragment>
	);
}

async function createNinja(data: any) {
	return await fetch('http://localhost:3000/ninja/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error:', error);
		});
}

async function getNinjas() {
	const response = await fetch('http://localhost:3000/ninja/all');
	return response.json();
}

async function getWeaponList() {
	const response = await fetch('http://localhost:3000/weapons');
	return response.json();
}

async function getSelectedWeapon(name: string) {
	return (
		await fetch(`http://localhost:3000/weapons/selected-weapon/?name=${name}`)
	).json();
}

export default App;

import React from 'react';
import { useQuery } from 'react-query';
import {
	PRIMARY_WEAPON,
	PRIMARY_WEAPONS,
	SECONDARY_WEAPON,
	SECONDARY_WEAPONS,
} from './weapons';

function App() {
	const { data, isLoading } = useQuery({
		queryKey: ['ninjas'],
		queryFn: fetchNinjas,
	});

	const { data: axe } = useQuery({
		queryKey: ['axe'],
		queryFn: fetchAxeWeapon,
	});

	console.log({ axe });

	// states
	const [ninjaName, setNinjaName] = React.useState('');
	const [primaryWeapon, setPrimaryWeapon] = React.useState<PRIMARY_WEAPON>({
		name: 'asd',
		damage: 0,
		// attackSpeed: AttackSpeed.SLOW,
	});
	const [secondaryWeapon, setSecondaryWeapon] =
		React.useState<SECONDARY_WEAPON>({
			name: 'asd',
		});

	//

	const primaryWeaponDetails = (primaryWeapon: string) => {
		switch (primaryWeapon) {
			case 'axe':
		}
	};

	const newNinja = {
		name: ninjaName,
		weapons: [primaryWeapon, secondaryWeapon],
	};

	const submitHandler = (e: any) => {
		e.preventDefault();
		console.log(newNinja);

		createNinja(newNinja);
	};

	return (
		<>
			<form action='' onSubmit={submitHandler}>
				<p>
					<label htmlFor='name'>ninja: </label>
				</p>
				<input
					type='text'
					name='name'
					id='name'
					onChange={(e) => setNinjaName(e.target.value)}
				/>
				<p>Primary Weapon:</p>
				<select
					name='name'
					onChange={(e) =>
						setPrimaryWeapon({
							...primaryWeapon,
							[e.target.name]: e.target.value,
						})
					}
					value={primaryWeapon.name}
				>
					{PRIMARY_WEAPONS.map((weapon) => {
						return (
							<option key={weapon.name} value={weapon.name}>
								{weapon.name}
							</option>
						);
					})}
				</select>
				<p>Secondary Weapon:</p>
				<select
					name='name'
					onChange={(e) =>
						setSecondaryWeapon({
							...secondaryWeapon,
							[e.target.name]: e.target.value,
						})
					}
					value={secondaryWeapon.name}
				>
					{SECONDARY_WEAPONS.map((weapon) => {
						return (
							<option key={weapon.name} value={weapon.name}>
								{weapon.name}
							</option>
						);
					})}
				</select>
				<br />
				<br />
				<input type='submit' value='create ninja' />
			</form>
			{/* _______________________________________ */}
			<h3>Created Ninjas:</h3>
			{isLoading ? (
				<p>loading...</p>
			) : (
				data?.map((ninja: any) => {
					return (
						<main key={ninja.id}>
							<p>{ninja.name}</p>
						</main>
					);
				})
			)}
		</>
	);

	// APIs

	async function fetchAxeWeapon() {
		const response = await fetch('http://localhost:3000/ninja/axe');
		const data = response.json();

		return data;
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
			.then((responseData) => {
				// Process the response data
				console.log(responseData);
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error);
			});
	}

	async function fetchNinjas() {
		const response = await fetch('http://localhost:3000/ninja/all');
		const data = response.json();

		return data;
	}
}

export default App;

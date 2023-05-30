// ___________NINJAS___________

import axios from 'axios';

export async function createNinja({
	name,
	primaryWeapon,
}: {
	name: any;
	primaryWeapon: any;
}) {
	return await axios
		.post('http://localhost:3000/ninja/create', {
			name,
			primaryWeapon,
		})
		.then((response) => response.data)
		.catch((error) => {
			console.error('Error:', error);
		});
}

export async function getNinjas() {
	const response = await fetch('http://localhost:3000/ninja/all');
	return response.json();
}
// ________CHARACTERS_________

export async function getCharacters() {
	return (await fetch('http://localhost:3000/character/all')).json();
}

// ________WEAPONS____________

export async function getPrimaryWeaponList() {
	const response = await fetch('http://localhost:3000/weapons');
	return response.json();
}

export async function getWeapon(name: string | null) {
	try {
		const response = await fetch(
			`http://localhost:3000/weapons/selected-weapon/?name=${name}`
		);
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getSecondaryWeaponList() {
	return (await fetch('http://localhost:3000/secondary-weapon/all')).json();
}

export async function getAccessoryList() {
	return (await fetch('http://localhost:3000/accessory/all')).json();
}

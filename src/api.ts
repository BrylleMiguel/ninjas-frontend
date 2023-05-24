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

// ________WEAPONS____________

export async function getWeaponList() {
	const response = await fetch('http://localhost:3000/weapons');
	return response.json();
}

export async function getWeapon(name: string | null) {
	return await fetch(
		`http://localhost:3000/weapons/selected-weapon/?name=${name}`
	).then((data) => data.json());
}

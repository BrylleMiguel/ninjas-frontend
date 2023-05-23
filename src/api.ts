// ___________NINJAS___________

import axios from 'axios';

export async function createNinja({
	name,
	weapon,
}: {
	name: any;
	weapon: any;
}) {
	return await axios
		.post('http://localhost:3000/ninja/create', {
			name,
			weapon,
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
	if (name)
		await fetch(`http://localhost:3000/weapons/selected-weapon/?name=${name}`);

	return;
}

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createNinja, getWeapon, getWeaponList } from '../../api';

export default function CreateNinja() {
	const queryClient = useQueryClient();

	const [ninjaName, setNinjaName] = useState('');
	const [ninjaWeapon, setNinjaWeapon] = useState('');

	const { data: mutateNinja, mutate } = useMutation({
		mutationFn: createNinja,
		onSuccess: (data) => {
			queryClient.setQueryData(['ninjas', data.id], data);
			queryClient.invalidateQueries(['ninjas'], { exact: true });
		},
	});

	console.log(mutateNinja);

	const { data: weaponList } = useQuery({
		queryKey: ['weapon-list'],
		queryFn: getWeaponList,
	});

	const { data: selectedWeapon } = useQuery({
		queryKey: ['weapon-list', ninjaWeapon],
		queryFn: () => getWeapon(ninjaWeapon),
		enabled: !!ninjaWeapon,
	});

	console.log({ ninjaWeapon, selectedWeapon });

	return (
		<div>
			<form action='' onSubmit={onSubmitHandler}>
				<input
					type='text'
					name='ninja-name'
					id='ninja-name'
					value={ninjaName}
					onChange={(e) => setNinjaName(e.target.value)}
				/>
				<br />

				<select
					name='name'
					id='name'
					onChange={(e) => {
						setNinjaWeapon(e.target.value);
					}}
				>
					{weaponList?.map((weapon: any) => {
						return (
							<option key={weapon.id} value={weapon.name}>
								{weapon.name}
							</option>
						);
					})}
				</select>
				<input type='submit' value='create ninja' name='ninjaWeapon' />
			</form>
		</div>
	);

	function onSubmitHandler(e: any) {
		e.preventDefault();
		mutate({
			name: ninjaName,
			primaryWeapon: { ...selectedWeapon, id: nanoid() },
		});
	}
}

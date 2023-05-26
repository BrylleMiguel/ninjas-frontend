import { Select } from '@mantine/core';
import { GiNinjaStar } from 'react-icons/gi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createNinja, getWeapon } from '../../api';

export default function CreateNinja(props: any) {
	const { ninjaName, ninjaWeapon, setNinjaName, setNinjaWeapon } = props;
	const queryClient = useQueryClient();

	const { data: ninjaMutation, mutate } = useMutation({
		mutationFn: createNinja,
		onSuccess: (data) => {
			queryClient.setQueryData(['ninjas', data.id], data);
			queryClient.invalidateQueries(['ninjas'], { exact: true });
		},
		onError: (err) => {
			console.log(err);
		},
	});

	const { data: selectedWeapon } = useQuery({
		queryKey: ['selected-weapon', ninjaWeapon],
		queryFn: () => getWeapon(ninjaWeapon),
		enabled: !!ninjaWeapon,
	});

	// weapon list

	const weaponList = [
		{
			value: 'long-sword',
			label: 'Long Sword',
		},
		{
			value: 'axe',
			label: 'Axe',
		},
	];

	console.log({ ninjaWeapon, selectedWeapon });

	return (
		<div>
			<h1>
				<GiNinjaStar />
			</h1>
			<form action='' onSubmit={onSubmitHandler}>
				<input
					type='text'
					name='ninja-name'
					id='ninja-name'
					value={ninjaName}
					onChange={(e) => setNinjaName(e.target.value)}
				/>
				<br />

				<Select
					data={weaponList}
					value={ninjaWeapon}
					onChange={(value) => setNinjaWeapon(value)}
				/>
				<input type='submit' value='create ninja' name='ninjaWeapon' />
			</form>
		</div>
	);

	function onSubmitHandler(e: any) {
		e.preventDefault();
		mutate({
			name: ninjaName,
			primaryWeapon: selectedWeapon,
		});
	}
}

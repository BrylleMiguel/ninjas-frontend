import {
	Box,
	Button,
	Container,
	Flex,
	Paper,
	Select,
	Text,
	TextInput,
} from '@mantine/core';
import { nanoid } from 'nanoid';
import { GiNinjaHead, GiSwitchWeapon } from 'react-icons/gi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createNinja, getWeapon } from '../../api';

export default function CreateNinja(props: any) {
	const { ninjaName, ninjaWeapon, setNinjaName, setNinjaWeapon } = props;
	const queryClient = useQueryClient();

	const { data: ninjaMutation, mutate } = useMutation({
		mutationFn: createNinja,
		onSuccess: (data) => {
			queryClient.setQueryData(['ninjas', data?.id], data);
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
		<Container>
			<div>
				<form action='' onSubmit={onSubmitHandler}>
					<TextInput
						type='text'
						name='ninja-name'
						id='ninja-name'
						label='Your turtle name'
						icon={<GiNinjaHead />}
						placeholder='e.g. Smol Turtle'
						value={ninjaName}
						onChange={(e) => setNinjaName(e.target.value)}
						autoComplete='off'
					/>
					<br />

					<Select
						data={weaponList}
						placeholder='Primary Weapon'
						icon={<GiSwitchWeapon />}
						value={ninjaWeapon}
						onChange={(value) => setNinjaWeapon(value)}
					/>

					<Flex justify='flex-end'>
						<Button.Group
							sx={{ position: 'fixed', bottom: 20, borderRadius: 5 }}
							bg='gray'
						>
							<Button radius={0} variant='subtle'>
								View Weapons
							</Button>
							<Button
								radius={0}
								variant='subtle'
								onSubmit={onSubmitHandler}
								type='submit'
							>
								Create Ninja
							</Button>
						</Button.Group>
					</Flex>
				</form>
			</div>
			{ninjaWeapon && (
				<Box pt={20}>
					<Text fs='italic' fz='sm'>
						Weapon stats:
					</Text>
					<Paper>
						<Text fz='sm'>chosen weapon: {selectedWeapon?.id}</Text>
						<Text fz='sm'>
							chosen weapon:{' '}
							{selectedWeapon?.name === 'long-sword' ? 'Long Sword' : 'Axe'}
						</Text>
						<Text fz='sm'>weapon damage: {selectedWeapon?.damage}</Text>
						<Text fz='sm'>
							weapon damage type: {selectedWeapon?.damageType}
						</Text>
						<Text fz='sm'>weapon speed: {selectedWeapon?.attackSpeed}</Text>
						<Text fz='sm'>weapon type: {selectedWeapon?.weaponType}</Text>
					</Paper>
				</Box>
			)}
		</Container>
	);

	function onSubmitHandler(e: any) {
		e.preventDefault();
		mutate({
			name: ninjaName,
			primaryWeapon: { ...selectedWeapon, id: nanoid() },
		});
	}
}

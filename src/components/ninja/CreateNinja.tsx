import {
	Box,
	Button,
	Drawer,
	HoverCard,
	Paper,
	Select,
	Text,
	TextInput,
	createStyles,
	rem,
} from '@mantine/core';
import { nanoid } from 'nanoid';
import { GiNinjaHead, GiSwitchWeapon } from 'react-icons/gi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createNinja, getWeapon } from '../../api';
import { weaponList } from '../../weapon-list';

export default function CreateNinja(props: any) {
	const queryClient = useQueryClient();
	const {
		ninjaName,
		ninjaWeapon,
		setNinjaName,
		setNinjaWeapon,
		close,
		opened,
	} = props;

	const useStyles = createStyles((theme) => ({
		title: {
			fontSize: rem(30),
		},
	}));

	const { classes } = useStyles();

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

	console.log({ ninjaWeapon, selectedWeapon });

	return (
		<Box>
			<Drawer
				classNames={{
					title: classes.title,
				}}
				opened={opened}
				onClose={close}
				closeOnClickOutside={false}
				title='Create Ninja'
			>
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
						<Paper pt={20} />

						<HoverCard shadow='lg' position='right' width={500}>
							<HoverCard.Target>
								<Button radius={0} variant='subtle'>
									Weapons
								</Button>
							</HoverCard.Target>
							<HoverCard.Dropdown p={10}>
								<div>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Quibusdam consectetur ad velit possimus mollitia totam quas
									laudantium expedita eum voluptate earum iste quae deleniti
									nisi, error quos corrupti, libero molestiae.
								</div>
							</HoverCard.Dropdown>
						</HoverCard>
						<Select
							data={weaponList}
							placeholder='Primary Weapon'
							icon={<GiSwitchWeapon />}
							value={ninjaWeapon}
							onChange={(value) => setNinjaWeapon(value)}
						/>

						<Button
							radius={0}
							variant='outline'
							onSubmit={onSubmitHandler}
							type='submit'
							sx={{ position: 'fixed', bottom: 30 }}
						>
							Create Ninja
						</Button>
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
			</Drawer>
		</Box>
	);

	function onSubmitHandler(e: any) {
		e.preventDefault();
		mutate({
			name: ninjaName,
			primaryWeapon: { ...selectedWeapon, id: nanoid() },
		});

		close();

		setNinjaName('');
		setNinjaWeapon('');
	}
}

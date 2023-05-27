import { Button, Container, Drawer, createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import { GiNinjaHead } from 'react-icons/gi';
import CreateNinja from './components/ninja/CreateNinja';
import NinjaList from './components/ninja/NinjaList';

const useStyles = createStyles((theme) => ({
	title: {
		fontSize: rem(30),
	},
}));

function App() {
	const { classes } = useStyles();
	const [opened, { open, close }] = useDisclosure(false);

	const [ninjaName, setNinjaName] = useState('');
	const [ninjaWeapon, setNinjaWeapon] = useState<string | null>(null);

	return (
		<React.Fragment>
			<Container mt={10}>
				<Drawer
					classNames={{
						title: classes.title,
					}}
					opened={opened}
					onClose={close}
					closeOnClickOutside={false}
					title='Create Ninja'
				>
					<CreateNinja
						ninjaName={ninjaName}
						ninjaWeapon={ninjaWeapon}
						setNinjaName={setNinjaName}
						setNinjaWeapon={setNinjaWeapon}
						close={close}
					/>
				</Drawer>
				<Button
					radius={0}
					onClick={open}
					variant='outline'
					leftIcon={<GiNinjaHead />}
				>
					Create Ninja
				</Button>
				<NinjaList />
			</Container>
		</React.Fragment>
	);
}

export default App;

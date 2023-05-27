import { Button, Container, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import { GiNinjaHead } from 'react-icons/gi';
import CreateNinja from './components/ninja/CreateNinja';
import NinjaList from './components/ninja/NinjaList';

function App() {
	const [opened, { open, close }] = useDisclosure(false);

	const [ninjaName, setNinjaName] = useState('');
	const [ninjaWeapon, setNinjaWeapon] = useState<string | null>(null);

	return (
		<React.Fragment>
			<Container mt={10}>
				<Drawer
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

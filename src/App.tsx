import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import CreateNinja from './components/ninja/CreateNinja';
import NinjaList from './components/ninja/NinjaList';

function App() {
	const [opened, { open, close }] = useDisclosure(false);

	const [ninjaName, setNinjaName] = useState('');
	const [ninjaWeapon, setNinjaWeapon] = useState<string | null>(null);

	return (
		<React.Fragment>
			<Drawer
				opened={opened}
				onClose={() => {
					return close;
				}}
				title='Create Ninja'
			>
				<CreateNinja
					ninjaName={ninjaName}
					ninjaWeapon={ninjaWeapon}
					setNinjaName={setNinjaName}
					setNinjaWeapon={setNinjaWeapon}
				/>
			</Drawer>
			<Button onClick={open}>Create Ninja</Button>
			<NinjaList />
		</React.Fragment>
	);
}

export default App;

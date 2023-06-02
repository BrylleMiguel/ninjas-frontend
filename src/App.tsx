import {
	Button,
	Container,
	Divider,
	Flex,
	NavLink,
	ScrollArea,
	Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import {
	GiCube,
	GiGrab,
	GiNinjaHead,
	GiNinjaStar,
	GiPlantsAndAnimals,
} from 'react-icons/gi';
import { SiElement } from 'react-icons/si';
import { Link, Route, Routes } from 'react-router-dom';
import CharacterList from './components/character/CharacterList';
import CreateNinja from './components/ninja/CreateNinja';
import NinjaList from './components/ninja/NinjaList';
import WeaponList from './components/weapon/WeaponList';

function App() {
	const [ninjaName, setNinjaName] = useState(undefined);
	const [ninjaWeapon, setNinjaWeapon] = useState<string | null>(null);

	const [opened, { open, close }] = useDisclosure(false);

	const routesList = [
		{ icon: GiCube, label: 'story', description: 'story line' },
		{
			icon: GiNinjaStar,
			label: 'ninjas',
			description: 'Created ninjas',
		},
		{ icon: SiElement, label: 'characters', description: 'Character list' },
		{ icon: GiGrab, label: 'weapons', description: 'Weapon list' },
		{
			icon: GiPlantsAndAnimals,
			label: 'companion',
			description: 'Pets on your side',
		},
		{ icon: GiCube, label: 'create-ninja', description: 'Create a ninja' },
	];

	const [activeRoute, setActiveRoute] = useState(0);

	const routes = routesList.map((item, index) => (
		<Link
			key={item.label}
			to={item.label === 'story' ? '/' : `/${item.label}`}
			style={{ all: 'unset' }}
		>
			<NavLink
				key={item.label}
				active={index === activeRoute}
				icon={<item.icon size='20' />}
				label={item.label}
				description={item.description}
				onClick={() => setActiveRoute(index)}
				variant='subtle'
				mr={20}
			/>
		</Link>
	));

	return (
		<React.Fragment>
			<Container mt={30}>
				<Flex justify='space-between'> {routes}</Flex>
				<Divider />
				<Routes>
					<Route
						path='/'
						element={
							<ScrollArea h={600}>
								<Text>
									In a quaint village nestled amidst lush valleys and shimmering
									rivers, life flowed harmoniously under the watchful eye of the
									elemental ninjas. The villagers went about their daily
									routines, unaware of the hidden protectors who safeguarded
									their peace. The village thrived with a tight-knit community,
									known for their kindness and resilience. It was here that
									Oceanus, Ashes, Eartha, Nimbus, and Styx resided, their true
									identities concealed within the fabric of everyday life. They
									lived as ordinary villagers, contributing to the community and
									sharing their elemental wisdom discreetly. One fateful day, a
									dark cloud cast its shadow over the village. A band of
									nefarious bandits, known for their merciless raids, targeted
									the village with an intention to sow chaos and reap its
									treasures. The villagers, defenseless against the bandits'
									brutality, turned to their unseen protectors for aid. As dusk
									settled, the elemental ninjas sprang into action. With stealth
									and precision, Oceanus emerged from the river, manipulating
									water to flood the bandits' path and quench their fiery
									ambitions. Ashes, concealed in the shadows, unleashed infernos
									to create a ring of fire, trapping the intruders within their
									own desperation. Eartha, with unwavering strength, commanded
									the very ground beneath their feet, ensnaring the bandits in a
									maze of roots and vines. Nimbus, swift as a gust of wind,
									whisked away their weapons, leaving them disarmed and
									vulnerable. Styx, a phantom in the night, wove through the
									darkness, his movements and attacks invisible, striking fear
									into the hearts of the invaders. Together, the ninjas fought
									in seamless harmony, their elemental powers intertwining and
									overwhelming the bandits. The villagers, witnessing their
									extraordinary defense, were awestruck, realizing the true
									nature of their silent guardians. With their village saved and
									the bandits defeated, the elemental ninjas revealed themselves
									to the villagers. They shared their origins, the sacred duty
									bestowed upon them to protect the balance of the elements and
									ensure the village's safety. The villagers embraced their
									protectors with gratitude, realizing that the ninjas had
									always been a part of their community, guiding them from the
									shadows. From that day forward, the village honored the
									elemental ninjas, building a sanctuary where they could openly
									train and cultivate their skills. The villagers celebrated
									their hidden heroes, recognizing the invaluable presence that
									had always safeguarded their way of life. The elemental ninjas
									continued to protect and serve the village, their connection
									to the elements strengthening as they embraced their true
									identities. Together, they brought forth an era of peace and
									prosperity, weaving the harmonious balance of the elements
									into the very fabric of the village's existence. And thus, the
									village thrived, forever grateful for the unseen protectors
									who danced with the forces of nature to preserve their
									cherished way of life.
									<br />
									<br />
									In the mystical realm of ancient Japan, a legendary group of
									ninjas emerged, each embodying one of the five elemental
									forces: Oceanus, Ashes, Eartha, Nimbus, and Styx. These
									exceptional warriors were chosen by destiny to safeguard the
									balance between the elements and protect their land from
									darkness. Oceanus, the ninja of water, possessed unparalleled
									agility and grace. With flowing movements, he could manipulate
									water, using it as a shield or a weapon. His calm demeanor and
									deep understanding of the ebb and flow of life made him a
									pillar of wisdom among his companions. Ashes, the ninja of
									fire, was a master of destruction and rebirth. Harnessing the
									fiery energy within him, he could conjure flames that could
									engulf his enemies or forge paths through obstacles. Yet,
									Ashes remained disciplined, seeking not to cause harm but to
									purify and create new beginnings. Eartha, the ninja of earth,
									epitomized strength and endurance. Her connection to the land
									granted her the power to manipulate the very earth beneath her
									feet. She could create impenetrable barriers or summon the
									earth's energy to heal wounds and restore balance. Nimbus, the
									ninja of air, possessed unparalleled speed and agility. Swift
									as the wind, he moved with grace and dexterity, his footsteps
									whispering through the air. With his ability to control the
									currents and breezes, Nimbus could render himself invisible or
									create powerful gusts that could disarm his opponents. Styx,
									the enigmatic ninja of void, embodied the unseen and
									mysterious. His powers transcended the physical realm,
									allowing him to manipulate shadows, conceal his presence, and
									traverse dimensions. Styx's mastery over the void made him an
									invaluable asset in gathering intelligence and outmaneuvering
									their enemies. United by their purpose, these five elemental
									ninjas were a formidable force, patrolling the land and
									defending the innocent. They trained tirelessly, honing their
									skills and deepening their bond as a team. Their missions took
									them to treacherous landscapes, where they faced dark forces
									that sought to disrupt the delicate harmony of the elements.
									Together, Oceanus, Ashes, Eartha, Nimbus, and Styx braved
									perilous battles, their synchronized movements blending the
									power of their respective elements. Each ninja brought forth
									their unique abilities, complementing one another and
									amplifying their collective strength. With unwavering
									determination and the guidance of their elemental spirits, the
									ninja warriors safeguarded the land of Japan, ensuring that
									the balance of the five elements remained intact. Their legacy
									lived on, inspiring future generations of ninjas to embrace
									the elemental forces and protect the world from darkness for
									centuries to come.
								</Text>
							</ScrollArea>
						}
					/>
					<Route
						path='create-ninja'
						element={
							<>
								<CreateNinja
									ninjaName={ninjaName}
									ninjaWeapon={ninjaWeapon}
									setNinjaName={setNinjaName}
									setNinjaWeapon={setNinjaWeapon}
									opened={opened}
									close={close}
								/>
								{/* a button to open create ninja component [drawer] */}
								<Button
									radius={0}
									onClick={open}
									variant='outline'
									leftIcon={<GiNinjaHead />}
								>
									Create Ninja
								</Button>
							</>
						}
					/>
					<Route path='characters' element={<CharacterList />} />
					<Route path='ninjas' element={<NinjaList />} />
					<Route path='weapons' element={<WeaponList />} />
				</Routes>
			</Container>
		</React.Fragment>
	);
}

export default App;

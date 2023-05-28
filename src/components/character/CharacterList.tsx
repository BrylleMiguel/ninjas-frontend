import { Box, Flex, Image, Tabs, Text } from '@mantine/core';
import { AiFillFire } from 'react-icons/ai';
import { GiStonePile } from 'react-icons/gi';
import { MdWaterDrop } from 'react-icons/md';
import { RiCheckboxBlankCircleLine, RiWindyFill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { getCharacters } from '../../api';

export default function CharacterList() {
	const { data: characters } = useQuery({
		queryKey: ['characters'],
		queryFn: getCharacters,
	});

	return (
		<Box mt={10}>
			<Text mb={20}>
				In the mystical realm of ancient Japan, a legendary group of ninjas
				emerged, each embodying one of the five elemental forces: Oceanus,
				Ashes, Eartha, Nimbus, and Styx. These exceptional warriors were chosen
				by destiny to safeguard the balance between the elements and protect
				their land from darkness.
			</Text>
			<Tabs variant='outline' defaultValue='water' orientation='vertical'>
				<Tabs.List mr={20}>
					{characters?.map((character: any) => {
						const { element } = character;
						return (
							<Tabs.Tab
								key={character.id}
								value={character.element}
								icon={
									(element === 'air' && <RiWindyFill />) ||
									(element === 'water' && <MdWaterDrop />) ||
									(element === 'fire' && <AiFillFire />) ||
									(element === 'earth' && <GiStonePile />) ||
									(element === 'void' && <RiCheckboxBlankCircleLine />)
								}
							>
								{character.element}
							</Tabs.Tab>
						);
					})}
				</Tabs.List>
				{characters?.map((character: any) => {
					console.log(character);
					return (
						<Tabs.Panel key={character.id} value={character.element}>
							<Flex>
								<Image
									width={125}
									radius='md'
									src={`../src/assets/${character.element}-ninja.png`}
									alt={character.name}
								/>
								<Box ml={10}>
									<Text fz='sm' fw='bold' td='underline'>
										Data
									</Text>
									<Text fz='sm' mb={3}>
										id: {character.id}
									</Text>
									<Text fz='sm' mb={3}>
										resistance: +{character.resistancePercentage}%
									</Text>
									<Text fz='sm' mb={3}>
										damage: +{character.bonusDamage} (pure damage)
									</Text>
									<Text fz='sm' mb={3}>
										element damage: +{character.bonusElementDamage}{' '}
									</Text>
								</Box>
							</Flex>
							<Text mt={10}>{character.description}</Text>
						</Tabs.Panel>
					);
				})}
			</Tabs>
			<Text mt={20}>
				United by their purpose, these five elemental ninjas were a formidable
				force, patrolling the land and defending the innocent. They trained
				tirelessly, honing their skills and deepening their bond as a team.
				Their missions took them to treacherous landscapes, where they faced
				dark forces that sought to disrupt the delicate harmony of the elements.
				<br />
				<br />
				Together, Oceanus, Ashes, Eartha, Nimbus, and Styx braved perilous
				battles, their synchronized movements blending the power of their
				respective elements. Each ninja brought forth their unique abilities,
				complementing one another and amplifying their collective strength.
				<br />
				<br />
				With unwavering determination and the guidance of their elemental
				spirits, the ninja warriors safeguarded the land of Japan, ensuring that
				the balance of the five elements remained intact. Their legacy lived on,
				inspiring future generations of ninjas to embrace the elemental forces
				and protect the world from darkness for centuries to come.
			</Text>
		</Box>
	);
}

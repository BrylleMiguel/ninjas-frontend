import { useQuery } from 'react-query';
import { getNinjas } from '../../api';

export default function NinjaList() {
	const { data: ninjas } = useQuery({
		queryKey: ['ninjas'],
		queryFn: getNinjas,
	});

	return (
		<div>
			{ninjas?.map((ninja: any) => {
				return (
					<main key={ninja.id}>
						<h1>{ninja.name}</h1>
					</main>
				);
			})}
		</div>
	);
}

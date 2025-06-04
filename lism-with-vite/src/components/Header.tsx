import { Container, Lism, Flex } from 'lism-css/react';

export default function Header() {
	return (
		<Container size='m' tag='header' hasGutter py='30'>
			<Lism>
				<Flex ai='c' g='5' fz='3xl' lh='xs'>
					<h1 className='-f:inherit -fw:bold'>Lism CSS - with Vite</h1>
					<img src='vite.svg' />
				</Flex>
			</Lism>
		</Container>
	);
}

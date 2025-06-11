import { Stack, Text, Container } from 'lism-css/react';

export default function Header() {
	return (
		<Container size='m' tag='footer' hasGutter pbs='50' py='40' mt='auto'>
			<Stack ai='c' bgc='base-2' p='30' bdrs='99' bxsh='10' lh='xs'>
				<Text fz='l'> Lism CSS</Text>
				<Text fz='xs'>
					<a href='https://www.lism-css.com/' target='_blank'>
						www.lism-css.com
					</a>
				</Text>
			</Stack>
		</Container>
	);
}

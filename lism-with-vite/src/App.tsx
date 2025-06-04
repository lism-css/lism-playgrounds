import { Text, Link, Box, Flex, Stack, Dummy, Container, Columns, Accordion } from 'lism-css/react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Stack minH='100dvh'>
			<Header />
			<Container size='m' hasGutter isFlow mbs='50'>
				<Text fw='bold' fz='l'>
					This site is a playground for testing lism-css.
				</Text>
				<Flex g={['20', '30', '40']} p={['20', '30', '40']} bd bdc='divider'>
					<Box lh='1' p='30' bd>
						1
					</Box>
					<Box lh='1' p='30' bd>
						2
					</Box>
					<Box lh='1' p='30' bd>
						3
					</Box>
					<Box lh='1' p='30' bd mis='auto'>
						4
					</Box>
				</Flex>
				<Dummy length='l' />
				<Box isFullwide hasGutter isFlow bgc='base-2' py='50' my='50'>
					<Text ta='c'>Fullwide area</Text>
					<Columns cols='2' g='40'>
						<Box bgc='base' p='40' bdrs='2' bxsh='3'>
							Columns
						</Box>
						<Box bgc='base' p='40' bdrs='2' bxsh='3'>
							Columns
						</Box>
					</Columns>
					<Flex jc='c' mbs='50'>
						<Link
							href='###'
							hov='fade'
							d='if'
							c='base'
							bgc='text'
							px='40'
							py='20'
							td='n'
							bdrs='99'
						>
							Link Button
						</Link>
					</Flex>
				</Box>

				<Dummy length='l' />

				<Stack maxW='s' bd='b' my='50'>
					<Accordion.Root p='20' bd='t'>
						<Accordion.Header fw='bold'>
							<Accordion.Label>Question 01 ?</Accordion.Label>
							<Accordion.Icon />
						</Accordion.Header>
						<Accordion.Body mbs='20'>
							<Dummy length='l' />
						</Accordion.Body>
					</Accordion.Root>
					<Accordion.Root p='20' bd='t'>
						<Accordion.Header fw='bold'>
							<Accordion.Label>Question 02 ?</Accordion.Label>
							<Accordion.Icon />
						</Accordion.Header>
						<Accordion.Body mbs='20'>
							<Dummy length='l' />
						</Accordion.Body>
					</Accordion.Root>
					<Accordion.Root p='20' bd='t'>
						<Accordion.Header fw='bold'>
							<Accordion.Label>Question 03 ?</Accordion.Label>
							<Accordion.Icon />
						</Accordion.Header>
						<Accordion.Body mbs='20'>
							<Dummy length='l' />
						</Accordion.Body>
					</Accordion.Root>
				</Stack>
			</Container>
			<Footer />
		</Stack>
	);
}

export default App;

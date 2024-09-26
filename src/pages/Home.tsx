import { Link } from 'react-router-dom';
import { StartButton } from '../components/Button';
import { Center } from '../components/Center';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
function Home() {

  return (
    <>
    <Center direction='column'>
      <Logo/>
      <Text shadowcolor="#ed428e" size={2} weight="400">RandomPool</Text>
      <Text margin="2rem 0" size={1} weight="400">This app is made by David Zherdenovsky</Text>
      <Link to='/new'>
      <StartButton btncolor='#ed428e' fill={false} txtcolor='#ed428e' size={2}>START GAME</StartButton>
      </Link>
    </Center>
    </>
  )
}

export default Home
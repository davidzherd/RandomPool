import { StartButton } from '../components/Button';
import { Center } from '../components/Center';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
function Home() {

  return (
    <>
    <Center direction='column'>
      <Logo/>
      <Text shadow shadowcolor="#ed428e" size={2} weight={400}>RandomPool</Text>
      <StartButton btncolor='#ed428e' fill={false} txtcolor='#ed428e' size={2}>START GAME</StartButton>
    </Center>
    </>
  )
}

export default Home
import { FormEvent, useState } from 'react';
import { Card } from '../components/Card';
import { Center } from '../components/Center';
import { Dropdown } from '../components/Dropdown';
import { Input } from '../components/Input';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { StartButton } from '../components/Button';
import { distributeBalls, User } from '../logic';
import { Navigate } from 'react-router-dom';

interface Props{
  updatePlayers: Function;
}
function GameSettings({ updatePlayers }:Props) {
  const [numOfPlayers, setNumOfPlayers] = useState<number>(2);
  const [numOfBalls, setNumOfBalls] = useState<number>(1);
  const [settingSaved, setSettingSaved] = useState(false);

  const submitDetails = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const players = createPlayers(e.currentTarget.elements);
    updatePlayers(players)
    setSettingSaved(true);
  };

  function createPlayers(target: HTMLFormControlsCollection) {
    let players: User[] = [];

    for (let i = 0; i < target.length - 1; i += 2) {
      const playerName = (target[i] as HTMLInputElement).value;
      const playerPassword = (target[i + 1] as HTMLInputElement).value;

      const player: User = {
        id: i,
        name: playerName,
        password: playerPassword,
        balls: [],
        tag: (playerName.charAt(0)+playerName.charAt(playerName.length-1)).toUpperCase()
      };

      players.push(player);
    }
    players = distributeBalls(players, numOfBalls)

    return players;
  }


  return (
    <>
    {settingSaved && <Navigate to={'/game'}/>}
      <form onSubmit={submitDetails}>
        <Center direction='column'>
          <Logo />
          <Text shadowcolor="#ed428e" size={2} weight="400">
            Let's start a new game!
          </Text>
          <Card width='90%' margin="1rem" padding='0.5rem' direction='column'>
            <div style={{display: "flex", gap: "0.5rem"}}>
            <Text color='#919191' weight="500">
              Number of players:
            </Text>
            <Dropdown selected={numOfPlayers} menuItems={[2, 3, 4, 5]} action={(number: number) => setNumOfPlayers(number)} />
            </div>
            <div style={{display: "flex", gap: "0.5rem"}}>
            <Text color='#919191' weight="500">
              Number of balls per player:
            </Text>
            <Dropdown selected={numOfBalls} menuItems={[1,2,3]} action={(number: number) => setNumOfBalls(number)} />
            </div>
            {Array.from({ length: numOfPlayers }, (_, index) => (
              <div style={{ display: "flex" }} key={index.toString() + "container"}>
                <div key={index.toString() + "name"}>
                  <Text color='#919191' weight="500">Player name:</Text>
                  <Input color='whitesmoke' width='70%' />
                </div>
                <div key={index.toString() + "pass"}>
                  <Text color='#919191' weight="500">Player password:</Text>
                  <Input type='password' color='whitesmoke' width='70%' />
                </div>
              </div>
            ))}
          </Card>
          <StartButton type='submit' btncolor='#ed428e' fill={false} txtcolor='#ed428e' size={2}>
            START GAME
          </StartButton>
        </Center>
      </form>
    </>
  );
}

export default GameSettings;

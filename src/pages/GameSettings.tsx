import { FormEvent, useContext, useState } from 'react';
import { Card } from '../components/Card';
import { Center } from '../components/Center';
import { Dropdown } from '../components/Dropdown';
import { Input } from '../components/Input';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { StartButton } from '../components/Button';
import { createPlayers, formValidation } from '../logic';
import { Navigate } from 'react-router-dom';
import { PlayersContext } from '../App';

function GameSettings() {
  const playerCtx = useContext(PlayersContext);
  const [numOfPlayers, setNumOfPlayers] = useState<number>(2);
  const [numOfBalls, setNumOfBalls] = useState<number>(1);
  const [settingSaved, setSettingSaved] = useState(false);
  const [validForm, setValidForm] = useState(true);

  const submitDetails = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = formValidation(e.currentTarget.elements);
    if (valid){
      const players = createPlayers(e.currentTarget.elements, numOfBalls);
      playerCtx.updatePlayersData(players)
      playerCtx.updateInitialPlayersData({players: [...players], balls: numOfBalls})
      setSettingSaved(true);
    }else{
      setValidForm(false);
    }
  };

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
          {!validForm && <Text style={{color: "red"}}>All fields must be filled.</Text>}
          <StartButton type='submit' btncolor='#ed428e' fill={false} txtcolor='#ed428e' size={2}>
            START GAME
          </StartButton>
        </Center>
      </form>
    </>
  );
}

export default GameSettings;

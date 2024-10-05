
export type User = {
    id: number;
    name: string;
    password: string;
    balls: number[];
    tag: string;
    color: string;
};

export function distributeBalls(users: User[], ballsPerUser: number): User[] {
    const allBalls = Array.from({ length: 15 }, (_, index) => index + 1);
    const shuffledBalls = shuffleArray(allBalls);
    const result: User[] = [];
    let index = 0;
    for (const user of users) {
        // Ensure we don't exceed the available balls
        user.balls = shuffledBalls.slice(index, index + ballsPerUser);
        if (user.color === "") {
            user.color = randomColor()
        } 
        result.push(user)
        index += ballsPerUser;
    }

    return result;
}

// Helper function to shuffle an array
function shuffleArray(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export function randomColor(){
    let rgb = [0,0,0];
    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * 256);
    }
    const baseColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    return baseColor;
}
export function formValidation(formData: HTMLFormControlsCollection){
    for (let i = 0; i < formData.length - 1; i += 2) {
        const playerName = (formData[i] as HTMLInputElement).value;
        const playerPassword = (formData[i + 1] as HTMLInputElement).value;
        if (playerName === "" || playerPassword === ""){
            return false;
        }
    }
    return true;
}

export function createPlayers(target: HTMLFormControlsCollection, numOfBalls:number) {
    let players: User[] = [];

    for (let i = 0; i < target.length - 1; i += 2) {
      const playerName = (target[i] as HTMLInputElement).value;
      const playerPassword = (target[i + 1] as HTMLInputElement).value;

      const player: User = {
        id: i,
        name: playerName,
        password: playerPassword,
        balls: [],
        tag: (playerName.charAt(0) + playerName.charAt(playerName.length - 1)).toUpperCase(),
        color: ''
      };

      players.push(player);
    }
    players = distributeBalls(players, numOfBalls)

    return players;
  }
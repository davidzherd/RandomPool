export type User = {
    id: number;
    name: string;
    password: string;
    balls: number[];
};

export function distributeBalls(users: User[], ballsPerUser: number): User[] {
    const allBalls = Array.from({ length: 15 }, (_, index) => index + 1);
    const shuffledBalls = shuffleArray(allBalls);
    const result: User[] = [];
    let index = 0;
    for (const user of users) {
        // Ensure we don't exceed the available balls
        user.balls = shuffledBalls.slice(index, index + ballsPerUser);
        result.push(user)
        // console.log(user)
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
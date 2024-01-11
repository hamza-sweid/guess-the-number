<h1>Guess The Number</h1>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

<h2>Introduction</h2>

"Guess the Number" is a unique game where players start with 1000 points and aim to predict a multiplier value as it increases. The game is entirely front-end based, featuring a mock server for real-time chatting and dynamic updates after each round.

<h2>Features</h2>

<b>User Registration:</b> Start by entering your name to join the game.<br />
<b>Game Dashboard:</b> Includes the current round, a live graph, a ranking table, and a chat area.<br />
<b>Point System:</b> Start with 1000 points and use them to make predictions.<br />
<b>Speed Slider:</b> A slider to adjust the multiplier's rising speed.<br />
<b>Competitive Play:</b> Play against 3 other players, each with their own points and predictions.<br />
<b>Color-Coded Results:</b> Visual indicators to show winners and losers each round.<br />
<b>Ranking Updates:</b> Rankings update after each round based on scores.<br />
<b>Endgame:</b> The game ends when a player loses all their points.<br />
<b>Mock WebSocket Server:</b> Enables real-time chat without a backend.<br />

<h2>How to Play</h2

<b>Start the Game:</b> Enter your name to initiate.<br />
<b>Place Your Bets:</b> Use your points to make predictions.<br />
<b>Adjust the Speed:</b> Use the speed slider as needed.<br />
<b>Start Round:</b> Begin the game and watch the multiplier rise.<br />
<b>Check Your Ranking:</b> View your current rank in the ranking table to see how you're performing against other players.<br />
<b>Chat and Interact:</b> Use the chat feature to communicate with other players.<br />
<b>End of Round:</b> Check the color codes to see if you've won or lost points.<br />
<b>Game Over:</b> The game concludes when you run out of points.<br />

<h2>Technical Aspects</h2

Front-end only implementation.<br />
Utilizes a mock WebSocket server for the chat feature.<br />
Built with modern JavaScript frameworks and libraries.<br />

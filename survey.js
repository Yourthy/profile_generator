const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("What‘s your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`Your name: ${name}`);
  rl.question("What‘s an activity you like doing?", (activity) => {
    console.log(`Your activity: ${activity}`);
    rl.question("What do you listen to while doing that? ", (song) => {
      console.log(`Your song: ${song}`);
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
        (meal) => {
          console.log(`Your meal: ${meal}`);
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (food) => {
              console.log(`Your food: ${food}`);
              rl.question(
                "Which sport is your absolute favourite?",
                (sport) => {
                  console.log(`Your sport: ${sport}`);
                  rl.close();
                }
              );
            }
          );
        }
      );
    });
  });
});

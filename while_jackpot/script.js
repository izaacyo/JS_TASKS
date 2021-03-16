let win = false;
let rounds = 0;
let Jackpot = 0;

const costRound = 0.5;
const range = 6;
const wonJackpot = 100;

while (Jackpot < wonJackpot) {
    Jackpot++;

    win = false;

    while (true) {
        rounds++;

        //Game is bellow

        let array = [];

        let counter = 0;

        while (counter < 5) {

            array[counter] = Math.floor(Math.random() * range);

            //console.log(`Found a`, array[counter] === 1 ? 1 : 0)

            counter++;

        }

        /* while (counter--) {
             counter = counter - 1;
        
            /*   if (array[counter] === 1) {
                   console.log(`Here is ${array[counter]}`);
               } else {
                   console.log(`Here is ${array[counter]}`);
               }
           
               if (counter === 0) {
                   break;
               }
           
           } */

        //console.log(`The array created is`, array);


        let oneCounter = 0;
        let zeroCounter = 0;

        counter = 0;

        while (counter < 5) {
            //  counter = counter - 1;
            if (array[counter] === 1) {
                oneCounter++;

            } else if (array[counter] === 0) {
                zeroCounter++;
            }

            counter++;
        }

        //console.log(`Found ${oneCounter} ones and ${zeroCounter} zeros`)

        if (oneCounter === 5) {
            win = true;
            console.log("You won the jackpot")
        }
        /* else if (zeroCounter === 5) {
            console.log("Congratulations!Altough you did not win the jackpot you stil matched 5 zeros")
        } else if (oneCounter > 3 && oneCounter < 5) {
            console.log("You won a smiller prize than the jackpot. Your were close!")
        } else (console.log("Not a winning combination.")) */


        if (win) {
            break;

        }


    }
}



console.log(`${rounds} have been played until ${wonJackpot} jackpots were won. You spent ${rounds * costRound / wonJackpot} EUR on average to win a single jackpot.`)



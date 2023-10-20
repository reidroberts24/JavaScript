function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(attempts < 100) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
                if (headsCount == 5) {
                    resolve(`It took ${attempts} flips to flip heads 5 times`)
                }
            } else {
                headsCount = 0;
            }
        }
        reject("Heads hasn't been flipped 5 times in a row after 100 tries.")
})
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err))
console.log("When does this run?")
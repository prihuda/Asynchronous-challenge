async function test() {
    let arr = []
    for (let i = 1; i <= 3; i++) {
        await sleep(() => {
            // console.log(i)
            console.log(`${i}`)
        });
    }
    console.log("Done!");
}

const sleep = async (result, ...args) => {
    timeout(1000);
    return result(...args);
}

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test();
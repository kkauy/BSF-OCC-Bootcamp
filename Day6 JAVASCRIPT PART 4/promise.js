const step1 = () => {
    return new Promise(() => {
        setTimeout((resolve, reject) => {
            console.log("Step 1 is completed");
            resolve();
        },5000);
    });
}

const step2 = () => {
    return new Promise(() => {
        setTimeout((resolve, reject) => {
            console.log("Step 1 is completed");
            resolve();
        },6000);
    });
}

const step3 = () => {
    return new Promise(() => {
        setTimeout((resolve, reject) => {
            console.log("Step 1 is completed");
            resolve();
        },7000);
    });
}

//Chaining Promises
step1()
       .then(step2)
       .then(step3)
       .then(() => {
        console.log("Request is complete and all steps are done!")
       })
       .catch((error) => {
           console.log(`Error: ${error}`);
        });
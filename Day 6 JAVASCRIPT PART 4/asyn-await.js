//Async / Await
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 is completed");
            resolve();
        }, 3000);
    });
}

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 is completed");
            resolve();
        }, 3000);
    });
}

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 is completed");
            resolve();
        }, 3000);
    });
}

const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log("Request is complete and all steps are done!");
    } catch (error) {
        console.log(" An error occured");
    }
}

performSteps();
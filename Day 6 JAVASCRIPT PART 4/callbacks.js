// callback
const getDate = (callback) => {
    setTimeout(()=>{
        const data = "This is the data.";
        callback(data);
    },6000);
}

const proccessData = (data) => {
    console.log("Processing data...", data);
}

getDate(proccessData);
// Output: Processing data... This is the data.
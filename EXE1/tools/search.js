const fs = require('fs');

function Search(AllData, data) {
    let Alldata = JSON.stringify(AllData);
    let re = /\w+/g;
    let result = Alldata.match(re)
        // console.log(result);
        // console.log(typeof(data));
    let newData = data.toString().toUpperCase();

    console.log(newData);
    var ids = [];
    for (let i = 0; i < result.length; i++) {
        if (newData == result[i]) {
            console.log(newData, i, result[i])
            var number = i + 1;

            ids.push(number)

        }
    }
    console.log(ids);
    for (let i = 0; i < ids.length; i++) {
        let number = ids[i] / 64;
        ids[i] = Math.round(number)
    }
    console.log(ids);
    var kala = [];
    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < AllData.length; j++) {
            if (ids[i] == AllData[j].id) {

                kala.push(AllData[j]);
            }
        }
    }
    return kala;


}


module.exports = Search
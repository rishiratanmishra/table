function printTable() {
    var userNumber = document.getElementById('table-input').value;
        for (let num = 1; num <= 10; num++){
        let tableOf = userNumber;
        document.getElementById('tableBox').innerHTML += `${tableOf} ❌ ${num} = ${tableOf*num}<br>` ;
    }
}

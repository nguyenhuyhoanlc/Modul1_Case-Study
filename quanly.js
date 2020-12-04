let customeres = loadData();

function saveData(){
    window.localStorage.setItem('customeres',JSON.stringify(customeres));
}

function loadData(){
    if(localStorage.hasOwnProperty('customeres')){
        return  JSON.parse(localStorage.getItem('customeres'));
    }else {
        return [];
    }
}

function addCustomer() {
    let name = document.getElementById('customer-name').value;
    let numbercard = document.getElementById('customer-numbercard').value;
    let stt = document.getElementById('customer-stt').value;
    let job = document.getElementById('customer-job').value;
    let income = document.getElementById('customer-income').value;
    let collateral = document.getElementById('customer-collateral').value;
    let time = document.getElementById('customer-time').value;
    let tenor = document.getElementById('customer-tenor').value;
    let timepay = document.getElementById('customer-timepay').value;

    let customer = new Khachhang(name, numbercard, stt, job, income, collateral, time, tenor, timepay);
    if (stt === '' || name === '' || job === '' || income === '' || collateral === '' || time === '' || tenor === '' || timepay === '') {
        alert('you cannot leave the boxes blank');
    } else {
        console.log(customeres)
        customeres.push(customer);
        saveData(customeres);
        display();
        revert();

    }
}

function deleteCustomer(index){
    customeres.splice(index, 1);
    saveData();
    display();
}

function editCustomer(index){
    document.getElementById("edit-name").value = customeres[index].name;
    document.getElementById("edit-numbercard").value = customeres[index].numbercard;
    document.getElementById("edit-stt").value = customeres[index].stt;
    document.getElementById("edit-job").value = customeres[index].job;
    document.getElementById("edit-income").value = customeres[index].income;
    document.getElementById("edit-collateral").value = customeres[index].collateral;
    document.getElementById("edit-time").value = customeres[index].time;
    document.getElementById("edit-tenor").value = customeres[index].tenor;
    document.getElementById("edit-timepay").value = customeres[index].timepay;
    current = index;
}

function updateCustomer(){
    let index = current;
    customeres[index].name = document.getElementById("edit-name").value;
    customeres[index].numbercard = document.getElementById("edit-numbercard").value;
    customeres[index].stt = document.getElementById("edit-stt").value;
    customeres[index].job = document.getElementById("edit-job").value;
    customeres[index].income = document.getElementById("edit-income").value;
    customeres[index].collateral = document.getElementById("edit-collateral").value;
    customeres[index].time = document.getElementById("edit-time").value;
    customeres[index].tenor = document.getElementById("edit-tenor").value;
    customeres[index].timepay = document.getElementById("edit-timepay").value;
    saveData();
    display();
    revert2();

}

function revert2() {
    document.getElementById('edit-name').value = ''
    document.getElementById('edit-numbercard').value = ''
    document.getElementById('edit-stt').value = ''
    document.getElementById('edit-job').value = ''
    document.getElementById('edit-income').value = ''
    document.getElementById('edit-collateral').value = ''
    document.getElementById('edit-time').value = ''
    document.getElementById('edit-tenor').value = ''
    document.getElementById('edit-timepay').value = ''
}


function revert() {
    document.getElementById('customer-name').value = ''
    document.getElementById('customer-numbercard').value = ''
    document.getElementById('customer-stt').value = ''
    document.getElementById('customer-job').value = ''
    document.getElementById('customer-income').value = ''
    document.getElementById('customer-collateral').value = ''
    document.getElementById('customer-time').value = ''
    document.getElementById('customer-tenor').value = ''
    document.getElementById('customer-timepay').value = ''
}

function display() {
    customeres = loadData();

    console.log(customeres)
    let str = '';
    let sumJob = 0;
    for (let i = 0; i < customeres.length; i++) {
        str += `<tr>
                <td>${customeres[i].name}</td>
                <td>${customeres[i].numbercard}</td>
                <td>${customeres[i].stt}</td>
                <td>${customeres[i].job}</td>
                <td>${customeres[i].income}</td>
                <td>${customeres[i].collateral}</td>
                <td>${customeres[i].time}</td>
                <td>${customeres[i].tenor}</td>
                <td>${customeres[i].timepay}</td>
               <td><button onclick="editCustomer(${i})">EDIT</button> </td>
               <td><button onclick="deleteCustomer(${i})">DELETE</button></td>    
              </tr>`;

        sumJob += +customeres[i].job;
    }
    str += `<tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Tổng cho vay: ${sumJob}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
               <td></td>
               <td></td>    
              </tr>`;
    document.getElementById('table-render').innerHTML = str;
}

display();

function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if(h === 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime, 1000);
}
showTime()


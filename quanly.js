let customeres = [];

function addCustomer(){
    let stt = document.getElementById('customer-stt').value;
    let name = document.getElementById('customer-name').value;
    let numbercard = document.getElementById('customer-numbercard').value;
    let job = document.getElementById('customer-job').value;
    let income = document.getElementById('customer-income').value;
    let collateral = document.getElementById('customer-collateral').value;
    let time = document.getElementById('customer-time').value;
    let tenor = document.getElementById('customer-tenor').value;
    let timepay = document.getElementById('customer-timepay').value;
    // let note = "";
    // let currentDate = new Date();
    // let timePayDate = new Date(timepay);
    // let a = timePayDate.getDate();
    // let b = currentDate.getDate();
    // console.log(a);
    // console.log(b);
    // for (let i = 0; i < customeres.length; i++) {
    //     if (timePayDate.getDate() > currentDate.getDate()){
    //         return true
    //     }
    // }
    // if (date.getDate()>curr.getDate()) {
    //     document.getElementById('note').value = 'Qua han'
    // }
    if (stt ===''|| name ==='' || job==='' || income==='' ||collateral==='' || time==='' || tenor==='' || timepay===''){
        alert('you cannot leave the boxes blank')
    }
    let customer = new Khachhang(stt,name,numbercard, job,income,collateral,time,tenor,timepay);
    console.log(customer);
    console.log(customeres)
    customeres.push(customer);
    display();
    revert();
}

function deleteCustomer(index){
    customeres.splice(index, 1);
    display();
}

function editCustomer(index){
    document.getElementById("edit-stt").value = customeres[index].stt;
    document.getElementById("edit-name").value = customeres[index].name;
    document.getElementById("edit-numbercard").value = customeres[index].numbercard;
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
    customeres[index].stt = document.getElementById("edit-stt").value;
    customeres[index].name = document.getElementById("edit-name").value;
    customeres[index].numbercard = document.getElementById("edit-numbercard").value;
    customeres[index].job = document.getElementById("edit-job").value;
    customeres[index].income = document.getElementById("edit-income").value;
    customeres[index].collateral = document.getElementById("edit-collateral").value;
    customeres[index].time = document.getElementById("edit-time").value;
    customeres[index].tenor = document.getElementById("edit-tenor").value;
    customeres[index].timepay = document.getElementById("edit-timepay").value;
    display();
    revert2();
}

function revert2() {
    document.getElementById('edit-stt').value = ''
    document.getElementById('edit-name').value = ''
    document.getElementById('edit-numbercard').value = ''
    document.getElementById('edit-job').value = ''
    document.getElementById('edit-income').value = ''
    document.getElementById('edit-collateral').value = ''
    document.getElementById('edit-time').value = ''
    document.getElementById('edit-tenor').value = ''
    document.getElementById('edit-timepay').value = ''
}


function revert() {
    document.getElementById('customer-stt').value = ''
    document.getElementById('customer-name').value = ''
    document.getElementById('customer-numbercard').value = ''
    document.getElementById('customer-job').value = ''
    document.getElementById('customer-income').value = ''
    document.getElementById('customer-collateral').value = ''
    document.getElementById('customer-time').value = ''
    document.getElementById('customer-tenor').value = ''
    document.getElementById('customer-timepay').value = ''
}

function display() {
    console.log(customeres)
    let str = '';
    for (let i = 0; i < customeres.length; i++) {
        str += `<tr>
                <td>${customeres[i].stt}</td>
                <td>${customeres[i].name}</td>
                <td>${customeres[i].numbercard}</td>
                <td>${customeres[i].job}</td>
                <td>${customeres[i].income}</td>
                <td>${customeres[i].collateral}</td>
                <td>${customeres[i].time}</td>
                <td>${customeres[i].tenor}</td>
                <td>${customeres[i].timepay}</td>
               <td><button onclick="editCustomer(${i})">EDIT</button> </td>
               <td><button onclick="deleteCustomer(${i})">DELETE</button></td>    
              </tr>`;
    }
    document.getElementById('table-render').innerHTML = str;
}

display();


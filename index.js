const alertButton = document.querySelector(".alert-close"); 
const peopleSearch = document.querySelector(".search-user"); 
const people = ['victoria chambers','dale byrd', 'dawn wood', 'dan oliver', 'jane doe'];
const messagesDiv = document.querySelector(".messages");
const message = document.querySelector('textarea'); 
const sendButton = document.querySelector('#message-send');

// functionality to close the alert box 
alertButton.addEventListener('click', function(){
    const alertModal= document.querySelector('.alert-modal'); 
    alertModal.style.display = "none";
})


// ***********CHARTS****************************

// Line Chart
const lineChart = document.getElementById('line').getContext('2d');
const line = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26"],
        datasets: [{
            label: "Hourly",
            backgroundColor: 'rgba(179, 179, 204, 0.6)',
            borderColor: 'rgb(148, 148, 184)',
            data: [500, 700, 900, 1000, 1700, 2000, 3000],
            pointRadius: 5,
        },
        {
            label: "Daily",
            backgroundColor: 'rgba(157, 184, 148, 1)',
            borderColor: 'rgb(148, 224, 208)',
            data: [110, 180, 200, 250, 350, 500, 600],
            pointRadius: 5,
        },
        {
            label: "Weekly",
            backgroundColor: 'rgba(255, 153, 153, 0.4)',
            borderColor: 'rgb(255, 102, 102)',
            data: [1000, 1200, 2200, 2400, 3000, 3200, 3400],
            pointRadius: 5,
        },
        {
            label: "Monthly",
            backgroundColor: 'rgba(255, 255, 51, 0.5)',
            borderColor: 'rgb(255, 255, 102)',
            data: [1300, 1000, 800, 1400, 1900, 2000, 3100],
            pointRadius: 5,
        }
        ]
    },
    options: {
        responsive: true,
      }
});
// bar chart 
const bar = document.getElementById('bar-chart').getContext('2d');
const barChart = new Chart(bar, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["S", "M", "T", "W", "TH", "F", "S"],
        datasets: [{
            label: "Daily Traffic",
            backgroundColor: 'rgba(87, 62, 121, 0.6)',
            data: [3, 10, 5, 2, 18, 22, 25],
        }]
    },
    options: {
        responsive: true,
      }
});
// pie chart 
const pie = document.getElementById('pie-chart').getContext('2d');
const pieChart = new Chart(pie, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["phones", "Tablets", "Desktop"],
        datasets: [{
            label: "Mobile Users",
            backgroundColor: ['rgb(87, 62, 121)', 'rgb(128, 179, 255)', 'rgb(153, 255, 187)'],
            data: [15, 65, 20],
        }]
    },
    options: {
        responsive: true,
      }
});

//*************SEARCH BAR FUNCTIONALITY *****************/



// function searchPeople(inp, arr) {
//     var currentFocus; 

//     inp.addEventListener("input", function(e){
//         var a, b, i, val = this.value; 

//         closeAllList();
//         if(!val) {
//             return false;
//         }
//         currentFocus = -1; 
//         a = document.createElement("DIV"); 
//         a.setAttribute("id", "autocomplete-items");
//         this.parentNode.appendChild(a); 

//         for(i = 0; i < arr.length; i++){
//             if(arr[i].substr(0, val.length).toUpperCase == val.toUpperCase()){
//                 b = document.createElement("DIV");
//                 b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//                 b.innerHTML += arr[i].substr(val.length);
//                 b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

//                 b.addEventListener("click", function(e){
//                     inp.value = this.getElementsByTagName("input")[0].value;
//                     closeAllLists();
//                 });
//                 a.appendChild(b); 
//             }
//         }
//     });
//     inp.addEventListener("keydown", function(e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//             currentFocus++;
//             addActive(x);
//       } else if (e.keyCode == 38) {
//         currentFocus--;
//         addActive(x);
//       } else if (e.keyCode == 13) {
//         e.preventDefault();
//         if (currentFocus > -1) {
//             if (x) x[currentFocus].click();
//         }
//       }
//   });
// }
 
// ************ Message sent functions and resets ******************

function createSuccessMessage() {
    const successMessage = document.createElement('DIV'); 
    successMessage.innerHTML = "Your message was sent!";
    successMessage.setAttribute('class', 'successMessage'); 
    messagesDiv.appendChild(successMessage); 

    setTimeout(function(){
        messagesDiv.removeChild(successMessage); 
        peopleSearch.value = '';
        message.value = '';
    }, 3000); 
}
function createFailMessage() {
    const failMessage = document.createElement('DIV'); 
    failMessage.innerHTML = "Ops! Looks like one or more of the fields has not been completed"; 
    failMessage.setAttribute('class', 'failMessage'); 
    messagesDiv.appendChild(failMessage); 

    setTimeout(function(){
        messagesDiv.removeChild(failMessage); 
        peopleSearch.value = '';
        message.value = '';
    }, 3000); 
}

sendButton.addEventListener('click', function(){
    if(peopleSearch.value === '' || message.value === '') {
        createFailMessage();
    } else {
        createSuccessMessage(); 
    }
})

// *********** Notifications **************

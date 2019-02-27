const alertButton = document.querySelector(".alert-close"); 
const peopleSearch = document.querySelector(".search-user"); 
const people = ['victoria chambers','dale byrd', 'dawn wood', 'dan oliver', 'jane doe'];
const messagesDiv = document.querySelector(".messages");
const message = document.querySelector('textarea'); 
const sendButton = document.querySelector('#message-send');


// ********** ALERT BOX *************

alertButton.addEventListener('click', function(){
    const alertModal= document.querySelector('.alert-modal'); 
    alertModal.style.display = "none";
})


// ***********CHARTS******************

// **** Line Chart*****
const lineChart = document.getElementById('line').getContext('2d');
const line = new Chart(lineChart, {
    type: 'line',

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

// ***** Bar chart *****
const bar = document.getElementById('bar-chart').getContext('2d');
const barChart = new Chart(bar, {
    type: 'bar',

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

// ****** Pie chart ******
const pie = document.getElementById('pie-chart').getContext('2d');
const pieChart = new Chart(pie, {
    type: 'doughnut',

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
// ************ MESSAGE SENT FUNCTIONS ******************

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

// *********** REMOVE NOTIFICATIONS **************
 
const ul = document.querySelector(".notification-ul");

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentNode.classList.add('removed-item');
        setTimeout(() => {
            e.target.parentNode.remove(e);
        }, 400);
    }
});
// ******** LOCAL STORAGE TO SAVE SETTINGS **********
const saveSettings = document.querySelector('.save'); 
const clearSettings = document.querySelector('.cancel');

const form = document.querySelector('form'); 



// save the settings to local storage
function save() {
    const emailCheckbox = document.querySelector('.checkbox-1'); 
    const profileCheckbox = document.querySelector('.checkbox-2'); 
    const option2 = document.querySelector('.options-2');
    const option3 = document.querySelector('.options-3');
    const option4 = document.querySelector('.options-4');
    const option5 = document.querySelector('.options-5');

    localStorage.setItem('emailCheckbox', emailCheckbox.checked); 
    localStorage.setItem('profileCheckbox', profileCheckbox.checked); 
    localStorage.setItem('option2', option2.selected); 
    localStorage.setItem('option3', option3.selected); 
    localStorage.setItem('option4', option4.selected); 
    localStorage.setItem('option5', option5.selected); 

    alert("Your settings are saved");

}
//set the local storage settings when page loads 
function getSettings(){
    const emailChecked = JSON.parse(localStorage.getItem('emailCheckbox'));
    document.querySelector('.checkbox-1').checked = emailChecked; 

    const profileChecked = JSON.parse(localStorage.getItem('profileCheckbox'));
    document.querySelector('.checkbox-2').checked = profileChecked; 

    const options2 = JSON.parse(localStorage.getItem('option2'));
    document.querySelector('.options-2').selected = options2;

    const options3 = JSON.parse(localStorage.getItem('option3'));
    document.querySelector('.options-3').selected = options3;

    const options4 = JSON.parse(localStorage.getItem('option4'));
    document.querySelector('.options-4').selected = options4;

    const options5 = JSON.parse(localStorage.getItem('option5'));
    document.querySelector('.options-5').selected = options5;

}
saveSettings.addEventListener("click", function(){
    save();
})
clearSettings.addEventListener("click", function(){
    localStorage.clear();
    document.querySelector('.select-menu').value = "";
})
getSettings();





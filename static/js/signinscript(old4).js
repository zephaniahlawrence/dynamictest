fetch('/api/data') // The URL of your backend endpoint
  .then(response => response.json()) // Parse the response body as JSON
  .then(data => {
    console.log(data); // Use the data in your JavaScript code
    // Example: display data on your webpage
    document.getElementById('message-area').textContent = data.message;
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Handle any errors
  });

  async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
    // Use the data
    document.getElementById('message-area').textContent = data.message;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();





$(document).ready(function() {
    $('#signinform').on('submit', async function(event) {

        event.preventDefault();

        $.ajax({
            data: {
                usersignin: $('#usersignin').val() // Get the form data
                passwordsignin: $('#passwordsignin').val()
            },
            type : 'POST',
            url : '/'
        })

        .done(async function(data) {
            if (data.error) {
                $('#error').text(data.error).show();
            }
            else {
                document.getElementById('account').innerHTML = data.value;
            }
        })

        event.preventDefault();

    });
});


// document.addEventListener('DOMContentLoaded', function(){

//     const form = document.querySelector('#signinform');
//     const loginsubmit = document.querySelector('#loginsubmit');
//     const display = document.querySelector('#account');
//     const dashboard = document.querySelector('#dashboard');
//     const dashboardsection1 = document.getElementById('dashboardsection1');
//     form.addEventListener('submit', async function(event) {
//         event.preventDefault();

//         $.ajax({
//             data: {
//                 usersignin: $('#usersignin').val() // Get the form data
//                 passwordsignin: $('#passwordsignin').val()
//             },
//             type : 'POST',
//             url : '/'
//         });
//         document.getElementById('account').innerHTML = data.value;
//         // .done(async function(data) {
//         //     if (data.error) {
//         //         $('#error').text(data.error).show();
//         //     }
//         //     else {
//         //         document.getElementById('account').innerHTML = data.value;
//         //     }
//         // });

//             // display.innerHTML = 'x';
//             // document.querySelector('.account').classList.remove('expand');
//             // document.querySelector('.account').classList.toggle('dashboard');


//             event.preventDefault();
//     });
// });











// document.addEventListener('DOMContentLoaded', function(){

//     const form = document.querySelector('#signinform');
//     const loginsubmit = document.querySelector('#loginsubmit');
//     const display = document.querySelector('#account');
//     const dashboard = document.querySelector('#dashboard');
//     const dashboardsection1 = document.getElementById('dashboardsection1');
//     form.addEventListener('submit', async function(event) {
//         // event.preventDefault();


//         fetch('/', {method: 'POST'})
//                 .then(response => response.json())
//                 .then(data => {
//                     // Update the specific HTML element with the new value
//                     // document.getElementById('account').textContent = data.value;
//                     // display.innerHTML = data.value;
//                     display.innerHTML = 'xsvj;njkvnjksdvb;kdvbkjbjksjkcnc';
//                 })
//                 .catch(error => console.error('Error fetching value:', error));


//             // display.innerHTML = 'x';
//             // document.querySelector('.account').classList.remove('expand');
//             // document.querySelector('.account').classList.toggle('dashboard');


//             event.preventDefault();
//     });
// });




// async function updateValue() {
//             fetch('/formprocessor')
//                 .then(response => response.json())
//                 .then(data => {
//                     // Update the specific HTML element with the new value
//                     document.getElementById('account').textContent = data.value;
//                 })
//                 .catch(error => console.error('Error fetching value:', error));
//         }


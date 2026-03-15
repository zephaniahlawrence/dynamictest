// $(document).ready(function() {
//     $('#signinform').submit(async function(event) {
//         // event.stopImmediatePropagation();
//         // event.preventDefault();

//         $.ajax({
//             // data: {
//             //     usersignin: $('#usersignin').val() // Get the form data
//             //     passwordsignin: $('#passwordsignin').val()
//             // },
//             method : 'POST',
//             url : '/'
//         });

//         .done(function(data) {
//             if (data.error) {
//                 $('#error').text(data.error).show();
//             }
//             else {
//                 document.getElementById('dashboardsection1').innerHTML = data;
//             }
//         });

//         // event.stopImmediatePropagation();
//         event.preventDefault();

//     });
// });












document.addEventListener('DOMContentLoaded', function(){

    const form = document.querySelector('#signinform');
    const loginsubmit = document.querySelector('#loginsubmit');
    const display = document.querySelector('#account');
    const dashboard = document.querySelector('#dashboard');
    const dashboardsection1 = document.getElementById('dashboardsection1');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
            display.innerHTML = dashboard.innerHTML;
            let response = await fetch('/');
            dashboardsection1.innerHTML = response
            // let account = await response.text();
            document.querySelector('.account').classList.remove('expand');
            document.querySelector('.account').classList.toggle('dashboard');
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
//             display.innerHTML = dashboard.innerHTML;
//             let response = await fetch('/');
//             dashboardsection1.innerHTML = response
//             // let account = await response.text();
//             document.querySelector('.account').classList.remove('expand');
//             document.querySelector('.account').classList.toggle('dashboard');


//     });
// });















// document.addEventListener("DOMContentLoaded", (event) => {

//     const signinform = document.querySelector('signinform');
//     signinform.addEventListener('submit', async function(event) {
//     // document.getElementById('loginsubmit').addEventListener('submit', async function(event) {
//         event.preventDefault();

//         async function fetchData(url) {
//         try {
//             // 1. Fetch the resource from the URL
//             const response = await fetch(url, {
//                 method: 'POST',
//                 redirect: 'manual' // Prevent automatic following
//             }); // Pauses here until response is received

//             // 2. Check if the request was successful (status in the 200-299 range)
//             if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             // 3. Parse the response body as JSON
//             const data = await response.json(); // Pauses here until parsing is complete

//             // 4. Use the data
//             console.log(data);
//             return data;
//         } catch (error) {
//             // 5. Handle any errors (network failures, HTTP errors caught by the throw)
//             console.error('There was a problem with the fetch operation:', error.message);
//         }
//         }
//         event.preventDefault();
//     });


// });

// Example usage:
// fetchData('/signin');




















// document.addEventListener("DOMContentLoaded", (event) => {
//     document.getElementById('loginsubmit').addEventListener('click', async function (event) => {
//         event.preventDefault();
//         document.querySelector('.account').classList.remove('expand');
//         document.querySelector('.account').classList.toggle('dashboard');
//         fetch('/signin') // Request the JSON endpoint from the backend
//         // method: 'post'
//             .then(response => response.json()) // Parse the response as JSON
//             .then(data => {
//                 const dashboardsection1 = document.getElementById('dashboardsection1');
//                 dashboardsection1.innerHTML = ''; // Clear previous content

//                 // Loop through the data and create HTML elements
//                 // data.forEach(user => {
//                 //     const userDiv = document.createElement('div');
//                 //     userDiv.innerHTML = `<strong>${user.name}</strong> - ${user.role}`;
//                 //     container.appendChild(userDiv);
//                 // });
//                 dashboardsection1.innerHTML = data;
//             });
//             .catch(error => console.error('Error fetching data:', error));
//             event.preventDefault();
//     });
// });













// Function to fetch and display data
// function fetchAndDisplayData() {
//     // Replace 'your_backend_api_url' with the actual endpoint that returns JSON
//     fetch('/signin')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // Parse the response as JSON
//         })
//         .then(data => {
//             // Process the JSON data and display it in the HTML
//             displayData(data);
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//             document.getElementById('data-container').innerHTML = '<p>Error loading data.</p>';
//         });
// }

// // Function to dynamically generate HTML
// function displayData(data) {
//     const container = document.getElementById('data-container');
//     let htmlOutput = '';

//     // Assuming the JSON data is an array of objects
//     if (Array.isArray(data)) {
//         data.forEach(item => {
//             // Generate HTML for each item. Example:
//             htmlOutput += `<div class="item">`;
//             htmlOutput += `<h3>${item.name}</h3>`;
//             htmlOutput += `<p>ID: ${item.id}</p>`;
//             htmlOutput += `</div>`;
//         });
//     } else {
//         // Handle single object case if the backend returns a single JSON object
//         htmlOutput += `<h3>${data.name}</h3>`;
//         htmlOutput += `<p>ID: ${data.id}</p>`;
//     }

//     container.innerHTML = htmlOutput; // Insert the generated HTML into the container
// }

// // Call the function when the page loads
// document.addEventListener('DOMContentLoaded', fetchAndDisplayData);

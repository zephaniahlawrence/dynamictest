// const signinform = document.querySelector('signinform');
// const email = document.querySelector('email');
// signinform.addEventListener('submit', async function() {
//     let response = await fetch('/' + email.value);
//     let account = await response.text();
//     document.querySelector('account').innerHTML = `Welcome back ${account}!`;
// })













// document.addEventListener('DOMContentLoaded', function(){

//     const form = document.querySelector('#signinform');
//     const loginsubmit = document.querySelector('#loginsubmit');
//     const email = document.querySelector('#email');
//     const display = document.querySelector('#account');
//     const dashboard = document.querySelector('#dashboard');
//     // signinform.addEventListener('submit', function(event) {
//     //         event.preventDefault();
//     form.addEventListener('submit', async function(event) {
//         event.preventDefault();
//             // event.stopImmediatePropagation();
//             // display.innerHTML = `Welcome back ${email.value}!`;
//             display.innerHTML = dashboard.innerHTML;
//             // let response = await fetch('/' + email.value);
//             // let account = await response.text();
//             document.querySelector('.account').classList.remove('expand');
//             document.querySelector('.account').classList.toggle('dashboard');
//             // document.querySelector('.account').innerHTML = `Welcome back ${account}!`;

//     });
// });




document.addEventListener("DOMContentLoaded", (event) => {


    const form = document.getElementById('signinform');
    const display = document.querySelector('#account');
    const dashboard = document.querySelector('#dashboard');
    // const result = document.getElementById('mlresult');
    // const success = document.querySelector('.confirmation');


    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
        document.querySelector('.account').classList.remove('expand');
        document.querySelector('.account').classList.toggle('dashboard');
      result.innerHTML = "Please wait..."

        fetch('/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
    //                 result.innerHTML = json.message;
                    result.innerHTML = "You're registration was successful!";
                    // success.style.display = 'flex';
                    // document.querySelector('.confirmation').classList.toggle('success');


                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                    // document.querySelector('.confirmation').classList.toggle('success');
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
                // document.querySelector('.confirmation').classList.toggle('success');
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
    //                 result.style.display = "none";
                }, 3000);
            });
    });


});











// $(document).ready(function() {
//     $('#signinform').submit(function(event) {
//         event.stopImmediatePropagation();
//         event.preventDefault();

//         $.ajax({
//             data: {
//                 usersignin: $('#usersignin').val() // Get the form data
//                 passwordsignin: $('#passwordsignin').val()
//             },
//             method : 'POST',
//             url : '/signin'
//         });

//         .done(function(data) {
//             if (data.error) {
//                 $('#error').text(data.error).show();
//             }
//             else {
//                 document.getElementById('dashboardsection1').innerHTML = data.value;
//             }
//         });

//         event.stopImmediatePropagation();
//         event.preventDefault();

//     });
// });











// $(document).ready(function() {
//     $('#signinform').on('submit', function(event) {

//         event.preventDefault();

//         $.ajax({
//             data: {
//                 usersignin: $('#usersignin').val() // Get the form data
//                 passwordsignin: $('#passwordsignin').val()
//             },
//             type : 'POST',
//             url : '/signin'
//         });

//         .done(function(data) {
//             if (data.error) {
//                 $('#error').text(data.error).show();
//             }
//             else {
//                 document.getElementById('dashboardsection1').innerHTML = data.value;
//             }
//         });

//         event.preventDefault();

//     });
// });








// document.addEventListener('DOMContentLoaded', function(){
//     const form = document.querySelector('#signinform');
//     const loginsubmit = document.querySelector('#loginsubmit');
//     const email = document.querySelector('#email');
//     const display = document.querySelector('#account');
//     const dashboard = document.querySelector('#dashboard');
//     loginsubmit.addEventListener('click', async function(event) {
//         // event.preventDefault();
//         display.innerHTML = dashboard.innerHTML;
//         document.querySelector('.account').classList.remove('expand');
//         document.querySelector('.account').classList.toggle('dashboard');

//         function updateValue() {
//             fetch('/signin')
//                 .then(response => response.json())
//                 .then(data => {
//                     document.getElementById('dashboardsection1').innerHTML = data.value;
//                     console.log(data.value);
//                 })
//                 .catch(error => console.error('Error fetching data:', error));
//         }
//         // setInterval(updateValue, 3000);

//     });

// });





// document.addEventListener('DOMContentLoaded', function(){
//     const form = document.querySelector('#signinform');
//     const loginsubmit = document.querySelector('#loginsubmit');
//     const email = document.querySelector('#email');
//     const display = document.querySelector('#account');
//     const dashboard = document.querySelector('#dashboard');
//     form.addEventListener('submit', async function(event) {
//         event.preventDefault();
//         display.innerHTML = dashboard.innerHTML;
//         document.querySelector('.account').classList.remove('expand');
//         document.querySelector('.account').classList.toggle('dashboard');
//             // e.preventDefault(); // Prevent the default form submission (page reload)

//             $.ajax({
//                 type: 'POST',
//                 url: '/signin',
//                 data: {
//                     usersignin: $("#usersignin").val() // Get the form data
//                     passwordsignin: $("#passwordsignin").val()
//                 },
//                 success: function(response) {
//                     // Update the HTML element with the new value from Flask
//                     $("#dashboardsection1").text(response.new_value);
//                 },
//                 error: function(xhr) {
//                     console.log("An error occurred: " + xhr.status + " " + xhr.statusText);
//                 }
//             });


//     });
// });









// document.addEventListener('DOMContentLoaded', function(){
//         $(document).on('submit', '#signinform', function(e) {
//             e.preventDefault(); // Prevent the default form submission (page reload)

//             $.ajax({
//                 type: 'POST',
//                 url: '/signin',
//                 data: {
//                     usersignin: $("#usersignin").val() // Get the form data
//                     passwordsignin: $("#passwordsignin").val()
//                 },
//                 success: function(response) {
//                     // Update the HTML element with the new value from Flask
//                     $("#dashboardsection1").text(response.new_value);
//                 },
//                 error: function(xhr) {
//                     console.log("An error occurred: " + xhr.status + " " + xhr.statusText);
//                 }
//             });
//         });
// });














    // document.getElementById('signinform').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     fetch('/dashboard', {
    //         method: 'POST',
    //         body: JSON.stringify({ message }),
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.status === 'success') { /* Handle success */ }
    //     });
    // });














    // function updateValue() {
    //     fetch('/dashboard')
    //         .then(response => response.json())
    //         .then(data => {
    //             document.getElementById('value-container').textContent = data.value;
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }

    // Call the function every 3 seconds
    // setInterval(updateValue, 3000);















// const signinform = document.getElementById('signinform');
// const response = document.getElementById('dashboard');

// // Add an event listener for the 'submit' event
// myForm.addEventListener('submit', function (event) {
//     // 1. Prevent the default form submission behavior (stops page reload)
//     event.preventDefault();

//     // 2. Collect form data
//     const formData = new FormData(myForm);

//     // 3. Send the form data using the Fetch API (AJAX)
//     fetch(myForm.action, {
//         method: myForm.method,
//         body: formData
//     })
//     .then(response => {
//         // Handle the response from the server
//         if (response.ok) {
//             return response.text(); // or response.json() if your server returns JSON
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then(result => {
//         // 4. Update the div with the result from the server
//         responseDiv.innerHTML = result; // Change the div's content
//     })
//     .catch(error => {
//         // Handle errors
//         responseDiv.innerHTML = 'An error occurred: ' + error.message;
//     });
// });

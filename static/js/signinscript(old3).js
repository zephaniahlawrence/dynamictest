document.addEventListener("DOMContentLoaded", (event) => {


    const form = document.getElementById('signinform');
    const display = document.querySelector('#account');
    const dashboard = document.querySelector('#dashboard');
    // const result = document.getElementById('mlresult');
    // const success = document.querySelector('.confirmation');


    form.addEventListener('submit', function(e) {
    //   e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
        // document.querySelector('.account').classList.remove('expand');
        // document.querySelector('.account').classList.toggle('dashboard');
        const dashboardsection1 = document.getElementById('dashboardsection1');
    dashboardsection1.innerHTML = "Please wait..."

        fetch('/', {
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
    document.querySelector('.account').classList.remove('expand');
        document.querySelector('.account').classList.toggle('dashboard');
                    dashboardsection1.innerHTML = "You're registration was successful!";
                    // success.style.display = 'flex';
                    // document.querySelector('.confirmation').classList.toggle('success');


                } else {
                    console.log(response);
    dashboardsection1.innerHTML = json.message;
                    // document.querySelector('.confirmation').classList.toggle('success');
                }
            })
            .catch(error => {
                console.log(error);
    dashboardsection1.innerHTML = "Something went wrong!";
                // document.querySelector('.confirmation').classList.toggle('success');
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
    //                 result.style.display = "none";
                }, 3000);
            });
    });
    e.preventDefault();

});

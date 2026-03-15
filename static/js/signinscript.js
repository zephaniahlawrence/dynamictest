$(document).ready(function() {
    const display = document.querySelector('#account');
    const dashboard = document.querySelector('#dashboard');
    const dashboardsection1 = document.getElementById('dashboardsection1');
    const dashboardsection2 = document.getElementById('dashboardsection2');
    $('#loginsubmit').on('click', function(event) {

        $.ajax({
            data: {
                usersignin: $('#usersignin').val(),
                passwordsignin: $('#passwordsignin').val()
            },
            type : 'POST',
            url : '/signin'
        })

        .done(async function(data) {
            if (data.error) {
                $('#error').text(data.error).show();
                // document.getElementById('dashboardsection1').innerHTML = "fvhojfdoij";
            }
            else if (!data["status"]) {
                document.getElementById('signinerror').innerHTML = data["message"];
            }
            else if (data["status"]) {
                document.querySelector('.account').classList.remove('expand');
                document.querySelector('.dashboard').classList.add('expand');
                document.getElementById('accountname').innerHTML = data["fullname"];
                document.getElementById('accountmessage').innerHTML = data["message"];
                const profileimage = data["profileimage"];
                document.getElementById('profile-picture-wrapper').innerHTML = `<img src="${profileimage}" height="100%" width="100%" class="profile-picture"></img>`;
                document.getElementById('membershipstatus').innerHTML = data["membership"];
                // document.getElementById('membershipstatus').innerHTML = data["notifications"][0];
            }
        })

        event.preventDefault();

    });
    $('#dashboardsection2').on('click', function(event) {
        document.querySelector('#profiledisplay').classList.toggle('expand');
        document.querySelector('#membershipdisplay').classList.remove('expand');
        document.querySelector('#cartdisplay').classList.remove('expand');
        document.querySelector('#calendardisplay').classList.remove('expand');
        document.querySelector('#historydisplay').classList.remove('expand');
        document.querySelector('#settingsdisplay').classList.remove('expand');
        document.querySelector('#signoutdisplay').classList.remove('expand');
        document.querySelector('#admindisplay').classList.remove('expand');
        // profiledisplay.style.display = 'grid';
    });
    $('#dashboardsection3').on('click', function(event) {
        document.querySelector('#profiledisplay').classList.remove('expand');
        document.querySelector('#membershipdisplay').classList.toggle('expand');
        document.querySelector('#cartdisplay').classList.remove('expand');
        document.querySelector('#calendardisplay').classList.remove('expand');
        document.querySelector('#historydisplay').classList.remove('expand');
        document.querySelector('#settingsdisplay').classList.remove('expand');
        document.querySelector('#signoutdisplay').classList.remove('expand');
        document.querySelector('#admindisplay').classList.remove('expand');
        // profiledisplay.style.display = 'grid';
    });
    $('#dashboardsection4').on('click', function(event) {
        document.querySelector('#profiledisplay').classList.remove('expand');
        document.querySelector('#membershipdisplay').classList.remove('expand');
        document.querySelector('#cartdisplay').classList.toggle('expand');
        document.querySelector('#calendardisplay').classList.remove('expand');
        document.querySelector('#historydisplay').classList.remove('expand');
        document.querySelector('#settingsdisplay').classList.remove('expand');
        document.querySelector('#signoutdisplay').classList.remove('expand');
        document.querySelector('#admindisplay').classList.remove('expand');
        // profiledisplay.style.display = 'grid';
    });
    $('#dashboardsection5').on('click', function(event) {
        document.querySelector('#profiledisplay').classList.remove('expand');
        document.querySelector('#membershipdisplay').classList.remove('expand');
        document.querySelector('#cartdisplay').classList.remove('expand');
        document.querySelector('#calendardisplay').classList.toggle('expand');
        document.querySelector('#historydisplay').classList.remove('expand');
        document.querySelector('#settingsdisplay').classList.remove('expand');
        document.querySelector('#signoutdisplay').classList.remove('expand');
        document.querySelector('#admindisplay').classList.remove('expand');
        // profiledisplay.style.display = 'grid';
    });
    $('#dashboardsection6').on('click', function(event) {
        document.querySelector('#profiledisplay').classList.remove('expand');
        document.querySelector('#membershipdisplay').classList.remove('expand');
        document.querySelector('#cartdisplay').classList.remove('expand');
        document.querySelector('#calendardisplay').classList.remove('expand');
        document.querySelector('#historydisplay').classList.toggle('expand');
        document.querySelector('#settingsdisplay').classList.remove('expand');
        document.querySelector('#signoutdisplay').classList.remove('expand');
        document.querySelector('#admindisplay').classList.remove('expand');
        // profiledisplay.style.display = 'grid';
    });
    $('#dashboardsection7').on('click', function(event) {
        document.querySelector('#profiledisplay').classList.remove('expand');
        document.querySelector('#membershipdisplay').classList.remove('expand');
        document.querySelector('#cartdisplay').classList.remove('expand');
        document.querySelector('#calendardisplay').classList.remove('expand');
        document.querySelector('#historydisplay').classList.remove('expand');
        document.querySelector('#settingsdisplay').classList.toggle('expand');
        document.querySelector('#signoutdisplay').classList.remove('expand');
        document.querySelector('#admindisplay').classList.remove('expand');
        // profiledisplay.style.display = 'grid';
    });
    $('#dashboardsection8').on('click', function(event) {
        document.querySelector('#profiledisplay').classList.remove('expand');
        document.querySelector('#membershipdisplay').classList.remove('expand');
        document.querySelector('#cartdisplay').classList.remove('expand');
        document.querySelector('#calendardisplay').classList.remove('expand');
        document.querySelector('#historydisplay').classList.remove('expand');
        document.querySelector('#settingsdisplay').classList.remove('expand');
        document.querySelector('#signoutdisplay').classList.toggle('expand');
        document.querySelector('#admindisplay').classList.remove('expand');
        // profiledisplay.style.display = 'grid';
    });
//     $('#dashboardsection9').on('click', function(event) {
//         document.querySelector('#profiledisplay').classList.remove('expand');
//         document.querySelector('#membershipdisplay').classList.remove('expand');
//         document.querySelector('#cartdisplay').classList.remove('expand');
//         document.querySelector('#calendardisplay').classList.remove('expand');
//         document.querySelector('#historydisplay').classList.remove('expand');
//         document.querySelector('#settingsdisplay').classList.remove('expand');
//         document.querySelector('#signoutdisplay').classList.remove('expand');
//         document.querySelector('#admindisplay').classList.toggle('expand');
//         // profiledisplay.style.display = 'grid';
//     });
});

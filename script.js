document.addEventListener('DOMContentLoaded', function () {
	// Your code here
    //document.getElementById('currentYear').innerText = new Date().getFullYear();

    const openUser = document.getElementById('openUser');
    const openAdmin = document.getElementById('openAdmin')

    openUser.addEventListener('click', function() {
        document.getElementById('container-user').style.display = 'flex';
        document.getElementById('container-login').style.display = 'none';
    });

    openAdmin.addEventListener('click', function() {
        document.getElementById('container-login').style.display = 'flex';
        document.getElementById('container-user').style.display = 'none';
    });
});

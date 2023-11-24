
document.addEventListener('DOMContentLoaded', (event) => {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }

    document.addEventListener('click', function (event) {
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    });

    var dropbtns = document.getElementsByClassName("dropbtn");
    for (i = 0; i < dropbtns.length; i++) {
        dropbtns[i].addEventListener('click', function() {
            this.nextElementSibling.classList.toggle("show");
        });
    }
});

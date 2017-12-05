$(document).ready(function() {
    /*NAV*/
    $(".button-collapse").sideNav();
    
    /*SELECT*/
    $(document).ready(function() {
        $('select').material_select();
    });
    
    /*FECHA*/
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    
    /*FORMULARIO*/
    $("#frm1").submit(function(evt) {
        evt.preventDefault();
        
        let nom = document.getElementById("first_name").value,
            ape = document.getElementById("last_name").value,
            tel = document.getElementById("icon_telephone").value,
            tbody = document.getElementById("tbody");
        
        tbody.innerHTML += "<tr><td>" + nom + "</td><td>" + ape + "</td><td>" + tel + "</td></tr>";
    });
});
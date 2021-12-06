function validate() {
    var fname = document.forms["regform"]["fnamebox"].value;
    var lname = document.forms["regform"]["lnamebox"].value;
    var email = document.forms["regform"]["emailbox"].value;
    var cont = document.forms["regform"]["contbox"].value;
    var city = document.forms["regform"]["contbox"];

    if (fname == "") {
        window.alert("Please Enter Name")
        return false;        
    }
    else if (lname == "") {
        window.alert("Please Enter Name")
        return false;        
    }
    else if (email == "") {
        window.alert("Please Enter Name")
        return false;        
    }
    else if (cont == "") {
        window.alert("Please Enter Name")
        return false;        
    }
    else if (city.selectedIndex < 1) {
        window.alert("Please Select City")
        return false;        
    }

    return true;
}
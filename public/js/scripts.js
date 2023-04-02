/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})




document.getElementById('LicenseForm').addEventListener('submit', onFormSubmit_license);



async function onFormSubmit_license(e) {
    // prevent from reploaidng
    e.preventDefault();

    const License_No = document.getElementById("License_Number").value;
    console.log(License_No);
    const data_retrieved = await fetch('/license?' + new URLSearchParams({
        License_No
    })).then((res) => { return res.json() })

    console.log(data_retrieved);


    // if there is no user
    if (!data_retrieved) {
        document.getElementById("license_output_div").style.display = "none"
        document.getElementById("License_error").style.display = "block"
        document.getElementById("License_error").innerText = "No User Found"


    }
    else {
        document.getElementById("License_error").style.display = "none"


        document.getElementById("license_output_div").style.display = "flex"

        document.getElementById("Fname").value = data_retrieved.firstname;
        document.getElementById("Lname").value = data_retrieved.lastname;
        document.getElementById("License_Number_out").value = data_retrieved.License_No;
        document.getElementById("Age").value = data_retrieved.Age;
        document.getElementById("manufacturer").value = data_retrieved.car_details.manufacturer;
        document.getElementById("model").value = data_retrieved.car_details.model;
        document.getElementById("M_year").value = data_retrieved.car_details.year;
        document.getElementById("plate").value = data_retrieved.car_details.plate_no;
    }

}






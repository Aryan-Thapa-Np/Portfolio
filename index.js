document.addEventListener("DOMContentLoaded", () => {



    const toggle_Sidebar = document.querySelector('.toggle-hamburger');
    const sidebar = document.querySelector('.sidebar');

    let toggleCheck = true;
    toggle_Sidebar.addEventListener("click", () => {

        if (toggleCheck) {
            toggleCheck = false;
            toggle_Sidebar.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        } else {

            toggle_Sidebar.innerHTML = `<i class="fa-solid fa-bars"></i>`;
            toggleCheck = true;
        }

        sidebar.classList.toggle("show");

    });


    const customCursorOutline = document.querySelector('.curosr-outline');
    const customCursorDot = document.querySelector('.cursor-dot');



    window.addEventListener("mousemove", (e) => {


        customCursorDot.style.top = `${e.clientY}px`;
        customCursorDot.style.left = `${e.clientX}px`;






        function updateMouseLocation() {




            customCursorOutline.animate(
                {
                    top: `${e.clientY}px`,
                    left: `${e.clientX}px`
                },
                {
                    duration: 50,
                    fill: "forwards"

                }
            );


        }


        updateMouseLocation();


    });




});
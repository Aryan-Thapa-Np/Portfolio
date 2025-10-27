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

    const texts = [
        "Full Stack Developer",
        "Software Developer",
        "Frontend Developer",
        "Backend Developer"
    ];

    const element = document.querySelectorAll(".user_info");
    let index = 0;
    let charIndex = 0;
    let typingSpeed = 100;
    let pauseTime = 1500;

    function type() {
        const currentText = texts[index];
        element.forEach(item => {
            item.textContent = currentText.slice(0, charIndex);

         
        })
           if (charIndex < currentText.length) {
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(() => {
                    charIndex = 0;
                    index = (index + 1) % texts.length;
                    type();
                }, pauseTime);
            }
    }

    type();


});
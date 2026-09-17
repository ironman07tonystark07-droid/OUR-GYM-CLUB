/* =====================================================
   OUR GYM CLUB
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   01. DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       02. MOBILE MENU
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("active");

            }
        );


        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove("active");

                }
            );

        });

    }


    /* =================================================
       03. CONTACT FORM
    ================================================= */

    const contactForm =
        document.getElementById("contactForm");

    const formSuccess =
        document.getElementById("formSuccess");


    if (contactForm && formSuccess) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                formSuccess.style.display = "block";

                contactForm.reset();

            }
        );

    }


    /* =================================================
       04. SCROLL REVEAL
    ================================================= */

    const reveals =
        document.querySelectorAll(".reveal");


    if (reveals.length > 0) {

        if ("IntersectionObserver" in window) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target
                                        .classList
                                        .add("active");

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12
                    }
                );


            reveals.forEach(
                function (element) {

                    observer.observe(element);

                }
            );


        } else {

            /* Fallback */

            reveals.forEach(
                function (element) {

                    element.classList.add("active");

                }
            );

        }

    }


    /* =================================================
       05. COUNTER ANIMATION
    ================================================= */

    const counters =
        document.querySelectorAll(
            "[data-target]"
        );


    let countersStarted = false;


    function startCounters() {

        if (countersStarted) {
            return;
        }


        const statsSection =
            document.querySelector(
                ".stats-section"
            );


        if (!statsSection) {
            return;
        }


        const sectionTop =
            statsSection.getBoundingClientRect().top;


        if (
            sectionTop <
            window.innerHeight - 100
        ) {

            countersStarted = true;


            counters.forEach(
                function (counter) {

                    const target =
                        Number(
                            counter.getAttribute(
                                "data-target"
                            )
                        );


                    let current = 0;


                    const duration = 1200;

                    const steps = 40;

                    const increment =
                        target / steps;

                    const interval =
                        duration / steps;


                    const timer =
                        setInterval(
                            function () {

                                current += increment;


                                if (
                                    current >=
                                    target
                                ) {

                                    current =
                                        target;

                                    clearInterval(
                                        timer
                                    );

                                }


                                counter.textContent =
                                    Math.floor(
                                        current
                                    );

                            },
                            interval
                        );

                }
            );

        }

    }


    window.addEventListener(
        "scroll",
        startCounters
    );


    startCounters();


    /* =================================================
       06. BACK TO TOP
    ================================================= */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.style.display =
                        "flex";

                } else {

                    backToTop.style.display =
                        "none";

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }

});
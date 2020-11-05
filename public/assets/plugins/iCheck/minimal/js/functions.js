$(document).ready(function () {

    var video = $("#cutsomVideo");
    video = video && video[0];
    var progressBar = $(".progress-bar");

    function progressLoop() {
        setInterval(function () {
            var percentage = Math.round((video.currentTime / video.duration) * 100);
            $(progressBar[0]).css("width", percentage + "%")
        });
    }

    video.addEventListener("play", progressLoop);

    const headerSlider = $('.header-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        // autoplaySpeed: 0.1,
        autoplayTimeout: 3000,
        loop: true,
        animateOut: 'fadeOut',
    });

    const mob_headerSlider = $('.mob-header-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        // autoplaySpeed: 0.1,
        autoplayTimeout: 3000,
        loop: true,
        animateOut: 'fadeOut',
    });

    const videoSlider = $('.video-slider').owlCarousel({
        items: 2,
        dots: false
    });

    // Go to the next item
    $('#videoSliderNextBtn').click(function () {
        videoSlider.trigger('next.owl.carousel');
    })

    const videoSlider1 = $('.video-slider1').owlCarousel({
        items: 1,
        dots: false
    });

    // Go to the next item
    $('#videoSlider1NextBtn').click(function () {
        videoSlider1.trigger('next.owl.carousel');
    })

    const coursesSlider = $('.courses-slider').owlCarousel({
        items: 3,
        dots: false,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,

            }
        }
    });

    // Go to the next item
    $('#coursesSliderPrevBtn').click(function () {
        coursesSlider.trigger('prev.owl.carousel');
    })

    $('#coursesSliderNextBtn').click(function () {
        coursesSlider.trigger('next.owl.carousel');
    })


    const hiveSlider = $('.hive-slider').owlCarousel({
        items: 3,
        dots: false,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,

            }
        }
    });

    // Go to the next item

    $('#hiveSliderPrevBtn').click(function () {
        hiveSlider.trigger('prev.owl.carousel');
    })
    $('#hiveSliderNextBtn').click(function () {
        hiveSlider.trigger('next.owl.carousel');
    })


    const hackathonSlider = $('.hackathon-slider').owlCarousel({
        items: 3,
        dots: false,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,

            }
        }
    });

    // Go to the next item

    $('#hackathonSliderPrevBtn').click(function () {
        hackathonSlider.trigger('prev.owl.carousel');
    })
    $('#hackathonSliderNextBtn').click(function () {
        hackathonSlider.trigger('next.owl.carousel');
    })



    const eventsSlider = $('.events-slider').owlCarousel({
        items: 3,
        dots: false,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,

            }
        }
    });

    // Go to the next item

    $('#eventsSliderPrevBtn').click(function () {
        eventsSlider.trigger('prev.owl.carousel');
    })

    $('#eventsSliderNextBtn').click(function () {
        eventsSlider.trigger('next.owl.carousel');
    })

    $('#videoModal').on('hide.bs.modal', function (event) {
        video && video.pause();
    })

    $('#videoModal').on('show.bs.modal', function (event) {
        video && video.play();

    })

    // $("#textTransition").fadeOut(function () {
    //     $(this).text("World")
    // }).fadeIn();

    setInterval(() => {
        $("#textTransition").fadeOut(function () {
            $(this).html("<h2 class='title-2'><span>Powered by the</span> <br /> Global Community of Creators</h2>")
        }).fadeIn();
        00

        setTimeout(() => {
            $("#textTransition").fadeOut(function () {
                $(this).html("<h2><span>WORLD'S</span> FIRST AI-BASED <br /> 21ST CENTURY <span>COURSES</span></h2>")
            }).fadeIn();
        }, 4000)
    }, 8000)


    $('#loginSignupBTN').click(function () {
        $('#loginModal').css('display', 'none');
        $('#signupModal').css('display', 'block');
        document.getElementById("signupForm").reset();
        document.getElementById("loginForm").reset();
    })

    $('.openLoginForm').click(function () {
        $('#loginModal').show();
        $('#signupModal').hide();
        document.getElementById("signupForm").reset();
        document.getElementById("loginForm").reset();
        resetPlaceholder();
    })

    $('.openSignupForm').click(function () {
        $('#loginModal').hide();
        $('#signupModal').show();
        document.getElementById("signupForm").reset();
        document.getElementById("loginForm").reset();
        resetPlaceholder();
    })

    // $('.loginOrSignup').click(function () {
    //     $('#loginModal').css('display', 'block');
    //     $('#signupModal').css('display', 'none');
    //     document.getElementById("loginForm").reset();
    //     document.getElementById("signupForm").reset();
    //     resetPlaceholder();
    // })


    function resetPlaceholder() {
        $('#newemail').attr('placeholder', 'Email');
        $('#newpassword').attr('placeholder', 'Password');
        $('#firstName').attr('placeholder', 'First Name');
        $('#lastName').attr('placeholder', 'Last Name');
    }


    $('.radio').change(function () {

        let formName = $(this).val();
        console.log(formName);

        switch (formName) {
            case 'student':
                $('#signup-form').show();
                $('#educator-form').hide();
                $('#corporate-form').hide();
                break;

            case 'educator':
                $('#signup-form').hide();
                $('#educator-form').show();
                $('#corporate-form').hide();
                break;

            case 'corporation':
                $('#signup-form').hide();
                $('#educator-form').hide();
                $('#corporate-form').show();
                break;

            default:
                break;
        }

    })


    $('#signup-btn').click(function () {

        var name_validation = /^[a-z\sA-Z]+$/;
        var email_validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var password_validation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        //Minimum six characters, at least one letter and one number :
        var name_validation = /^[a-z\sA-Z]+$/;

        let signup_email = $('#newemail').val();
        let signup_password = $('#newpassword').val();
        let first_name = $('#firstName').val();
        let last_name = $('#lastName').val();


        let isemail = email_validation.test(signup_email);
        let ispassword = password_validation.test(signup_password);
        let isfirstname = name_validation.test(first_name);
        let islastname = name_validation.test(last_name);
        if (isemail && ispassword && isfirstname && islastname) {
            console.log("all ok");
        }
        if (isemail == false) {
            $('#newemail').val("");
            $('#newemail').attr('placeholder', 'Invalid Email!');
        }
        if (ispassword == false) {
            $('#newpassword').val("");
            $('#newpassword').attr('placeholder', 'Min 6 chars, incl. 1 letter, 1 number and 1 special char:');
        }

        if (isfirstname == false) {
            $('#firstName').val("");
            $('#firstName').attr('placeholder', 'Enter alphabets only!');
        }
        if (islastname == false) {
            $('#lastName').val("");
            $('#lastName').attr('placeholder', 'Enter alphabets only!');
        }
    })
});
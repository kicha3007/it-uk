/* ****************************** accordion ****************************** */

$(function () {
    var $accordWrap = $("[data-it-accord-wrap]");
    var $accordItem = $("[data-it-accord-item]");
    var $accordToggle = $("[data-it-accord-toggle]");

    $accordItem.hide();
    $accordToggle.on("click", function () {
        var x = this;
        if ($(this).next($accordItem).css("display") === "none") {
            $(this).closest("[data-it-accord-wrap]").find("[data-it-accord-item]").fadeOut(500);

            $(this).closest("[data-it-accord-wrap]").find("[data-it-sign]").removeClass("active");

        }

        $(this).next($accordItem).slideToggle(200, function () {
            //window.scrollTo(0,this.offsetTop - 200);
        });
        $(this).parent().find("[data-it-sign]").toggleClass("active");

        /* $(this).parent().find("[]").toggle();
         $(this).parent().find("[]").toggle();*/
    });

    /* ------------------- fancybox ------------------- */

    $("[data-modal]").fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }

    });

    /* ------------------- carousel ------------------- */

    $('.box-carousel').each(function () {
        var $this = $(this);
        var itemsCount = $this.data("items");
        var itemsCountPad = $this.data("itemsPad");

        $this.owlCarousel({

            items: (itemsCount ? itemsCount : 1),
            margin: 20,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: itemsCountPad ? itemsCountPad : (itemsCount ? itemsCount : 1)
                },
                1000: {
                    items: itemsCount ? itemsCount : 1
                }
            }
        });
    });

    /*sumMeters.oninput = function () {
     var sumMetersValue = this.value;
     if (isNaN(sumMetersValue)) { // введено не число
     // показать ошибку
     this.classList.add("it-calculation__error");
     // this.innerHTML = 'Вы ввели не число. Исправьте, пожалуйста.'
     } else {
     this.classList.remove("it-calculation-error");
     if (sumMetersValue <= 500000) {
     sumAll.value = 0.08;
     } else if (sumMetersValue > 500000 && sumMetersValue <= 1000000) {
     sumAll.value = 0.07;
     } else if (sumMetersValue > 1000000 && sumMetersValue <= 2000000) {
     sumAll.value = 0.06;
     } else if (sumMetersValue > 2000000 && sumMetersValue <= 5000000) {
     sumAll.value = 0.05;
     } else if (sumMetersValue > 5000000) {
     sumAll.value = 0.04;
     } else   {
     return "Ошибка";
     }

     }
     }*/

    var sumMeters = document.querySelector("[data-meters]");
    var sumAll = document.querySelector("[data-sum]");

    sumMeters.oninput = function () {
        var sumMetersValue = this.value;
        var sumDefault = sumAll.value = "00 руб.";
        var removeError = this.classList.remove("it-calculation__error");
        if (sumMetersValue > 0 && sumMetersValue <= 500000) {
            sumAll.value = 0.08 * sumMetersValue + " руб.";
        } else if (sumMetersValue > 500000 && sumMetersValue <= 1000000) {
            sumAll.value = 0.07 * sumMetersValue + " руб.";
        } else if (sumMetersValue > 1000000 && sumMetersValue <= 2000000) {
            sumAll.value = 0.06 * sumMetersValue + " руб.";
        } else if (sumMetersValue > 2000000 && sumMetersValue <= 5000000) {
            sumAll.value = 0.05 * sumMetersValue + " руб.";
        } else if (sumMetersValue > 5000000) {
            sumAll.value = 0.04 * sumMetersValue + " руб.";
        } else if (sumMetersValue === "") {
            this.classList.remove("it-calculation__error");
            sumDefault;
        } else {
            this.classList.add("it-calculation__error");
            sumDefault;
        }

    };

    /* ------------------- mask ------------------- */

    $("[data-phone]").mask("+7 (999) 99-99-999");

});



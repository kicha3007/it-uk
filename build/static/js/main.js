
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


    var sumMeters = document.querySelector("[data-meters]");
    var sumAll = document.querySelector("[data-sum]").value;
    var sumAllValue = sumAll.value;
    console.log(sumAllValue);



    // sumMeters.onblur =  function () {
    //     var sumMetersValue = this.value;
    //     if (isNaN(sumMetersValue)) { // введено не число
    //         // показать ошибку
    //         this.classList.add("it-calculation-error");
    //         // this.innerHTML = 'Вы ввели не число. Исправьте, пожалуйста.'
    //     }   else {
    //         this.classList.remove("it-calculation-error");
    //     }
    //
    //     if(sumMetersValue <=  500) {
    //         sumAllValue =   0.08;
    //     } else if (sumMetersValue <=  1000){
    //         sumAllValue =   0.07;
    //     }
    // }






});



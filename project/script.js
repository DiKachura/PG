//функция смены позиции навбара
function moveNavbar(){
    let windowInnerWidth = window.innerWidth;
    let navbar = $("#navbar");
    if(windowInnerWidth <= 993) {
        navbar.addClass("fixed-bottom");
        navbar.addClass("bg-dark");
        $(".video-bck").remove();
    }
    if(windowInnerWidth >= 993){
        navbar.removeClass("fixed-bottom");
        navbar.removeClass("bg-dark");
    }
}

//показ дропдауна
function showDropdown(navbarDropdown, list){
    $(navbarDropdown).addClass("show");
    $(navbarDropdown).prop("aria-expanded", true);
    $(list).addClass("show");
}

//скрытие дропдауна
function hideDropdown(navbarDropdown, list){
    let windowInnerWidth = window.innerWidth;
    if(windowInnerWidth >= 993) {
        $(navbarDropdown).removeClass("show");
        $(navbarDropdown).prop("aria-expanded", false);
        $(list).removeClass("show");
    }
}

$(document).ready(function (){
    //перемещаем навбар через ивент
    moveNavbar();
    $(window).resize((event)=>{
        moveNavbar();
    });

    $("#check").change(function () {
        if ($("#check").is(":checked")) {
            $("#submitButton").prop("disabled", false);
        } else {
            $("#submitButton").prop("disabled", true);
        }
    });

$(document).on('ready', function() {
  $('.worked_with_us_slider1').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).on('ready', function() {
  $('.worked_with_us_slider2').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

 let data = document.querySelectorAll(".info");
    const ajaxSend = (formData) => {
        fetch("https://formcarry.com/s/nD1zlkZWaqi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                alert("Сообщение отправлено");
                data.forEach((element) => { element.value = ""; });
                $("#check").prop("checked", false);
                $("#submitButton").prop("disabled", true);
                localStorage.clear();
            })
            .catch((error) => {alert(error);})
    };

     const forms = $("#thatForm");
        for (let i = 0; i < forms.length; i++) {
            $("#submitButton").click(function (e) {
                e.preventDefault();

                let formData = new FormData(forms[i]);
                formData = Object.fromEntries(formData);

                ajaxSend(formData);
            });
        }

$(document).on('ready', function() {
  $('.rewiews_slider').slick({
    infinite: true,
    adaptiveHeight: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,

  });
});

$(document).ready(function() {
 $(".FAQ_accordion .FAQ_qestion:first").addClass("active");
 $(".FAQ_accordion .FAQ_answer:not(:first)").hide();
 $(".FAQ_accordion .FAQ_qestion").click(function () {
   $(this).next(".FAQ_answer").slideToggle("fast")
     .siblings(".FAQ_answer:visible").slideUp("normal");
   $(this).toggleClass("active");
   $(this).siblings(".FAQ_qestion").removeClass("active");
 });
});

    $(".navbar-toggler").click(event => {
        showDropdown('#navbarDropdown-1','#list-1');
        showDropdown('#navbarDropdown-2','#list-2');
    });
})

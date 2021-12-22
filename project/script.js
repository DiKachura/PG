
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





   

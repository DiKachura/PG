
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
          
              function showBlock() {
      let ab = document.getElementById("admin_block");
      ab.style.display = "block";
    }
    function hideBlock() {
      let ab = document.getElementById("admin_block");
      ab.style.display = "none";
    }
    function becomeDarker(bd) {
      bd.style.backgroundColor = "#d13018";
    }
    function becomeBrighter(bb) {
      bb.style.backgroundColor = "#f04d35";
    }
    function showBorder(sb) {
      sb.style.borderBottom = "3px solid #f14d34";
    }
    function hideBorder(hb) {
      hb.style.borderBottom = "none";
    }
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

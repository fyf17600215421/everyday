$.ajax({
    url: "/swiper",
    dataType: 'json',
    success: function(res) {
        initSwiper(res);
    }
})

function initSwiper(data) {
    var source = $("#swiper-tpl").html();
    var template = Handlebars.compile(source);
    var html = template(data);
    console.log(html)
    $(".swiper-wrapper").html(html);

    var mySwiper = new Swiper('.banner', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
    })
}
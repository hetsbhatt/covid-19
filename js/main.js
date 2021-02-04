$(document).ready(function () {
    $('.toggle-menu').click(function () {
        $('.toggle-menu').toggleClass('active');
        $('nav').toggleClass('active');
    })

    $(window).scroll(function () {
        //console.log($(window).scrollTop());
        if ($(window).scrollTop() > 45) {
            $('.main-header').addClass('sticky');
        }
        if ($(window).scrollTop() < 44) {
            $('.main-header').removeClass('sticky');
        }
    })

});

$.getJSON('https://api.covid19api.com/summary', function(data) {

//    var resources = data.resources.map(resource => `<a href="${resource.url}">${resource.description}</a><br>`),
//        text = `<h2>${data.license_title}</h2><br>
//               ${resources.join('')}`;
//
//    $(".mypanel").html(text);
    var newConfirmed = data.Global.NewConfirmed;
    var totalConfirmed = data.Global.TotalConfirmed;
    var totalDeaths = data.Global.TotalDeaths;
    var totalRecovered = data.Global.TotalRecovered;
    var today = new Date(data.Date);
    
    $("#confirmed_case").text(totalConfirmed.toLocaleString());
    $("#new_case").text(newConfirmed.toLocaleString());
    $("#total_deaths").text(totalDeaths.toLocaleString());
    $("#total_recovered").text(totalRecovered.toLocaleString());
    
    console.log(today);
});
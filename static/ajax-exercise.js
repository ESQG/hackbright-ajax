"use strict";


// PART 1: SHOW A FORTUNE

function chooseFortune(results) {
    $('#fortune-text').html(results);
}

function showFortune(evt) {

    $.get('/fortune', chooseFortune);

    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);




// PART 2: SHOW WEATHER

function weatherForecast(results) {
    $('#weather-info').html(results.forecast);
}


function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    $.get(url, weatherForecast);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function showOrder(results) {

    if (results.code === "ERROR") {
        $('#order-status').addClass('order-error');
    } else {
        $('#order-status').removeClass('order-error');
    }

    $('#order-status').html(results.msg);
}





function orderMelons(evt) {
    evt.preventDefault();

    // var orderForm = {
    //     "melon_type": $('#melon-type-field').val(),
    //     "qty": $('#qty-field').val()
    // }

    var orderForm = $('#order-form').serialize();

    $.post('/order-melons.json', orderForm, showOrder);
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



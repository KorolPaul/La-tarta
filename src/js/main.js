$(document).ready(function () { 

    /* Menu toggle */
    $('.menu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).next().toggleClass('opened');
    });

    $('.menu_list-item__parent a').on('click', function(e) {
        e.preventDefault();
        $(this).next().toggleClass('opened');
    });


    /* Dropdown */
    $("select").chosen({
        disable_search: true,
        width: $(this).data('width')
    });

    /* Tabs */
    $(".tabs_button").on('click', function(e) {
        e.preventDefault();

        $(".tabs_button.active, .tabs_tab.active").removeClass('active');

        $(this).addClass('active');
        $('.tabs_tab[data-tab="'+ $(this).data('tab') +'"]').addClass('active');
    });

    /*Range inputs*/
    $("#price").slider({
        min: 10,
        max: 100,
        range: true
    }).on('slide', function(e) {
        $(this).parent().find('.value-1').html(e.value[0]);
        $(this).parent().find('.value-2').html(e.value[1]);
    });
    $("#weight").slider({
        min: 10,
        max: 2000,
        range: true
    }).on('slide', function(e) {
        $(this).parent().find('.value-1').html(e.value[0]);
        $(this).parent().find('.value-2').html(e.value[1]);
    });

    /* Tabs */
    $('.tab-button').on('click', function() {
        $('.tab-button').removeClass('active');
        $('div[data-tab]').removeClass('opened');

        $(this).addClass('active');
        $('div[data-tab="' + $(this).data('tab') + '"]').addClass('opened');
    });

 });

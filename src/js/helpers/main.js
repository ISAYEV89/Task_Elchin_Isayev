require('select2');
require('jquery.scrollbar');
require('bootstrap-datepicker');
import InputMask from 'inputmask'

$(function () {


    //// Accordion


    $('body').on('click', '.structure-first__item', function () {
        $(this).siblings('.structure-second').slideToggle();
        $(this).children('.structure-icon').toggleClass('active');
        $(this).parents('.structure__item').siblings().find('.structure-second').slideUp();
        $(this).parents('.structure__item').siblings().find('.structure-icon').removeClass('active');
        $(this).parents('.structure__item').siblings().find('.structure-third').slideUp();
        $(this).parents('.structure__item').siblings().find('.js-second').removeClass('active');

    });

    $('body').on('click', '.js-second', function () {
        $(this).siblings('.structure-third').slideToggle();
        /*  if($(this).siblings().hasClass('structure-third')) {
              $(this).toggleClass('active');
          }*/
        $(this).toggleClass('active');
        $(this).parents('.structure-second__item').siblings().find('.structure-third').slideUp();
        $(this).parents('.structure-second__item').siblings().find('.js-second').removeClass('active');

    })


    //// tab -menu

    $('.tab-menu__link').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('.tab-menu__link').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })

    ////  tree view

    $('.genealogy-tree ul').hide();
    $('.genealogy-tree>ul').show();
    $('.genealogy-tree ul.active').show();
    $('.genealogy-tree li').on('click', function (e) {
        var children = $(this).find('> ul');
        if (children.is(":visible")) children.hide('fast').removeClass('active');
        else children.show('fast').addClass('active');
        e.stopPropagation();
    });

    $('.employee__url').on('click', function (e) {
        e.preventDefault();
    })

});

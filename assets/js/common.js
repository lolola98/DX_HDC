$(function(){

    $(".metismenu").metisMenu({
        toggle:true,
    });
    
    $('.datepicker').datepicker({
        format: 'yyyy/mm/dd',
        language: "ko",
    });

    $(".select2").select2({
        theme: "bootstrap-5",
    });

    $('.btn-aside-close').click(function(){
        $(this).toggleClass('open')
        $('body').toggleClass('aside-enabled');
    });
    $('.logo, .logo-txt').click(function(){
        $('.menu1 .menu-link').click();
    });
   
    /* 경보 발생 */
    $('#btn-warning').click(function(){
        $('.floor-plan').addClass('warning');
        $('.warning-list').addClass('warning');
        $('.equipment-condition').addClass('warning');
        $('.no_2').addClass('d-none');
        $('.no_3').removeClass('d-none');

        /* 사운드 추가 */
        var context = new AudioContext();
        document.getElementById('audioPlayer').play();
    });
    $('.no_3').click(function(){
        $('#equipmentActionDetails').addClass('d-none');
        $('#actionCompletion').addClass('d-none');
    });


    $(document).on("click", ".warning-list.warning .state-list", function() {
        $('.no_3').click();
    });

    $(document).on("click", ".equipment-condition.warning .btn-bodycam", function() {
        $('.no_3').click();
    });

    /* widget */
    $('.add-widget').click(function(){
        $('.widget-list li').removeClass('select');
    });
    $('.widget-list li').click(function(){
        $('.widget-list li').removeClass('select');
        $(this).addClass('select');
    });

    /* 경보 신호등 */
    $('.warning-notic .card-body').click(function(){
        $('.menu2 .menu-link').click();
    });


    $('#equipmentActionDetails .modal-close').click(function(){
        $('#equipmentActionDetails').addClass('d-none');
    });

    $('#actionCompletion .modal-close').click(function(){
        /* 경보 초기화 */
        $('#actionCompletion').addClass('d-none');
    });
    $('.modal-completion-close').click(function(){
        $('#actionCompletion').addClass('d-none');
         $('.floor-plan').removeClass('warning');
        $('.warning-list').removeClass('warning');
        $('.equipment-condition').removeClass('warning');
        $('.no_2').removeClass('d-none');
        $('.no_3').addClass('d-none');
    });

    /* 조치 완료 */
    $('.btn-completion').click(function(){
        $('#equipmentActionDetails').addClass('d-none');
        $('#actionCompletion').removeClass('d-none');
    });


    /* 메뉴 영역 밖 클릭 */
    $('html').click(function(e){ 
        if($(e.target).parents('.aside').length < 1 && $(e.target).parents('.header').length < 1 && $(e.target).parents('.drawer').length < 1){
            if($('.btn-aside-close').hasClass('open')){
                $('.btn-aside-close').removeClass('open')
                $('body').removeClass('aside-enabled');
            }
        }
    });

    /* notic */
    $('.noti').click(function(e){ 
        $('.drawer').addClass('drawer-on');
        $('body').append('<div class="drawer-overlay"></div>')
    });
    $('.drawer-close').click(function(e){ 
        $('.drawer').removeClass('drawer-on');
        $('.drawer-overlay').remove();
    });
    $(document).on("click", ".drawer-overlay", function() {
        $('.drawer-close').click();
    });


})

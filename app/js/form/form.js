$('#form-order').on('submit', function(e) {
    e.preventDefault();
    var data = $(this).serializeArray();
    var validate = true;
    var textPopup = 'Введите:';

    if($('#name').val() === '') {
        textPopup += ' имя ';
        validate = false;
    }
    if($('#phone').val() === '') {
        textPopup += ' номер телефона';
        validate = false;
    }
    if($('#street').val() === '') {
        textPopup += ' название улицы';
        validate = false;
    }

    if(validate) {
        $.ajax({
            type: "POST",
            url: "form.php",
            data: data,
            success: function(msg) {
                var message = JSON.parse(msg);
                if(message.status === 'false') {
                    // alert(message.text)
                }else{
                    // alert(message.text)
                }
            }
        });
        textPopup = 'Сообщение отправлено';
        $('.form-popup p').text(textPopup);
        $('.form-popup').show();
    }else{
        $('.form-popup p').text(textPopup);
        $('.form-popup').show();
    }

});

$('.order-button_dismiss').on('click', function (e) {
    e.preventDefault();
    $('.form-popup').hide();
});
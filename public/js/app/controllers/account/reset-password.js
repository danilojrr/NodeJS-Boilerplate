'use strict';

$(function () {
	$('form[name=resetPasswordForm]').validate({
        rules: {
            newPassword: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            retypeNewPassword: {
                required: true,
                equalTo: '[name=newPassword]'
            }
        },
        messages: {
            newPassword: {
                required: 'Type new password',
                minlength: 'Too short. At least 6 characters',
                maxlength: 'Too long. Maximum 20 characters'
            },
            retypeNewPassword: {
                required: 'Retype new password',
                equalTo: 'Enter the same new password as above'
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
});

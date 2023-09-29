$(document).ready(function() {
    $('#loginForm').validate({
        rules: {
            title: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6,
                
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            title:{
                required: '<span class="red">Please enter your name</span>',
                minlength: '<span class="red">Name must be at least 3 characters long</span>'
            },
            email: {
                required: '<span class="red">Please enter your email</span>',
                email: '<span class="red">Please enter a valid email</span>'
            },
            password: {
                required: '<span class="red">Please enter your password</span>',
                minlength: '<span class="red">Password must be at least 6 characters long</span>'
            },
            confirmPassword: {
                required: '<span class="red">Please confirm your password</span>',
                equalTo: '<span class="red">Passwords do not match</span>'
            }
        },
        submitHandler: function(form) {
            event.preventDefault();
            console.log('Form submitted');
        }
    });
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $(".btn").click(function (){
        alert("Te dirigirás a ver más")
    })

    $("#SocialIcon").click(function (){
        alert("Te dirigirás a GitHub")
    })

    $(".fa-github").click(function (){
        alert("Te dirigirás a GitHub")
    })

    $(".fa-linkedin").click(function (){
        alert("Te dirigirás a Linkedin")
    })

    $(".fa-twitter").click(function (){
        alert("Te dirigirás a Twitter")
    })

    $(".fa-facebook").click(function (){
        alert("Te dirigirás a Facebook")
    })
})
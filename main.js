$(document).ready(function () {
    // Existing code for dark mode toggle
    $(".radio-btn").click(function () {
    $(".radio-inner").toggleClass("active");
    $("body").toggleClass("dark");
    $("header").toggleClass("dark");
    });
});


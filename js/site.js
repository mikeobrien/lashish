$(function() {
    $('.announcement').filter(function() { 
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        return new Date($(this).data('timestamp')) >= today; 
    }).removeClass('hidden');
});
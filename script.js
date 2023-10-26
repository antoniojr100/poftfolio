$('Document').ready(function() {
    // open hamburger menu
    $('#hamburger-open').on('click', function(){

        // toggle class show on the menu
        $('#hamburger-menu').addClass('show');
    });
    

    // close hamburger menu, return to default
    $('#hamburger-close').on('click', function(){
        // toggle class show on the menu
        $('#hamburger-menu').removeClass('show');
        
    });

    // close menu when menu item is clicked
    $('#hamburger-menu li a').on('click', function(){
        $('#hamburger-menu').removeClass('show');
    })
})
$(function (){
    var user = new User(
        "John", 
        "Doe", 
        "11/10/1990", 
        "Software Engineering", 
        2.75
    );
    var courses = [
        new Course("Sissejuhatus teoreetilisse kokandusse", 1, 97),
        new Course("Teaching programming to dogs", 3, 78),
        new Course("Sissejuhatus erialasse III", 3, 84),
        new Course("Python 101", 1, 98),
    ];

    //init();  <-- see rida on välja kommenteeritud, sest init funktsiooni pole veel
    //tab changes
    $('#courses-button').click(function(event) {
        $("#courses-container").attr("class", "tab active");
        $("#profile-container").attr("class", "tab");
    });
    $('#profile-button').click(function(event) {
        $("#profile-container").attr("class", "tab active");
        $("#courses-container").attr("class", "tab");
    });
    // add course button toggle here (✿◠‿◠)
    $('#add-course-button').click(function(event) {
        $("#add-course").toggle();
    })

    function init() {
        //siia tuleb üks kena funktsioon, mille sisu ma absoluutselt ei mõista
        
    }

    function GPAcalc() {
        let grade = courses.grade;
        var points = 0;
        for(var i = 0; i < courses.length; i++){
            if(grade > 90){
                points += 4;
            }
            if(grade > 80){
                points += 3;
            }
            if(grade > 70){
                points += 2;
            }
            if(grade > 60){
                points += 4;
            }
            if(grade > 50){
                points += 0.5;
            }
            if(grade <= 50){
                points += 0;
            }
        }
        return points/courses.length;

    }
});
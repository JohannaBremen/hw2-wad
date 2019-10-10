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

    init(); 
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
        //filling table with data from courses array
        let tbody = $("<tbody></tbody>");
        for(let i = 0; i<courses.length; i++){
            let tr = $("<tr></tr>");
            let td_id = $("<td></td>").text(i+1);
            let td_title = $("<td></td>").text(courses[i].title);
            let td_semester = $("<td></td>").text(courses[i].semester);
            let td_grade = $("<td></td>").text(courses[i].grade);
            
            //adding to row
            tr.append(td_id);
            tr.append(td_title);
            tr.append(td_semester);
            tr.append(td_grade);
            //rows to tbody
            tbody.append(tr);

        }
        //replacing tbody
        $('#courses tbody').replaceWith(tbody);
    }
    //no testing yet!!!!!! could be bröken ¯\_(ツ)_/¯
    function GPAcalc() {
        var points = 0;
        for(var i = 0; i < courses.length; i++){
            let grade = courses[i].grade;
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
var Name_Of_Students=[];

function submit(){
    for (var i=1; i<=4;i++){
        Name_Of_Students.push(document.getElementById("Student_"+i).value);
    };
    console.log(Name_Of_Students);
    
    document.getElementById("display_name_with_comma").innerHTML= Name_Of_Students;
    var without_comma_students= Name_Of_Students.join(" ");
    document.getElementById("display_name_without_comma").innerHTML=without_comma_students;

    document.getElementById("button_submit").style.display="none";
    document.getElementById("Button_Sort").style.display="inline-block";
}
function sorting(){
    Name_Of_Students.sort();
  var  without_comma_students_sorted= Name_Of_Students.join(" ")
    document.getElementById("display_name_with_comma").innerHTML=Name_Of_Students;
    document.getElementById("display_name_without_comma").innerHTML=without_comma_students_sorted;
}
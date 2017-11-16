jQuery(function(){
    readJSON=function(){
        $.ajax({
            url: "data.json",
            dataType: "JSON",
            success: function (data) {
                $("#tableDiv").empty();
                var innerTable=$("<table style= 'border:solid'></table>").attr('id','innerTable');

                for(i in data){
                    innerTable.append("<tr><td>"+data[i].Name+"</td><td>"+ data[i].Surname +"</td><td>"+ data[i].Age+"</td></tr>");
                }
                $("#tableDiv").append(innerTable)
            }
        })
    }
});

function checkForm(){
    var form = document.getElementById("form");
    var ok = true;
    var result = document.getElementById("result");

    /*
    Age > 18
    When shit happens ALERT!!!
     */
    var name = form["name"].value;
    var age = form["age"].value;
    var gender = form["gender"].value;

    result.innerHTML="";
    form["name"].classList.remove("invalid");
    form["age"].classList.remove("invalid");
    document.getElementById("nameTD").classList.remove("invalid");
    document.getElementById("ageTD").classList.remove("invalid");
    document.getElementById("genderTD").classList.remove("invalid");


    if(name===""){
        form["name"].classList.add("invalid");
        document.getElementById("nameTD").classList.add("invalid");
        ok = false;
        result.innerHTML+=("Name can't be empty<br>");
    }
    if(age < 18){
        document.getElementById("ageTD").classList.add("invalid");
        form["age"].classList.add("invalid");
        ok = false;
        result.innerHTML+=("Age can't be empty or less than 18<br>");

    }if(gender!== "MALE" && gender!== "FEMALE"){
        document.getElementById("genderTD").classList.add("invalid");
        ok = false;
        result.innerHTML+=("Gender can't be empty<br>");

    }
    if(ok){
            submitForm();
    }};

    jQuery(function(){
        submitForm=function() {
            var form = document.getElementById("form");

            var name = form["name"].value;
            var age = form["age"].value;
            var gender = form["gender"].value;


            var dataForm= {'Name': name, 'Age': age , "Gender": gender};
           $.ajax({
            url: "data.json",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json; charset=utf-8",
            data: dataForm,
            success: function(data)
            {
                document.getElementById("result").text("Successfully done!")
            }
        });
}}) ;
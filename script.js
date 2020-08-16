let students = [
    {
        name : "John Smith",
        age : 24,
        qualification : "Graduate",
        contact : "03189-9898-87",
        picture : "https://s3-us-west-2.amazonaws.com/asset.plexuss.com/news/images/successful-college-student-lg.png"
    },
    
    {
        name : "Sophia Taylor",
        age : 22,
        qualification : "Under-Graduate",
        contact : "03456-87479-63",
        picture : "https://img.freepik.com/free-photo/smiling-girl-holding-notebooks-leaning-table_23-2147657265.jpg?size=626&ext=jpg&ga=GA1.2.1353492751.1597576828 "
    },
    
    {
        name : "Stephen Hope",
        age : 26,
        qualification : "Post-Graduate",
        contact : "05880-9890-45",
        picture : "https://newcanadians.tv/wp-content/uploads/2020/04/student-3500990_1920.jpg"
    }
];


let main = document.querySelector("main");

function showItems(){

main.innerHTML=students.map((student)=>{


    return (`<div class="card">
    <div class="imgdiv">
        <img src=${student.picture} alt="student image">
    </div>
    <div class="about">
        <div>
            <h5>Name : </h5>
            <p>${student.name}</p>
        </div>

        <div>
            <h5>Age : </h5>
            <p>${student.age}</p>
        </div>

        <div>
            <h5>Qualification : </h5>
            <p>${student.qualification}</p>

        </div>

        <div>
            <h5>Contact : </h5>
            <p>${student.contact}</p>

        </div>
    </div>

</div>`)

}).join(" ");
}

let showForm = false;

function addItem(){

    

    if (showForm){

        document.querySelector("#form").style.display="none";
        document.querySelector("#arrow").style.display="none";

        let obj = new Object();

        let name = document.querySelector("#name").value;
        let age = document.querySelector("#age").value;
        let qualification = document.querySelector("#qualification").value;
        let contact = document.querySelector("#contact").value;
        let picture = document.querySelector("#picture").value;

        obj["name"]=name;
        obj["age"]=age;
        obj["qualification"]=qualification;
        obj["contact"]=contact;
        obj["picture"]=picture;

        
        showForm = false;
        students.push(obj);
        
        showItems();
        

    }

    else{

        document.querySelector("#form").style.display="block";

        document.querySelector("#arrow").style.display="block";
        showForm = true;

    }


}



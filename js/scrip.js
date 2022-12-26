//function mark selection

function selection(link) {
    var opcions = document.querySelectorAll('#links  a');
    opcions[0].className = "";
    opcions[1].className = "";
    opcions[2].className = "";
    opcions[3].className = "";
    opcions[4].className = "";
    link.className = "selected";

    var x = document.getElementById("nav");
    x.className = "";
};
//Function menu responsive'
function responsiveMenu(){
    var x = document.getElementById("nav")
    if (x.className ===""){
        x.className = "responsive"
    }
    else{
        x.className = ""
    }

};

//bars function;

window.scroll = function(){
    skillseffect()
};

// function animate to bars

function skillseffect (){
    var skills = document.getElementById(skills);
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;  
    if (skills_distance >= 300){
        document.getElementById('html') .classList.add(progress-bar1);
        document.getElementById('Js') .classList.add(progress-bar2);
        document.getElementById('Il') .classList.add(progress-bar3);
        document.getElementById('Ps') .classList.add(progress-bar4);
    }
}
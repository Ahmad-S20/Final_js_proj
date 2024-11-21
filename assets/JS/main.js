
let c = 1;
const Rotate= ()=>{
    document.querySelector(".sliderss").innerHTML =     
    `<img src="./assets/img/sliders/mv-item${c}.jpg" alt="the revenant img">`;

}


/*setInterval( ()=>{
    Rotate();
    c++;
 }, 3000);
*/




let array_for_time = ["2:55","2:37","2:44","2:43",
    "2:32","3:11","2:30"]

let array_for_name = ["Intersteller","Oblivion - Trailer"
    ,"Kong: Skull Island - Rise of the King",
    "Logan Official Trailer 1 (2017) - Hugh Jackman",
    "Beauty and the Beast: Official Teaser Trailer 2",
    "Fast & Furious 8 - Official Trailer 2",
    "WONDER WOMAN - Official Trailer"
];

let start = 1;
let end = 5;


const display =(start,end) =>
{
    let result =``
    console.log("Loooooooooooooooooop");
    
    for(start; start < end; start++)
        {
            
             console.log(start + " " + end)
            result+= `<div class="each-img  ${start === end-4 ? 'selected' : ''}"> <img src="./assets/img/trailers/trailer${start}.jpg" alt="${array_for_name[start-1]}">
            <div class="trailer-info">
            <h4>${array_for_name[start-1]}</h4>
             <p>${array_for_time[start-1]}</p>
            </div>
            </div>`
        
        }
        document.querySelector(".trailer-img").innerHTML = result
//console.log(result);
}

display(start,end);


document.querySelector(".fa-chevron-down").onclick = function() {
    
    start++;
    end++;
   display(start,end);
};

document.querySelector(".fa-chevron-up").onclick = function() {
    start--;
    end--;

    if(start == 0)
    {
        start = 1;
        end = 5;
    }
   
   
   display(start,end);
};


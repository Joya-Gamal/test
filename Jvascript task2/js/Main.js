qutes=[{
    qute:"Be yourself; everyone else is already taken",
    author:"Oscar Wilde"
},
{
    qute:"So many books, so little time",
    author:"Frank Zappa"
},
{
    qute:"Be the change that you wish to see in the world.",
    author:" Mahatma Gandhi"
},
{
     qute:"To live is the rarest thing in the world. Most people exist, that is all.",
     author:"Oscar Wilde"
}]
qutegenration()
function qutegenration()
{
    var home = "";
    for(var i=0; i<qutes.length;i++)
    {
           home +=`<p class="text-black qutes text-center mt-5 >${qutes[i].qute} </p>
                   <p class="text-center qutes text-black mt-2>${qutes[i].author}</p> `;
    }
document.getElementById("x").innerHTML= home;
}

var ViedosNumber = 12;
var VideoWidth = 368;
var MaxWidth = ViedosNumber * (VideoWidth + 10) - 10 - window.innerWidth;
var Render = true;
var Click = false;

var PosFirst = 0;
var Position = 0;
var UpdatePos = true;
var Move = true;
var MoveDirectonLeft = false;
var MoveWeit = 5;
var MoveSpeed = 0.5;


if(window.innerWidth>=1440)
{


    var VideoContainer = document.querySelector(".VideoContainer");

    var Content = '';
    for(var i = 1;i<=ViedosNumber;i++)
    {
        Content += `<video class="VideoContent" width="${VideoWidth}px" height="100%" src="Video/ (${i}).mp4" controls></video>`
    }
    document.getElementById('Viedo').innerHTML = Content;

    window.addEventListener("mousedown",()=>
    {
        Click = true;
        MoveWeit = 60;
    })

    window.addEventListener("mouseup",()=>
    {
        Click = false;
        UpdatePos = true;
    })

    window.addEventListener("mousemove",(e)=>
    {   
        if(Click && !IsOnLimitValue()) 
        {
            if(UpdatePos){PosFirst = e.clientX;UpdatePos=false}
            else {Position += PosFirst - e.clientX;UpdatePos=true}
        }
        if(!IsOnLimitValue()) document.getElementById('VideoContainer').style.left = `${Position * -1}px`;
    })

    function IsOnLimitValue()
    {
        if(Position<0) {Position = 0; return true}
        if(Position>MaxWidth){Position = MaxWidth; return false}
        
        return false;
    }
    function WaitToMove()
    {
        if(MoveWeit>0)MoveWeit -= 1;
    }
    function SmothMove()
    {
        if(Move && MoveDirectonLeft && MoveWeit <= 0){Position -= MoveSpeed;}
        if(Move && !MoveDirectonLeft && MoveWeit <= 0){Position += MoveSpeed;}
        if(Position == MaxWidth || Position == 0) MoveDirectonLeft = !MoveDirectonLeft;

        if(!IsOnLimitValue()) document.getElementById('VideoContainer').style.left = `${Position * -1}px`;
    }

    setInterval(SmothMove,1)
    setInterval(WaitToMove,1000)
}
else
{
    var Content = '';
    for(var i = 1;i<=ViedosNumber;i++)
    {
        Content += `<video class="VideoContent" width="${VideoWidth}px" height="100%" src="Video/ (${i}).mp4" controls></video>`
    }
    document.getElementById('Viedo').innerHTML = Content;
}
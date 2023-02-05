canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mousedown";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offseTop;

    if (mouseEvent =="mouseDown") {
        ctx.beginPath();
        ctx.srokeStyle = color;
        ctx.lineWidth = width_of_line;


        console.log("last position of x and y cordinate =");
        console.log("x = " + last_position_of_x + "y="+  last_position_of_y);
        ctx.moveTo(current_position_of_mouse_x,current_position_of_mouse_y);
        
        console.log("current position of x and y cordinates =");
        console.log("x = " + current_position_of_x + "y="+  current_position_of_y);
        ctx.LineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;


} 


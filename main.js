canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="red";



ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth=4;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=4;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=4;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth=4;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth=4;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color=document.getElementById("color").value;

    mouse_x= e.clientX - canvas.offsetLeft;
    mouse_y= e.clientY - canvas.offsetTop;

    console.log("X and Y are " + mouse_x + mouse_y);
    circle(mouse_x, mouse_y);
}



//I am clearing the canvas

function clear_area()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

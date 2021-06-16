var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_image_heigth = 30;
block_image_width = 30;
player_object = "";
image_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    });
}
function block_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        image_object = Img;
        image_object.scaleToWidth(block_image_width);
        image_object.scaleToHeight(block_image_heigth);
        image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (e.shiftKey == true && key_pressed == "77") {
        console.log("Shift And m Pressed.Terminate");
        block_image_heigth = block_image_heigth - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_height").innerHTML = block_image_heigth;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if (e.shiftKey == true && key_pressed == "80") {
        console.log("Shift And p Pressed.Terminate");
        block_image_heigth = block_image_heigth + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_height").innerHTML = block_image_heigth;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if (key_pressed == '38') {
        up();
        console.log("Up Key is pressed.Terminated");
    }
    if (key_pressed == '40') {
        down();
        console.log("Down Key is pressed.Terminated");
    }
    if (key_pressed == '37') {
        left();
        console.log("Left Key is pressed.Terminated");
    }
    if (key_pressed == '39') {
        right();
        console.log("Right Key is pressed.Terminated");
    }
    if (key_pressed == '67') {
        block_update("cloud.jpg");
        console.log("Put Cloud Block Down");
    }
    if (key_pressed == '68') {
        block_update("dark_green.png");
        console.log("Put Dark green Block Down");
    }
    if (key_pressed == '71') {
        block_update("ground.png");
        console.log("Put Ground Block Down");
    }
    if (key_pressed == '76') {
        block_update("light_green.png");
        console.log("Put Light Green Block Down");
    }
    if (key_pressed == '82') {
        block_update("roof.jpg");
        console.log("Put Roof Block Down");
    }
    if (key_pressed == '84') {
        block_update("trunk.jpg");
        console.log("Put trunk Block Down");
    }
    if (key_pressed == '85') {
        block_update("unique.png");
        console.log("Put Glowstone Block Down");
    }
    if (key_pressed == '87') {
        block_update("wall.jpg");
        console.log("Put Brick Block Down");
    }
    if (key_pressed == '89') {
        block_update("yellow_wall.png");
        console.log("Put Yellow Brick Block Down");
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_heigth;
        console.log("The new X = " + player_x + "and New Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y <= 700) {
        player_y = player_y + block_image_heigth;
        console.log("The new X = " + player_x + "and New Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x <= 700) {
        player_x = player_x + block_image_width;
        console.log("The new X = " + player_x + "and New Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("The new X = " + player_x + "and New Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
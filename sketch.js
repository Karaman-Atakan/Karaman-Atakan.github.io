function setup(){
  createCanvas(1000, 500, WEBGL);
}

function draw(){
  background(0);

  for(var j = 0; j < 20; j++){
    push();
    for(var i = 0; i < 10; i++){
      translate(cos(frameCount * 0.005 + j) * 100, cos(frameCount * 0.005 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      torus(8, 8);
      fill(255, 255, 0);
      pop();
    }
    pop();
  }

  orbitControl();

  translate(0, 75, 0);
  push();
  rotateY(frameCount * 0.01);
  cone(90, 100);
  normalMaterial();
  pop();

  translate(0, -75, 0);
  push();
  rotateY(frameCount * -0.01);
  cone(90, -100);
  normalMaterial();
  pop();

  translate(0, 0, 0);
  push();
  rotateX(frameCount * 0.07);
  torus(170, 10);
  specularMaterial(250);
  pop();

  translate(0, 0, 0);
  push();
  rotateY(frameCount * 0.07);
  rotateX(frameCount * 0.07);
  torus(200, 10);
  specularMaterial(250);
  pop();
}

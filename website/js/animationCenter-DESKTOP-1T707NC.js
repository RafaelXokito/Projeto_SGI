
var acaoCenter = [];
var acaoTop = [];
var clipTop;
var clip;

const NUM_MESA_DIREITA = 0;
const NUM_MESA_ESQUERDA = 1;
const NUM_DIVA_MADEIRA = 2;
const NUM_DIVA_COLCHAO = 3;
const NUM_DIVA_ALMOFADA = 4;
const NUM_DIVA_COBERTOR = 5;
const NUM_LUZ_MESA_DIREITA = 6;
const NUM_CANDEEIRO_MESA_DIREITA = 7;
const NUM_BASE_CANDEEIRO_MESA_DIREITA = 8;
const NUM_LUZ_MESA_ESQUERDA = 9;
const NUM_CANDEEIRO_MESA_ESQUERDA = 10;
const NUM_BASE_CANDEEIRO_MESA_ESQUERDA = 11;
const NUM_CAMARA_ANIMATION_TOP = 12




//animation top
var cenaTop = new THREE.Scene();
var interactCanvas = document.getElementById("camaVintageCanvas");
var rendererTop = new THREE.WebGLRenderer({ canvas: interactCanvas });
rendererTop.outputEncoding = THREE.sRGBEncoding;
var camaraTop = new THREE.PerspectiveCamera(70, 800 / 600, 0.1, 500);
var camara;
var cameraLoaded = false;
var grelhaTop = new THREE.GridHelper();
var carregadorTop = new THREE.GLTFLoader();
cenaTop.add(grelhaTop);
var clockTop = new THREE.Clock();
var misturadorTop = new THREE.AnimationMixer(cenaTop);
var time;
//*animation top */

//animation center
var cena = new THREE.Scene();
var camaVintageCanvas = document.getElementById("animacaoWide");
var renderer = new THREE.WebGLRenderer({ canvas: camaVintageCanvas });
renderer.outputEncoding = THREE.sRGBEncoding;
var camara = new THREE.PerspectiveCamera(70, 800 / 600, 0.1, 1000);
var grelha = new THREE.GridHelper();
var carregador = new THREE.GLTFLoader();
cena.add(grelha);
var clock = new THREE.Clock();
var misturador = new THREE.AnimationMixer(cena);
//*animation center */

cena.background = new THREE.Color(0x332288);

var divaText = document.getElementById("actionDiva");
var divaActionText = document.getElementById("divaActionText");
divaActionText.innerHTML = "Abrir divã";

var divaPillowText = document.getElementById("actionPillowDiva");
divaPillowText.style.display = "none";
var divaPillowActionText = document.getElementById("divaPillowActionText");

var rightSideTableText = document.getElementById("actionRightSideTable");
var rightSideTableActionText = document.getElementById("rightSideTableText");

var leftSideTableText = document.getElementById("actionLeftSideTable");
var leftSideTableActionText = document.getElementById("leftSideTableText");

var divaMattressText = document.getElementById("actionMattressDiva");
divaMattressText.style.display = "none";
var divaMattressActionText = document.getElementById("divaMattressActionText");

var divaQuiltText = document.getElementById("actionQuilt");
divaQuiltText.style.display = "none";
var divaQuiltActionText = document.getElementById("divaQuiltActionText");

var popinColorDiv = document.getElementById("popin-color");
var closePopinColorDiv = document.getElementById("popin-btn-close");
var btnColorDiv = document.getElementById("filterColorContainer_324449642");

var popinColorButtons = popinColorDiv.getElementsByTagName("button");

var buttonPlayAnimationTop = document.getElementById("buttonPlayAnimationTop");

var fimAnimationTop = false;

var camaObj;
var colchaoCamaObj;
var divaObj;
var colchaoDivaObj;

var camaObjTop;
var colchaoCamaObjTop;
var divaObjTop;
var colchaoDivaObjTop;

var prevBtnSelected = document.getElementsByClassName("pdp-filter-item color-item selected")[0];
prevBtnSelected.className = "pdp-filter-item color-item";

closePopinColorDiv.addEventListener("click", popColorDivDisappear, false);
btnColorDiv.addEventListener("click", popColorDivAppear, false);

for (var i = 0; i < popinColorButtons.length; i++) {
  popinColorButtons[i].addEventListener("mouseover", popColorChange, false);
  popinColorButtons[i].addEventListener("click", popColorDivDisappear, false);
}

document.getElementById("filterColorNumber_324449642").innerHTML = "6";
var numOfColors = document.getElementById("filterColorNumber_324449642").innerHTML;

buttonPlayAnimationTop.addEventListener("click", playAnimationTop);


var elemTop = document.getElementById("myBarTop");
var heightCanvasTop = interactCanvas.offsetHeight;
interactCanvas.style.display = "none";
carregadorTop.load("bedRetroVintageAnimationCam2.gltf", function (gltf) {
  cenaTop.add(gltf.scene);
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "divanAction");
  acaoTop[NUM_DIVA_MADEIRA] = misturadorTop.clipAction(clipTop); //divan wood
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "divan-mattressAction");
  acaoTop[NUM_DIVA_COLCHAO] = misturadorTop.clipAction(clipTop); //divan colchao
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "Cubo.001Action");
  acaoTop[NUM_MESA_ESQUERDA] = misturadorTop.clipAction(clipTop); //mesa de cabedeira esquerda
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "CuboAction.003");
  acaoTop[NUM_MESA_DIREITA] = misturadorTop.clipAction(clipTop); //mesa de cabeceira direita
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "pillow.001Action.001");
  acaoTop[NUM_DIVA_ALMOFADA] = misturadorTop.clipAction(clipTop); //almofada do divan
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "Cobertor.001Action");
  acaoTop[NUM_DIVA_COBERTOR] = misturadorTop.clipAction(clipTop); //cobertor diva
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "PointAction.001");
  acaoTop[NUM_LUZ_MESA_DIREITA] = misturadorTop.clipAction(clipTop); //LUZ_MESA_DIREITA
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "CilindroAction");
  acaoTop[NUM_CANDEEIRO_MESA_DIREITA] = misturadorTop.clipAction(clipTop); //CANDEEIRO_MESA_DIREITA
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "CilindroAction.003");
  acaoTop[NUM_BASE_CANDEEIRO_MESA_DIREITA] = misturadorTop.clipAction(clipTop); //BASE_CANDEEIRO_MESA_DIREITA
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "PointAction");
  acaoTop[NUM_LUZ_MESA_ESQUERDA] = misturadorTop.clipAction(clipTop); //LUZ_MESA_ESQUERDA
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "CilindroAction.001");
  acaoTop[NUM_CANDEEIRO_MESA_ESQUERDA] = misturadorTop.clipAction(clipTop); //CANDEEIRO_MESA_ESQUERDA
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "CilindroAction.002");
  acaoTop[NUM_BASE_CANDEEIRO_MESA_ESQUERDA] = misturadorTop.clipAction(clipTop); //BASE_CANDEEIRO_MESA_ESQUERDA
  clipTop = THREE.AnimationClip.findByName(gltf.animations, "C\u00e2mara.001Action.003");
  acaoTop[NUM_CAMARA_ANIMATION_TOP] = misturadorTop.clipAction(clipTop);

  for (var i = 0; i < acaoTop.length; i++) {
    if (acaoTop[i] == undefined)
      continue;
    acaoTop[i].clampWhenFinished = true;
    acaoTop[i].setLoop(THREE.LoopOnce);
  }

  gltf.scene.traverse(function (child) {
    if (child.isMesh && child.name == "bed-structure") {
      camaObjTop = child;
    }
    if (child.isMesh && child.name == "divan") {
      divaObjTop = child;
    }
    if (child.isMesh && child.name == "bed-mattress") {
      colchaoCamaObjTop = child;
    }
    if (child.isMesh && child.name == "divan-mattress") {
      colchaoDivaObjTop = child;
    }
  });
  changeColorBed("Rosa");

}, function (xhr) {
  if ((xhr.loaded / xhr.total * 100) == 100) {
    document.getElementById("myProgressTop").parentElement.style.display = "none";
    interactCanvas.style.display = "block";
    interactCanvas.style.height = heightCanvasTop + "px";
  }
  elemTop.innerHTML = "A carregar a animação (" + parseInt(xhr.loaded / xhr.total * 100) + "%)";
  elemTop.style.width = (xhr.loaded / xhr.total * 100) + "%";
  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
});
var elem = document.getElementById("myBar");
var heightCanvas = camaVintageCanvas.offsetHeight;
camaVintageCanvas.style.display = "none";
carregador.load("bedRetroVintageAnimation.gltf", function (gltf) {
  cena.add(gltf.scene);
  clip = THREE.AnimationClip.findByName(gltf.animations, "divanAction");
  acaoCenter[NUM_DIVA_MADEIRA] = misturador.clipAction(clip); //divan wood
  clip = THREE.AnimationClip.findByName(gltf.animations, "divan-mattressAction");
  acaoCenter[NUM_DIVA_COLCHAO] = misturador.clipAction(clip); //divan colchao
  clip = THREE.AnimationClip.findByName(gltf.animations, "Cubo.001Action");
  acaoCenter[NUM_MESA_ESQUERDA] = misturador.clipAction(clip); //mesa de cabedeira esquerda
  clip = THREE.AnimationClip.findByName(gltf.animations, "CuboAction.003");
  acaoCenter[NUM_MESA_DIREITA] = misturador.clipAction(clip); //mesa de cabeceira direita
  clip = THREE.AnimationClip.findByName(gltf.animations, "pillow.001Action.001");
  acaoCenter[NUM_DIVA_ALMOFADA] = misturador.clipAction(clip); //almofada do divan
  clip = THREE.AnimationClip.findByName(gltf.animations, "Cobertor.001Action");
  acaoCenter[NUM_DIVA_COBERTOR] = misturador.clipAction(clip); //cobertor diva
  clip = THREE.AnimationClip.findByName(gltf.animations, "PointAction.001");
  acaoCenter[NUM_LUZ_MESA_DIREITA] = misturador.clipAction(clip); //LUZ_MESA_DIREITA
  clip = THREE.AnimationClip.findByName(gltf.animations, "CilindroAction");
  acaoCenter[NUM_CANDEEIRO_MESA_DIREITA] = misturador.clipAction(clip); //CANDEEIRO_MESA_DIREITA
  clip = THREE.AnimationClip.findByName(gltf.animations, "CilindroAction.003");
  acaoCenter[NUM_BASE_CANDEEIRO_MESA_DIREITA] = misturador.clipAction(clip); //BASE_CANDEEIRO_MESA_DIREITA
  clip = THREE.AnimationClip.findByName(gltf.animations, "PointAction");
  acaoCenter[NUM_LUZ_MESA_ESQUERDA] = misturador.clipAction(clip); //LUZ_MESA_ESQUERDA
  clip = THREE.AnimationClip.findByName(gltf.animations, "CilindroAction.001");
  acaoCenter[NUM_CANDEEIRO_MESA_ESQUERDA] = misturador.clipAction(clip); //CANDEEIRO_MESA_ESQUERDA
  clip = THREE.AnimationClip.findByName(gltf.animations, "CilindroAction.002");
  acaoCenter[NUM_BASE_CANDEEIRO_MESA_ESQUERDA] = misturador.clipAction(clip); //BASE_CANDEEIRO_MESA_ESQUERDA

  for (var i = 0; i < acaoCenter.length; i++) {
    if (acaoCenter[i] == undefined)
      continue;
    acaoCenter[i].clampWhenFinished = true;
    acaoCenter[i].setLoop(THREE.LoopOnce);
  }

  gltf.scene.traverse(function (child) {
    if (child.isMesh && child.name == "bed-structure") {
      camaObj = child;
    }
    if (child.isMesh && child.name == "divan") {
      divaObj = child;
    }
    if (child.isMesh && child.name == "bed-mattress") {
      colchaoCamaObj = child;
    }
    if (child.isMesh && child.name == "divan-mattress") {
      colchaoDivaObj = child;
    }
  });
  changeColorBed("Rosa");
}, function (xhr) {
  if ((xhr.loaded / xhr.total * 100) == 100) {
    document.getElementById("myProgress").style.display = "none";
    camaVintageCanvas.style.display = "block";
    camaVintageCanvas.style.height = heightCanvas + "px";
  }
  elem.innerHTML = "A carregar a animação (" + parseInt(xhr.loaded / xhr.total * 100) + "%)";
  elem.style.width = (xhr.loaded / xhr.total * 100) + "%";
  console.log((xhr.loaded / xhr.total * 100) + '% loaded');

}, function (error) {

  console.error(error);

});



divaText.addEventListener("click", actionDiva, false);
divaPillowText.addEventListener("click", actionPillowDiva, false);
rightSideTableText.addEventListener("click", actionRightSideTable, false);
leftSideTableText.addEventListener("click", actionLeftSideTable, false);
divaMattressText.addEventListener("click", actionMattressDiva, false);
divaQuiltText.addEventListener("click", actionQuiltDiva, false);

//Camarã do centro
camara.position.x = 120;
camara.position.y = 80;
camara.position.z = 140;
camara.lookAt(0, 0, 0);


var controlos = new THREE.OrbitControls(camara, renderer.domElement);
controlos.minDistance = 160;
controlos.maxDistance = 280;

var luzPontoDireita = new THREE.PointLight(0x404040);
luzPontoDireita.position.set(-79.162, 90, 75);
cenaTop.add(luzPontoDireita);
cena.add(luzPontoDireita);

var luzPontoAmbienteTop = new THREE.AmbientLight(0xffffff);
luzPontoAmbienteTop.intensity = 0.4;
cenaTop.add(luzPontoAmbienteTop);

var luzPontoAmbienteCentro = new THREE.AmbientLight(0xffffff);
luzPontoAmbienteCentro.position.set(209.45, -64.89, 346.36);
luzPontoAmbienteCentro.intensity = 0.6;
luzPontoAmbienteCentro.isAmbientLight = true;
cena.add(luzPontoAmbienteCentro);



controlos.addEventListener("change", renderizar);

const positions = [
  [100, 70, 200],
  [100, 70, -200]
];
let currPosition = 0;

const camera2 = (_ => {
  const camera2 = new THREE.PerspectiveCamera(70, 800 / 600, 0.1, 500);
  camera2.position.set(...positions[currPosition]);
  camera2.lookAt(cenaTop.position);
  return camera2;
})();


//Camarã do topo
/*camera2.position.x = 200;
camera2.position.y = 90;
camera2.position.z = 140;
camera2.lookAt(0, 0, 0);*/

renderizar();

renderizarTop();

animar();

animarTop();

render();

renderTop();

function renderizar() {
  renderer.render(cena, camara);
}

function renderizarTop() {
  rendererTop.render(cenaTop, camera2);
}

function animar() {
  requestAnimationFrame(animar);
  misturador.update(clock.getDelta());
  renderizar();
}

function animarTop() {
  misturadorTop.update(clockTop.getDelta());
  renderizarTop();
  requestAnimationFrame(animarTop);
  TWEEN.update();
  camera2.lookAt(cenaTop.position);
  rendererTop.render(cenaTop, camera2);
}

function render() {
  if (resize(renderer)) {
    camara.aspect = camaVintageCanvas.clientWidth / camaVintageCanvas.clientHeight;
    camara.updateProjectionMatrix();
  }
  renderer.render(cena, camara);
  requestAnimationFrame(render);
}

function renderTop() {
  if (resizeTop(rendererTop)) {
    camera2.aspect = interactCanvas.clientWidth / interactCanvas.clientHeight;
    camera2.updateProjectionMatrix();
  }
  rendererTop.render(cenaTop, camera2);
  requestAnimationFrame(renderTop);
}

function resizeTop(renderer) {
  camera2.aspect = innerWidth / innerHeight;
  camera2.updateProjectionMatrix();
  rendererTop.setSize(innerWidth, innerHeight);

  const interactCanvas = renderer.domElement;
  const width = interactCanvas.clientWidth;
  const height = interactCanvas.clientHeight;
  const needResize = interactCanvas.width !== width || interactCanvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function resize(renderer) {
  const camaVintageCanvas = renderer.domElement;
  const width = camaVintageCanvas.clientWidth;
  const height = camaVintageCanvas.clientHeight;
  const needResize = camaVintageCanvas.width !== width || camaVintageCanvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function tweenCamera(camera, position, duration) {        
  new TWEEN.Tween(camera.position).to({
    x: position[0],
    y: position[1],
    z: position[2]
  }, duration)
  .easing(TWEEN.Easing.Quadratic.InOut)
  .start();
}



function actionDiva(event) {
  if (acaoCenter[NUM_DIVA_MADEIRA] !== null && divaActionText.innerHTML !== "Fechar divã") {
    if (leftSideTableActionText.innerHTML === "Tirar mesa de cabeceira esq.")
      setTimeout(actionLeftSideTable(), 1000);

    for (var i = NUM_DIVA_MADEIRA; i < NUM_DIVA_COLCHAO + 1; i++) {
      acaoCenter[i].reset();
      acaoCenter[i].timeScale = 1;
      acaoCenter[i].time = 0.5;
      acaoCenter[i].setLoop(THREE.LoopOnce);
      acaoCenter[i].clampWhenFinished = true;
      acaoCenter[i].play();
    }


    divaPillowText.style.display = "block";
    divaMattressText.style.display = "block";
    leftSideTableText.style.display = "none";
    divaActionText.innerHTML = "Fechar divã";
    return;
  }
  if (acaoCenter[NUM_DIVA_MADEIRA] !== null && divaActionText.innerHTML !== "Abrir divã") {
    for (var i = NUM_DIVA_MADEIRA; i < NUM_DIVA_COLCHAO + 1; i++) {
      if (acaoCenter[i].time === 0) {
        acaoCenter[i].time = acaoCenter[i].getClip().duration;
      }

      acaoCenter[i].paused = false;
      acaoCenter[i].setLoop(THREE.LoopOnce);
      acaoCenter[i].timeScale = -1;
      acaoCenter[i].play();
    }
    if (divaPillowActionText.innerHTML === "Tirar almofada no divã")
      actionPillowDiva();

    divaPillowText.style.display = "none";
    divaMattressText.style.display = "none";
    leftSideTableText.style.display = "block";
    divaActionText.innerHTML = "Abrir divã";
    return;
  }
}

function actionMattressDiva(event) {
  if (
    acaoCenter[NUM_DIVA_MADEIRA].time !== 0 &&
    divaActionText.innerHTML === "Fechar divã" &&
    divaMattressActionText.innerHTML === "Tirar colchão do divã"
  ) {
    colchaoDivaObj.visible = false;
    divaPillowText.style.display = "none";
    divaMattressActionText.innerHTML = "Meter colchão do divã";
    return;
  }
  if (
    acaoCenter[NUM_DIVA_MADEIRA].time !== 0 &&
    divaActionText.innerHTML === "Fechar divã" &&
    divaMattressActionText.innerHTML === "Meter colchão do divã" &&
    divaPillowActionText.innerHTML === "Meter almofada no divã"
  ) {
    colchaoDivaObj.visible = true;
    divaPillowText.style.display = "block";
    divaMattressActionText.innerHTML = "Tirar colchão do divã";
  }
}

function actionQuiltDiva(event) {
  if (
    acaoCenter[NUM_DIVA_MADEIRA].time !== 0 &&
    divaActionText.innerHTML === "Fechar divã" &&
    divaPillowActionText.innerHTML === "Tirar almofada no divã" &&
    divaMattressActionText.innerHTML === "Tirar colchão do divã" &&
    divaQuiltActionText.innerHTML === "Meter colcha na cama"
  ) {
    acaoCenter[NUM_DIVA_COBERTOR].reset();
    acaoCenter[NUM_DIVA_COBERTOR].timeScale = 1;
    acaoCenter[NUM_DIVA_COBERTOR].time = 2.5;
    acaoCenter[NUM_DIVA_COBERTOR].setLoop(THREE.LoopOnce);
    acaoCenter[NUM_DIVA_COBERTOR].clampWhenFinished = true;
    acaoCenter[NUM_DIVA_COBERTOR].play();

    divaPillowText.style.display = "none";
    divaQuiltActionText.innerHTML = "Tirar colcha na cama";
    return;
  }
  if (
    acaoCenter[NUM_DIVA_MADEIRA].time !== 0 &&
    divaActionText.innerHTML === "Fechar divã" &&
    divaQuiltActionText.innerHTML === "Tirar colcha na cama"
  ) {
    if (acaoCenter[NUM_DIVA_COBERTOR].time === 0) {
      acaoCenter[NUM_DIVA_COBERTOR].time = acaoCenter[NUM_DIVA_COBERTOR].getClip().duration;
    }

    acaoCenter[NUM_DIVA_COBERTOR].paused = false;
    acaoCenter[NUM_DIVA_COBERTOR].setLoop(THREE.LoopOnce);
    acaoCenter[NUM_DIVA_COBERTOR].timeScale = -1;
    acaoCenter[NUM_DIVA_COBERTOR].play();
    divaPillowText.style.display = "block";
    divaQuiltActionText.innerHTML = "Meter colcha na cama";
  }
}

function actionPillowDiva(event) {
  if (
    acaoCenter[NUM_DIVA_MADEIRA].time !== 0 &&
    divaActionText.innerHTML === "Fechar divã" &&
    divaPillowActionText.innerHTML === "Meter almofada no divã" &&
    divaMattressActionText.innerHTML === "Tirar colchão do divã"
  ) {
    acaoCenter[NUM_DIVA_ALMOFADA].reset();
    acaoCenter[NUM_DIVA_ALMOFADA].timeScale = 1;
    acaoCenter[NUM_DIVA_ALMOFADA].time = 2;
    acaoCenter[NUM_DIVA_ALMOFADA].setLoop(THREE.LoopOnce);
    acaoCenter[NUM_DIVA_ALMOFADA].clampWhenFinished = true;
    acaoCenter[NUM_DIVA_ALMOFADA].play();

    divaMattressText.style.display = "none";
    divaQuiltText.style.display = "block";
    divaPillowActionText.innerHTML = "Tirar almofada no divã";
    return;
  }
  if (
    acaoCenter[NUM_DIVA_MADEIRA].time !== 0 &&
    divaActionText.innerHTML === "Fechar divã" &&
    divaPillowActionText.innerHTML === "Tirar almofada no divã"
  ) {
    if (acaoCenter[NUM_DIVA_ALMOFADA].time === 0) {
      acaoCenter[NUM_DIVA_ALMOFADA].time = acaoCenter[NUM_DIVA_ALMOFADA].getClip().duration;
    }

    acaoCenter[NUM_DIVA_ALMOFADA].paused = false;
    acaoCenter[NUM_DIVA_ALMOFADA].setLoop(THREE.LoopOnce);
    acaoCenter[NUM_DIVA_ALMOFADA].timeScale = -1;
    acaoCenter[NUM_DIVA_ALMOFADA].play();
    divaMattressText.style.display = "block";
    divaQuiltText.style.display = "none";
    divaPillowActionText.innerHTML = "Meter almofada no divã";
  }
}

function actionRightSideTable(event) {
  if (rightSideTableActionText.innerHTML === "Tirar mesa de cabeceira dir.") {
    acaoCenter[NUM_MESA_DIREITA].reset();
    acaoCenter[NUM_MESA_DIREITA].timeScale = 1;
    acaoCenter[NUM_MESA_DIREITA].setLoop(THREE.LoopOnce);
    acaoCenter[NUM_MESA_DIREITA].clampWhenFinished = true;
    acaoCenter[NUM_MESA_DIREITA].play();

    for (let index = NUM_LUZ_MESA_DIREITA; index < NUM_BASE_CANDEEIRO_MESA_DIREITA + 1; index++) {
      acaoCenter[index].reset();
      acaoCenter[index].timeScale = 1;
      acaoCenter[index].setLoop(THREE.LoopOnce);
      acaoCenter[index].clampWhenFinished = true;
      acaoCenter[index].play();
    }

    rightSideTableActionText.innerHTML = "Meter mesa de cabeceira dir.";
    return;
  }
  if (rightSideTableActionText.innerHTML === "Meter mesa de cabeceira dir.") {
    if (acaoCenter[NUM_MESA_DIREITA].time === 0) {
      acaoCenter[NUM_MESA_DIREITA].time = acaoCenter[NUM_DIVA_ALMOFADA].getClip().duration;
    }

    acaoCenter[NUM_MESA_DIREITA].paused = false;
    acaoCenter[NUM_MESA_DIREITA].setLoop(THREE.LoopOnce);
    acaoCenter[NUM_MESA_DIREITA].timeScale = -1;
    acaoCenter[NUM_MESA_DIREITA].play();

    for (let index = NUM_LUZ_MESA_DIREITA; index < NUM_BASE_CANDEEIRO_MESA_DIREITA + 1; index++) {
      acaoCenter[index].paused = false;
      acaoCenter[index].setLoop(THREE.LoopOnce);
      acaoCenter[index].timeScale = -1;
      acaoCenter[index].play();
    }

    rightSideTableActionText.innerHTML = "Tirar mesa de cabeceira dir.";
  }
}

function actionLeftSideTable(event) {
  if (
    acaoCenter[NUM_DIVA_MADEIRA].time === 0 &&
    divaActionText.innerHTML === "Abrir divã" &&
    leftSideTableActionText.innerHTML === "Tirar mesa de cabeceira esq."
  ) {
    acaoCenter[NUM_MESA_ESQUERDA].reset();
    acaoCenter[NUM_MESA_ESQUERDA].timeScale = 1;
    acaoCenter[NUM_MESA_ESQUERDA].setLoop(THREE.LoopOnce);
    acaoCenter[NUM_MESA_ESQUERDA].clampWhenFinished = true;
    acaoCenter[NUM_MESA_ESQUERDA].play();
    for (let index = NUM_LUZ_MESA_ESQUERDA; index < NUM_BASE_CANDEEIRO_MESA_ESQUERDA + 1; index++) {
      acaoCenter[index].reset();
      acaoCenter[index].timeScale = 1;
      acaoCenter[index].setLoop(THREE.LoopOnce);
      acaoCenter[index].clampWhenFinished = true;
      acaoCenter[index].play();
    }
    leftSideTableActionText.innerHTML = "Meter mesa de cabeceira esq.";
    return;
  }
  if (
    acaoCenter[NUM_DIVA_MADEIRA].time === 0 &&
    divaActionText.innerHTML === "Abrir divã" &&
    leftSideTableActionText.innerHTML === "Meter mesa de cabeceira esq."
  ) {
    if (acaoCenter[NUM_MESA_ESQUERDA].time === 0) {
      acaoCenter[NUM_MESA_ESQUERDA].time = acaoCenter[NUM_MESA_ESQUERDA].getClip().duration;
    }

    acaoCenter[NUM_MESA_ESQUERDA].paused = false;
    acaoCenter[NUM_MESA_ESQUERDA].setLoop(THREE.LoopOnce);
    acaoCenter[NUM_MESA_ESQUERDA].timeScale = -1;
    acaoCenter[NUM_MESA_ESQUERDA].play();

    for (let index = NUM_LUZ_MESA_ESQUERDA; index < NUM_BASE_CANDEEIRO_MESA_ESQUERDA + 1; index++) {
      acaoCenter[index].paused = false;
      acaoCenter[index].setLoop(THREE.LoopOnce);
      acaoCenter[index].timeScale = -1;
      acaoCenter[index].play();
    }

    leftSideTableActionText.innerHTML = "Tirar mesa de cabeceira esq.";
  }
}

function popColorDivAppear(event) {
  popinColorDiv.style.display = "block";
}

popinColorDiv.addEventListener(
  "click",
  function (evt) {
    var inside = document.getElementById("popin-color-container");
    if (!inside.contains(evt.target)) {
      popColorDivDisappear();
    }
  },
  false
);

function popColorDivDisappear(event) {
  popinColorDiv.style.display = "none";
}

function popColorChange(event) {
  var btn = event.target;

  while (btn.nodeName !== "BUTTON") {
    btn = btn.parentElement;
  }

  var prevBtnSelected = document.getElementsByClassName("pdp-filter-item color-item selected")[0];
  prevBtnSelected.className = "pdp-filter-item color-item";
  btn.className = btn.className + " selected";

  var buttonColor = document.getElementsByClassName("pdp-filter-label custom-dropdown-header text-ellipsis")[0]

  buttonColor.getElementsByTagName("span")[0].innerHTML = btn.title;
  buttonColor.getElementsByTagName("img")[0].src = btn.getElementsByClassName("pdp-filter-thumbnail")[0].getElementsByTagName("img")[0].src;

  changeColorBed(btn.title);
}

function changeColorBed(name) {
  switch (name) {
    case "Branco":
      document.getElementsByClassName("item active")[0].getElementsByTagName("img")[0].src = "https://cdn.laredoute.com/products/362by362/f/4/8/f48a1cd6ea1085fd3649aaf52747b42d.jpg";
      document.getElementsByClassName("item active")[0].getElementsByTagName("img")[0].style.width = "100%";
      document.getElementById("imgSide1").src = "https://cdn.laredoute.com/products/362by362/f/4/8/f48a1cd6ea1085fd3649aaf52747b42d.jpg";
      updateColor(divaObj, "FFFFFF");
      updateColor(camaObj, "FFFFFF");
      updateColor(divaObjTop, "FFFFFF");
      updateColor(camaObjTop, "FFFFFF");
      break;
    case "Rosa":
      document.getElementsByClassName("item active")[0].getElementsByTagName("img")[0].src = "https://cdn.laredoute.com/products/680by680/f/5/4/f54db04ebc8d37dd5929fefbb077aead.jpg";
      document.getElementById("imgSide1").src = "https://cdn.laredoute.com/products/72by72/f/5/4/f54db04ebc8d37dd5929fefbb077aead.jpg";
      updateColor(divaObj, "b39093");
      updateColor(camaObj, "b39093");
      updateColor(divaObjTop, "b39093");
      updateColor(camaObjTop, "b39093");
      break;
    case "Cinzento":
      document.getElementsByClassName("item active")[0].getElementsByTagName("img")[0].src = "https://cdn.laredoute.com/products/680by680/6/5/f/65f8e1a4cae5c903bfac056fd3dabd50.jpg";
      document.getElementById("imgSide1").src = "https://cdn.laredoute.com/products/72by72/6/5/f/65f8e1a4cae5c903bfac056fd3dabd50.jpg";
      updateColor(divaObj, "a3a3a5");
      updateColor(camaObj, "a3a3a5");
      updateColor(divaObjTop, "a3a3a5");
      updateColor(camaObjTop, "a3a3a5");
      break;
    case "Verde-acinzentado":
      document.getElementsByClassName("item active")[0].getElementsByTagName("img")[0].src = "https://cdn.laredoute.com/products/680by680/c/e/c/cecca46b89333d64b027f6767258ce57.jpg";
      document.getElementById("imgSide1").src = "https://cdn.laredoute.com/products/72by72/c/e/c/cecca46b89333d64b027f6767258ce57.jpg";
      updateColor(divaObj, "6e8381");
      updateColor(camaObj, "6e8381");
      updateColor(divaObjTop, "6e8381");
      updateColor(camaObjTop, "6e8381");
      break;
    case "Estampado-malhado":
      document.getElementsByClassName("item active")[0].getElementsByTagName("img")[0].src = "http://" + document.location.host + "/" + "Images/cowbed680.png";
      document.getElementById("imgSide1").src = "http://" + document.location.host + "/" + "Images/cowbed680.png";
      new THREE.TextureLoader().load(
        "http://" + document.location.host + "/" + "Images/cow_print.png",
        texture => {
          //Update Texture
          divaObj.material.map = texture;
          divaObj.material.needsUpdate = true;
          camaObj.material.map = texture;
          camaObj.material.needsUpdate = true;
          divaObjTop.material.map = texture;
          divaObjTop.material.needsUpdate = true;
          camaObjTop.material.map = texture;
          camaObjTop.material.needsUpdate = true;
        },
        xhr => {
          //Download Progress
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        error => {
          //Error CallBack
          console.log("An error happened" + error);
        }
      );
      break;
    case "Estampado-girafa":
      document.getElementsByClassName("item active")[0].getElementsByTagName("img")[0].src = "http://" + document.location.host + "/" + "Images/girrafebed680.png";
      document.getElementById("imgSide1").src = "http://" + document.location.host + "/" + "Images/girrafebed680.png";
      new THREE.TextureLoader().load(
        "http://" + document.location.host + "/" + "Images/giraffe_print.jpg",
        texture => {
          //Update Texture
          divaObj.material.map = texture;
          divaObj.material.needsUpdate = true;
          camaObj.material.map = texture;
          camaObj.material.needsUpdate = true;
          divaObjTop.material.map = texture;
          divaObjTop.material.needsUpdate = true;
          camaObjTop.material.map = texture;
          camaObjTop.material.needsUpdate = true;
        },
        xhr => {
          //Download Progress
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        error => {
          //Error CallBack
          console.log("An error happened" + error);
        }
      );
      break;
  }
}

function updateColor(object, color) {
  if (object) {
    object.material.color.setHex("0x" + color);
    object.material.map = null;
    object.material.needsUpdate = true;
  }
}

function playAnimationTop() {
  if (document.getElementById("buttonPlayAnimationTop").getElementsByTagName("img")[0].src == "http://" + document.location.host + "/" + "Icons_SVG/playicon_4013500.png") {
    document.getElementById("buttonPlayAnimationTop").getElementsByTagName("img")[0].src = "Icons_SVG/pauseicon_4862832.png";

    for (var i = 0; i < acaoTop.length; i++) {
      if (acaoTop[i] == undefined)
        continue;
      acaoTop[i].paused = false;
      if (fimAnimationTop == true) {
        acaoTop[i].stop();
      }
      acaoTop[i].play();
      currPosition = currPosition === 0 ? 1 : 0;
      tweenCamera(camera2, positions[currPosition], 3000);
    }
    fimAnimationTop = false;
  }
  else {
    document.getElementById("buttonPlayAnimationTop").getElementsByTagName("img")[0].src = "Icons_SVG/playicon_4013500.png";
    for (var i = 0; i < acaoTop.length; i++) {
      if (acaoTop[i] == undefined)
        continue;
      fimAnimationTop = false;
      acaoTop[i].paused = true;
    }
  }
}

misturadorTop.addEventListener('finished', function (e) {
  if (e.action.getClip().name == acaoTop[NUM_DIVA_COBERTOR].getClip().name) {
    for (var i = 0; i < acaoTop.length; i++) {
      if (acaoTop[i] == undefined)
        continue;
      fimAnimationTop = true;
      acaoTop[i].paused = true;
    }
    document.getElementById("buttonPlayAnimationTop").getElementsByTagName("img")[0].src = "Icons_SVG/playicon_4013500.png";
  }
});

function updateBackground() {
  var
    hr = (new Date()).getHours();
  if (hr > 5 && hr < 8) {
    cena.background = new THREE.Color(0xcbb3f5);
    cenaTop.background = new THREE.Color(0xcbb3f5);
  } else if (hr < 18) {
    cena.background = new THREE.TextureLoader().load('Images/sky.jpg');
    cenaTop.background = new THREE.Color(0x7dafff);
  } else if (hr < 20) {
    cena.background = new THREE.Color(0xbf3e17);
    cenaTop.background = new THREE.Color(0xbf3e17);
  } else {
    cena.background = new THREE.Color(0x141675);
    cenaTop.background = new THREE.Color(0x141675);
  }
}

setInterval(updateBackground, 1000 * 60);
updateBackground();



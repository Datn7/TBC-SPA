var canvas = document.getElementById("renderCanvas");

if (canvas) {
  var engine = null;
  var scene = null;
  var sceneToRender = null;

  var createDefaultEngine = function () {
    return new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });
  };

  var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4();

    //Adding a light
    var light = new BABYLON.PointLight(
      "Omni",
      new BABYLON.Vector3(20, 20, 100),
      scene
    );

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      90,
      1.1,
      20,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, false);

    // The first parameter can be used to specify which mesh to import. Here we import all meshes
    BABYLON.SceneLoader.ImportMesh("", "/assets/", "tbc.obj", scene, function (
      newMeshes
    ) {
      // Set the target of the camera to the first imported mesh
      camera.target = newMeshes[0];
    });

    // Move the light with the camera
    scene.registerBeforeRender(function () {
      light.position = camera.position;
    });

    return scene;
  };

  engine = createDefaultEngine();
  if (!engine) throw "engine should not be null.";
  scene = createScene();
  sceneToRender = scene;

  engine.runRenderLoop(function () {
    if (sceneToRender) {
      sceneToRender.render();
    }
  });
}

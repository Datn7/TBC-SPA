var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 1, 1.1, new BABYLON.Vector3(0, 0, 0), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    var mymat = new BABYLON.StandardMaterial("myMaterial", scene);
	mymat.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Datn7/myMeshes/master/yumbaraFBX_lambert1_BaseColor.png", scene);
    mymat.specularTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Datn7/myMeshes/master/yumbaraFBX_lambert1_Roughness.png", scene);
    mymat.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Datn7/myMeshes/master/yumbaraFBX_lambert1_Normal.png", scene);
   

    BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/Datn7/myMeshes/master/", "grenade.babylon", scene, function(newMeshes){
        var mymesh = newMeshes[0];
        mymesh.material = mymat;
    });
    
    
    
    return scene;

};
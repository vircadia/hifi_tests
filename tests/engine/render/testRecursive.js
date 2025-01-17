// This is an automatically generated file, created by nitpick
PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/branchUtils.js";
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);

if (typeof depth === 'undefined') {
   depth = 0;
   nitpick = createNitpick(Script.resolvePath("."));
   testsRootPath = nitpick.getTestsRootPath();

   nitpick.enableRecursive();
   nitpick.enableAuto();
} else {
   depth++
}

Script.include(testsRootPath + "engine/render/textures/testRecursive.js");
Script.include(testsRootPath + "engine/render/shadows/testRecursive.js");
Script.include(testsRootPath + "engine/render/mesh/testRecursive.js");
Script.include(testsRootPath + "engine/render/material/testRecursive.js");
Script.include(testsRootPath + "engine/render/lod/testRecursive.js");
Script.include(testsRootPath + "engine/render/lighting/testRecursive.js");
Script.include(testsRootPath + "engine/render/geometry/testRecursive.js");
Script.include(testsRootPath + "engine/render/effect/testRecursive.js");
Script.include(testsRootPath + "engine/render/camera/testRecursive.js");

if (depth > 0) {
   depth--;
} else {
   nitpick.runRecursive();
}


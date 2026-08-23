/* ============================================================================
 * Webslime · USER CONFIG
 * ----------------------------------------------------------------------------
 * This file is NOT minified by the build. After deploying to Cloudflare Pages,
 * you can edit this file directly to change UI text — no rebuild needed.
 * Just edit → save → refresh the page.
 * ==========================================================================*/
window.HANDSYNTH_CONFIG = {
  /* --------------------------------------------------------------------------
   * UI TEXT
   * Keep the keys unchanged; only edit the string values.
   * ------------------------------------------------------------------------*/
  text: {
    /* ---- Nameplate / Header ---- */
    brandName: "WEBSLIME!",
    brandSub: "Finger Plane Filter · <3",
    ledPower: "PWR",
    ledHands: "HANDS",
    ledPlanes: "PLANES",
    standby: "STANDBY",

    /* ---- Scope Screen ---- */
    scopeTitle: "SCOPE · SIGNAL MONITOR",
    scopeSignal: "SIGNAL",
    scopeMirrored: "MIRRORED",
    scopeFile: "FILE",
    idleHint: "SIGNAL IN · CONNECT CAMERA TO BEGIN",
    btnPowerOn: "POWER ON · START CAMERA",
    btnLoadingModel: "LOADING MODEL…",
    btnProcessVideo: "OR PROCESS A VIDEO FILE",
    errCameraDenied:
      "ERR-401 · Camera access denied. Allow camera permission in your browser address bar, then retry.",
    errModelLoad:
      "ERR-500 · Failed to load the hand-tracking model. Check your network and refresh.",
    idleDescription:
      "Raise both hands toward the camera. Selected fingertips form planes, each routable to a different filter. All processing stays local, nothing is uploaded.",
    hintNoHands: "NO HANDS DETECTED · RAISE BOTH HANDS",
    hintOneHand: "1 HAND DETECTED · RAISE THE OTHER HAND TO FORM PLANES",

    /* ---- Toolbar Under Screen ---- */
    btnPowerOff: "POWER OFF",
    btnLoadVideo: "LOAD VIDEO FILE",
    btnChangeVideo: "CHANGE VIDEO",
    btnRecStart: "REC · EXPORT",
    btnRecStop: "STOP · SAVE WEBM",
    recording: "RECORDING",
    skeletonOverlay: "SKELETON OVERLAY",

    /* ---- Control Panel Modules ---- */
    moduleFingerSelect: "FINGER SELECT",
    fingerThumb: "THUMB",
    fingerIndex: "INDEX",
    fingerMiddle: "MIDDLE",
    fingerRing: "RING",
    fingerPinky: "PINKY",
    fingersLabel: "FINGERS",
    planesLabel: "PLANES (ADJACENT TIP PAIRS)",
    singleHandLabel: "Single Hand Mode",
    singleHandOn: "1-HAND",
    singleHandOff: "2-HAND",
    modulePlaneRouting: "PLANE ROUTING",
    moduleFxParams: "FX PARAMS",
    paramIntensity: "Intensity",
    paramOpacity: "Opacity",
    paramHueShift: "Hue Shift",
    thermalPalette: "Thermal Palette · Cold → Hot",
    thermalFlowLabel: "Color Flow · Cycle",
    thermalFlowOn: "FLOW ON",
    thermalFlowOff: "FLOW OFF",
    thermalFlowTime: "Flow Time",
    moduleWireframe: "WIREFRAME",
    paramHue: "Hue",
    paramSaturation: "Saturation",
    paramEdge: "Edge Feather",
    edgeSharp: "SHARP",
    paramGlow: "Neon Glow",
    applyAllLabel: "ALL",
    applyAllTitle: "Apply this hue to all planes",
    wireframeHidden: "WIREFRAME HIDDEN",
    wireframeColor: "CURRENT WIREFRAME COLOR",
    moduleSignalFlow: "SIGNAL FLOW",
    signalFlowText:
      "CAM/FILE → MEDIAPIPE (21×2 LANDMARKS) → FINGER SELECT → QUAD PLANES → RGBA MASK → PER-PLANE GLSL FX → OUT/REC",

    /* ---- Filters & Parameter Labels ---- */
    filters: [
      { code: "CH-01", name: "GLITCH", pa: "Tear Amt", pb: "Noise" },
      { code: "CH-02", name: "FEEDBACK", pa: "Rotation", pb: "Decay" },
      { code: "CH-03", name: "RGB SPLIT", pa: "Shift Dist", pb: "Pulse" },
      { code: "CH-04", name: "PIXELATE", pa: "Block Size", pb: "Levels" },
      { code: "CH-05", name: "NEWSPRINT", pa: "Dot Density", pb: "Contrast" },
      { code: "CH-06", name: "THERMAL", pa: "Smoothness", pb: "Heat Noise" },
    ],

    /* ---- Manual Section ---- */
    manualTitle: "MANUAL · HOW IT WORKS × TOUCHDESIGNER",
    manual1Title: "01 · HAND TRACKING & FINGER SELECT",
    manual1Body:
      "MediaPipe HandLandmarker outputs 21 normalized landmarks per hand! The equivalent of the CHOP channels produced by the MediaPipe plugin in TouchDesigner. Fingertips are freely selectable: thumb + index alone yields a single plane, like filtering channels in a Script CHOP.",
    manual2Title: "02 · PLANES & RGBA MASK ROUTING",
    manual2Body:
      "Adjacent selected fingertips pair up into quad planes, each written into one of the R/G/B/A channels of a mask texture...like compositing four Render TOPs into a single RGBA mask in TD, so every plane can be routed to its own filter.",
    manual3Title: "03 · PER-PLANE FILTERS",
    manual3Body:
      "A GLSL fragment shader applies six filters per channel mask (Glitch / Feedback / RGB Split / Pixelate / Newsprint halftone / Thermal palette), each with independent intensity, opacity, two dedicated parameters and a hue shift! Mapping to GLSL TOP uniform arrays plus a ping-pong Feedback TOP in TD.",

    /* ---- Footer ---- */
    footerLeft: "WEBSLIME! · LOCAL PROCESSING ONLY",
    footerRight: "MEDIAPIPE × WEBGL · TOUCHDESIGNER REFERENCE BUILD",
  },
};
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-7a77ea84.mjs";
import require$$0 from "react";
import { u as utils, p as patterns } from "./index-2696ed2b.mjs";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Facebook_exports = {};
__export(Facebook_exports, {
  default: () => Facebook
});
var Facebook_1 = __toCommonJS(Facebook_exports);
var import_react2 = __toESM(require$$0);
var import_utils = utils;
var import_patterns = patterns;
const SDK_URL = "https://connect.facebook.net/en_US/sdk.js";
const SDK_GLOBAL = "FB";
const SDK_GLOBAL_READY = "fbAsyncInit";
const PLAYER_ID_PREFIX = "facebook-player-";
class Facebook extends import_react2.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "callPlayer", import_utils.callPlayer);
    __publicField(this, "playerID", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);
    __publicField(this, "mute", () => {
      this.callPlayer("mute");
    });
    __publicField(this, "unmute", () => {
      this.callPlayer("unmute");
    });
  }
  componentDidMount() {
    this.props.onMount && this.props.onMount(this);
  }
  load(url, isReady) {
    if (isReady) {
      (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB) => FB.XFBML.parse());
      return;
    }
    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB) => {
      FB.init({
        appId: this.props.config.appId,
        xfbml: true,
        version: this.props.config.version
      });
      FB.Event.subscribe("xfbml.render", (msg) => {
        this.props.onLoaded();
      });
      FB.Event.subscribe("xfbml.ready", (msg) => {
        if (msg.type === "video" && msg.id === this.playerID) {
          this.player = msg.instance;
          this.player.subscribe("startedPlaying", this.props.onPlay);
          this.player.subscribe("paused", this.props.onPause);
          this.player.subscribe("finishedPlaying", this.props.onEnded);
          this.player.subscribe("startedBuffering", this.props.onBuffer);
          this.player.subscribe("finishedBuffering", this.props.onBufferEnd);
          this.player.subscribe("error", this.props.onError);
          if (this.props.muted) {
            this.callPlayer("mute");
          } else {
            this.callPlayer("unmute");
          }
          this.props.onReady();
          document.getElementById(this.playerID).querySelector("iframe").style.visibility = "visible";
        }
      });
    });
  }
  play() {
    this.callPlayer("play");
  }
  pause() {
    this.callPlayer("pause");
  }
  stop() {
  }
  seekTo(seconds, keepPlaying = true) {
    this.callPlayer("seek", seconds);
    if (!keepPlaying) {
      this.pause();
    }
  }
  setVolume(fraction) {
    this.callPlayer("setVolume", fraction);
  }
  getDuration() {
    return this.callPlayer("getDuration");
  }
  getCurrentTime() {
    return this.callPlayer("getCurrentPosition");
  }
  getSecondsLoaded() {
    return null;
  }
  render() {
    const { attributes } = this.props.config;
    const style = {
      width: "100%",
      height: "100%"
    };
    return /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        style,
        id: this.playerID,
        className: "fb-video",
        "data-href": this.props.url,
        "data-autoplay": this.props.playing ? "true" : "false",
        "data-allowfullscreen": "true",
        "data-controls": this.props.controls ? "true" : "false",
        ...attributes
      }
    );
  }
}
__publicField(Facebook, "displayName", "Facebook");
__publicField(Facebook, "canPlay", import_patterns.canPlay.facebook);
__publicField(Facebook, "loopOnEnded", true);
const Facebook$1 = /* @__PURE__ */ getDefaultExportFromCjs(Facebook_1);
const Facebook$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: Facebook$1
}, [Facebook_1]);
export {
  Facebook$2 as F
};

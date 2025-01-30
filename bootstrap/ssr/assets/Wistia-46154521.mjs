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
var Wistia_exports = {};
__export(Wistia_exports, {
  default: () => Wistia
});
var Wistia_1 = __toCommonJS(Wistia_exports);
var import_react2 = __toESM(require$$0);
var import_utils = utils;
var import_patterns = patterns;
const SDK_URL = "https://fast.wistia.com/assets/external/E-v1.js";
const SDK_GLOBAL = "Wistia";
const PLAYER_ID_PREFIX = "wistia-player-";
class Wistia extends import_react2.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "callPlayer", import_utils.callPlayer);
    __publicField(this, "playerID", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);
    __publicField(this, "onPlay", (...args) => this.props.onPlay(...args));
    __publicField(this, "onPause", (...args) => this.props.onPause(...args));
    __publicField(this, "onSeek", (...args) => this.props.onSeek(...args));
    __publicField(this, "onEnded", (...args) => this.props.onEnded(...args));
    __publicField(this, "onPlaybackRateChange", (...args) => this.props.onPlaybackRateChange(...args));
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
  load(url) {
    const { playing, muted, controls, onReady, config, onError } = this.props;
    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Wistia2) => {
      if (config.customControls) {
        config.customControls.forEach((control) => Wistia2.defineControl(control));
      }
      window._wq = window._wq || [];
      window._wq.push({
        id: this.playerID,
        options: {
          autoPlay: playing,
          silentAutoPlay: "allow",
          muted,
          controlsVisibleOnLoad: controls,
          fullscreenButton: controls,
          playbar: controls,
          playbackRateControl: controls,
          qualityControl: controls,
          volumeControl: controls,
          settingsControl: controls,
          smallPlayButton: controls,
          ...config.options
        },
        onReady: (player) => {
          this.player = player;
          this.unbind();
          this.player.bind("play", this.onPlay);
          this.player.bind("pause", this.onPause);
          this.player.bind("seek", this.onSeek);
          this.player.bind("end", this.onEnded);
          this.player.bind("playbackratechange", this.onPlaybackRateChange);
          onReady();
        }
      });
    }, onError);
  }
  unbind() {
    this.player.unbind("play", this.onPlay);
    this.player.unbind("pause", this.onPause);
    this.player.unbind("seek", this.onSeek);
    this.player.unbind("end", this.onEnded);
    this.player.unbind("playbackratechange", this.onPlaybackRateChange);
  }
  play() {
    this.callPlayer("play");
  }
  pause() {
    this.callPlayer("pause");
  }
  stop() {
    this.unbind();
    this.callPlayer("remove");
  }
  seekTo(seconds, keepPlaying = true) {
    this.callPlayer("time", seconds);
    if (!keepPlaying) {
      this.pause();
    }
  }
  setVolume(fraction) {
    this.callPlayer("volume", fraction);
  }
  setPlaybackRate(rate) {
    this.callPlayer("playbackRate", rate);
  }
  getDuration() {
    return this.callPlayer("duration");
  }
  getCurrentTime() {
    return this.callPlayer("time");
  }
  getSecondsLoaded() {
    return null;
  }
  render() {
    const { url } = this.props;
    const videoID = url && url.match(import_patterns.MATCH_URL_WISTIA)[1];
    const className = `wistia_embed wistia_async_${videoID}`;
    const style = {
      width: "100%",
      height: "100%"
    };
    return /* @__PURE__ */ import_react2.default.createElement("div", { id: this.playerID, key: videoID, className, style });
  }
}
__publicField(Wistia, "displayName", "Wistia");
__publicField(Wistia, "canPlay", import_patterns.canPlay.wistia);
__publicField(Wistia, "loopOnEnded", true);
const Wistia$1 = /* @__PURE__ */ getDefaultExportFromCjs(Wistia_1);
const Wistia$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: Wistia$1
}, [Wistia_1]);
export {
  Wistia$2 as W
};

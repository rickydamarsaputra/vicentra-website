import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-7a77ea84.mjs";
import require$$0 from "react";
import { u as utils, p as patterns } from "./index-c4c1baa7.mjs";
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
var DailyMotion_exports = {};
__export(DailyMotion_exports, {
  default: () => DailyMotion
});
var DailyMotion_1 = __toCommonJS(DailyMotion_exports);
var import_react2 = __toESM(require$$0);
var import_utils = utils;
var import_patterns = patterns;
const SDK_URL = "https://api.dmcdn.net/all.js";
const SDK_GLOBAL = "DM";
const SDK_GLOBAL_READY = "dmAsyncInit";
class DailyMotion extends import_react2.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "callPlayer", import_utils.callPlayer);
    __publicField(this, "onDurationChange", () => {
      const duration = this.getDuration();
      this.props.onDuration(duration);
    });
    __publicField(this, "mute", () => {
      this.callPlayer("setMuted", true);
    });
    __publicField(this, "unmute", () => {
      this.callPlayer("setMuted", false);
    });
    __publicField(this, "ref", (container) => {
      this.container = container;
    });
  }
  componentDidMount() {
    this.props.onMount && this.props.onMount(this);
  }
  load(url) {
    const { controls, config, onError, playing } = this.props;
    const [, id] = url.match(import_patterns.MATCH_URL_DAILYMOTION);
    if (this.player) {
      this.player.load(id, {
        start: (0, import_utils.parseStartTime)(url),
        autoplay: playing
      });
      return;
    }
    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, (DM) => DM.player).then((DM) => {
      if (!this.container)
        return;
      const Player = DM.player;
      this.player = new Player(this.container, {
        width: "100%",
        height: "100%",
        video: id,
        params: {
          controls,
          autoplay: this.props.playing,
          mute: this.props.muted,
          start: (0, import_utils.parseStartTime)(url),
          origin: window.location.origin,
          ...config.params
        },
        events: {
          apiready: this.props.onReady,
          seeked: () => this.props.onSeek(this.player.currentTime),
          video_end: this.props.onEnded,
          durationchange: this.onDurationChange,
          pause: this.props.onPause,
          playing: this.props.onPlay,
          waiting: this.props.onBuffer,
          error: (event) => onError(event)
        }
      });
    }, onError);
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
    return this.player.duration || null;
  }
  getCurrentTime() {
    return this.player.currentTime;
  }
  getSecondsLoaded() {
    return this.player.bufferedTime;
  }
  render() {
    const { display } = this.props;
    const style = {
      width: "100%",
      height: "100%",
      display
    };
    return /* @__PURE__ */ import_react2.default.createElement("div", { style }, /* @__PURE__ */ import_react2.default.createElement("div", { ref: this.ref }));
  }
}
__publicField(DailyMotion, "displayName", "DailyMotion");
__publicField(DailyMotion, "canPlay", import_patterns.canPlay.dailymotion);
__publicField(DailyMotion, "loopOnEnded", true);
const DailyMotion$1 = /* @__PURE__ */ getDefaultExportFromCjs(DailyMotion_1);
const DailyMotion$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: DailyMotion$1
}, [DailyMotion_1]);
export {
  DailyMotion$2 as D
};

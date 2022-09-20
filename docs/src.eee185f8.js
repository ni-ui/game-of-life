// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/noliter/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAbbr = createAbbr;
exports.createAddress = createAddress;
exports.createAnchor = createAnchor;
exports.createApplet = createApplet;
exports.createArea = createArea;
exports.createArticle = createArticle;
exports.createAside = createAside;
exports.createAudio = createAudio;
exports.createBase = createBase;
exports.createBaseFont = createBaseFont;
exports.createBdi = createBdi;
exports.createBdo = createBdo;
exports.createBlockQuote = createBlockQuote;
exports.createBody = createBody;
exports.createBold = createBold;
exports.createBr = createBr;
exports.createButton = createButton;
exports.createCanvas = createCanvas;
exports.createCaption = createCaption;
exports.createCite = createCite;
exports.createCode = createCode;
exports.createCol = createCol;
exports.createColGroup = createColGroup;
exports.createElement = createElement;
exports.createHeader = createHeader;
exports.createLink = createLink;
exports.createMain = createMain;
exports.createObserver = createObserver;
exports.createSection = createSection;
exports.createSpan = createSpan;
exports.removeChildren = removeChildren;

function createObserver(initialValue) {
  var key = 0;
  var value = initialValue;
  var subscribers = {};
  return [function getValue() {
    return value;
  }, function setValue(newValue) {
    value = newValue;

    for (var k in subscribers) {
      subscribers[k](value);
    }
  }, function subscribeValue(callback) {
    subscribers[key] = callback;
    return key++;
  }, function unsubscribeValue(listenerKey) {
    delete subscribers[listenerKey];
  }];
}

function createElement(tagName, builder) {
  var html = document.createElement(tagName);
  builder && builder(html);
  return html;
}

function removeChildren(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

function createAnchor(builder) {
  return createElement("a", builder);
}

function createAbbr(builder) {
  return createElement("abbr", builder);
}

function createAddress(builder) {
  return createElement("address", builder);
}

function createApplet(builder) {
  return createElement("applet", builder);
}

function createArea(builder) {
  return createElement("area", builder);
}

function createArticle(builder) {
  return createElement("article", builder);
}

function createAside(builder) {
  return createElement("aside", builder);
}

function createAudio(builder) {
  return createElement("audio", builder);
}

function createBold(builder) {
  return createElement("b", builder);
}

function createBase(builder) {
  return createElement("base", builder);
}

function createBaseFont(builder) {
  return createElement("basefont", builder);
}

function createBdi(builder) {
  return createElement("bdi", builder);
}

function createBdo(builder) {
  return createElement("bdo", builder);
}

function createBlockQuote(builder) {
  return createElement("blockquote", builder);
}

function createBody(builder) {
  return createElement("body", builder);
}

function createBr(builder) {
  return createElement("br", builder);
}

function createButton(builder) {
  return createElement("button", builder);
}

function createCanvas(builder) {
  return createElement("canvas", builder);
}

function createCaption(builder) {
  return createElement("caption", builder);
}

function createCite(builder) {
  return createElement("cite", builder);
}

function createCode(builder) {
  return createElement("code", builder);
}

function createCol(builder) {
  return createElement("col", builder);
}

function createColGroup(builder) {
  return createElement("colgroup", builder);
}

function createHeader(builder) {
  return createElement("header", builder);
}

function createLink(builder) {
  return createElement("link", builder);
}

function createMain(builder) {
  return createElement("main", builder);
}

function createSection(builder) {
  return createElement("section", builder);
}

function createSpan(builder) {
  return createElement("span", builder);
}
},{}],"../engine.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameOfLifeEngine = void 0;

var noliter_1 = require("noliter");

var DOTS_STYLE;

(function (DOTS_STYLE) {
  DOTS_STYLE[DOTS_STYLE["WIDTH"] = 16] = "WIDTH";
  DOTS_STYLE[DOTS_STYLE["HEIGHT"] = 16] = "HEIGHT";
  DOTS_STYLE[DOTS_STYLE["MARGIN"] = 2] = "MARGIN";
  DOTS_STYLE["DEAD_COLOR"] = "#FFF";
  DOTS_STYLE["SURVIVE_COLOR"] = "#000";
})(DOTS_STYLE || (DOTS_STYLE = {}));

var BACKGROUND_COLOR = '#FFF';

var getCoordinateX = function getCoordinateX(x) {
  return (DOTS_STYLE.MARGIN + DOTS_STYLE.WIDTH) * x + DOTS_STYLE.MARGIN;
};

var getCoordinateY = function getCoordinateY(y) {
  return (DOTS_STYLE.MARGIN + DOTS_STYLE.HEIGHT) * y + DOTS_STYLE.MARGIN;
};

var GameOfLifeEngine =
/** @class */
function () {
  function GameOfLifeEngine(life) {
    var _this = this;

    this.intervalKey = null;
    noliter_1.createCanvas(function (cvs) {
      var ctx = cvs.getContext('2d');

      if (ctx) {
        _this.canvas = cvs;
        _this.context = ctx;
      } else {
        throw 'Failed to create context';
      }
    });
    this.setLife(life);
    this.startLife();
  }

  GameOfLifeEngine.prototype.setLife = function (life) {
    this.life = life;
    this.canvas.width = getCoordinateX(life[0].length);
    this.canvas.height = getCoordinateY(life.length);
  };

  GameOfLifeEngine.prototype.clear = function () {
    this.context.fillStyle = BACKGROUND_COLOR;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  GameOfLifeEngine.prototype.startLife = function () {
    var _this = this;

    if (!this.intervalKey) {
      this.drawDots();
      this.intervalKey = window.setInterval(function () {
        _this.life = _this.life.map(function (children, i) {
          return children.map(function (isSurvive, j) {
            return _this.nextLife(j, i, isSurvive);
          });
        });

        _this.drawDots();
      }, 500);
    }
  };

  GameOfLifeEngine.prototype.stopLife = function () {
    if (this.intervalKey !== null) {
      window.clearInterval(this.intervalKey);
      this.intervalKey = null;
    }
  };

  GameOfLifeEngine.prototype.drawDot = function (x, y) {
    this.context.fillRect(getCoordinateX(x), getCoordinateY(y), DOTS_STYLE.WIDTH, DOTS_STYLE.HEIGHT);
  };

  GameOfLifeEngine.prototype.drawDots = function () {
    var _this = this;

    this.clear();
    this.life.forEach(function (children, i) {
      children.forEach(function (isSurvive, j) {
        _this.context.fillStyle = isSurvive ? DOTS_STYLE.SURVIVE_COLOR : DOTS_STYLE.DEAD_COLOR;

        _this.drawDot(j, i);
      });
    });
  };

  GameOfLifeEngine.prototype.isSurvive = function (x, y) {
    return this.life[y] && this.life[y][x] ? 1 : 0;
  };

  GameOfLifeEngine.prototype.nextLife = function (x, y, isSurvive) {
    var count = this.isSurvive(x - 1, y - 1) + this.isSurvive(x, y - 1) + this.isSurvive(x + 1, y - 1) + this.isSurvive(x - 1, y) + this.isSurvive(x + 1, y) + this.isSurvive(x - 1, y + 1) + this.isSurvive(x, y + 1) + this.isSurvive(x + 1, y + 1);
    return count === 3 || isSurvive && count === 2 ? 1 : 0;
  };

  return GameOfLifeEngine;
}();

exports.GameOfLifeEngine = GameOfLifeEngine;
},{"noliter":"../../node_modules/noliter/dist/index.esm.js"}],"../index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var noliter_1 = require("noliter");

var engine_1 = require("./engine");

var engine = new engine_1.GameOfLifeEngine([[]]);
var select = document.getElementById('patterns');

var fetchLife = function fetchLife() {
  return fetch("./patterns/" + select.value).then(function (res) {
    return res.json();
  }).then(function (_a) {
    var life = _a.life;
    engine.stopLife();
    engine.setLife(life);
    engine.startLife();
  });
};

select.addEventListener('change', function () {
  return fetchLife();
});
document.body.appendChild(noliter_1.createMain(function (main) {
  main.appendChild(engine.canvas);
  fetchLife();
}));
},{"noliter":"../../node_modules/noliter/dist/index.esm.js","./engine":"../engine.ts"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61965" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../index.ts"], null)
//# sourceMappingURL=/src.eee185f8.js.map
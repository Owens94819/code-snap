

window.loop=function(arr, foo, fall) {
  var loop = function () {
    if (i >= arr.length) {
      !hold && fall();
      // console.log(arr);
    } else {
      foo(arr[i]);
      requestAnimationFrame(loop);
    }
    i += 1;
  };
  var hold = false;
  var set = 0;
  var i = 0;
  // i++;
  requestAnimationFrame(loop);
  //  set+=1
  this.count = function () {
    set += 1;
    if (set === arr.length - 1) {
      fall();
      //  return
    }
  };
  this.hold = function () {
    !hold && (hold = true);
  };
  this.call = function () {
    // !hold&&(hold=true)
    if (set === arr.length - 1) {
      hold && fall();
      //  return
    }
    set += 1;
    // body...
  };
}
function can(img, type, opt, r) {
  //  return new Promise (function(r){
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = opt.width;
  canvas.height = opt.height;
  // console.log(img);
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(img.src);
    if (type) {
      //image/webp
      canvas.toBlob(
        function (e) {
          r(e);
        },
        opt.type,
        opt.quality
      );
    } else {
      r(canvas);
    }
  };

  //  })
}

var DOMURL = self.URL || self.webkitURL || self;
var ach = document.createElement("a");

window.toSvg = function (element, opt) {
  !(opt instanceof Object) && (opt = {});

  var r;
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  //console.log(height, element);

  opt.__proto__ = {
    type: null,
    size: 400,
    width: width,
    height: height,
    quality: 1,
  };

  var dt = `
                <svg class="x-svg bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width}px ${height}px" width="${width}px" height="${height}px">
                <title>canvas</title>
                <foreignObject x="0" y="0" xwidth="100%" xheight="100%" width="${width}px" height="${height}px" >
                   
                <style xmlns="http://www.w3.org/1999/xhtml">
                
                `;

  var style = element.ownerDocument.styleSheets;
  var element = element.cloneNode(true);

  // element.style.width=width+"px"
  //element.style.height=height+"px"

  /* code */
  var y = 0;
  y++;
  var l = new loop(
    style,
    function (e) {
      var id = e.ownerNode.id;
      if (
        id.includes("ace_cus") ||
        (id.includes("ace_highlight") && (e.ownerNode.id = "null"))
      ) {
        l.hold();
        new loop(
          e.rules,
          function (e) {
            dt += e.cssText.replace(
              /(^|[^\w\d\-])(svg)([^\}]+)(\{)/gi,
              "$1svg $2$3$4"
            );
          },
          function () {
            id.includes("null") && (e.ownerNode.innerHTML = "");
            //  console.log(y++, style);
            l.call();
          }
        );
      } else {
        l.call();
      }
    },
    function () {
      dt += `
     
        </style>

                ${new XMLSerializer().serializeToString(element)}

                  </foreignObject>
                  </svg>
                  
                  `;

      //    console.log(dt);
      //return
      if (opt.type === "blob") {
        r(new Blob([dt], { type: "image/svg+xml;charset=utf-8" }));
      } else if (opt.type === "svg") {
        r(new DOMParser().parseFromString(dt, "image/svg+xml").documentElement);
      } else if (opt.type === "image") {
        var img = new Image();
        img.width = width;
        img.height = height;
        img.src = DOMURL.createObjectURL(
          new Blob([dt], { type: "image/svg+xml;charset=utf-8" })
        );
        //   img.src="data:svg+xml;base64,"+btoa( encodeURI( dt))
        r(img);
      } else if (opt.type === "canvas" || "string" === typeof opt.type) {
        var img = new Image();
        img.src = "data:image/svg+xml;base64," + btoa(dt);
        /*   img.src = DOMURL.createObjectURL(
            new Blob([dt], { type: "image/svg+xml;charset=utf-8" })
          );*/
        can(img, opt.type !== "canvas", opt, r);
      } else {
        r(dt);
      }
    }
  );

  return new Promise(function () {
    r = arguments[0];
  });
};
window.download = function (url, name) {
  if (url instanceof Blob) {
    url = DOMURL.createObjectURL(url);
  }
  ach.download = name || "untitled";
  ach.href = url;
  ach.click();
};

window.ss = function (e, foo, t) {
  toSvg(e, { type: t || "image", quality: 1.0 }).then(
    foo ||
      function (dt) {
        // download(dt,Date.now()+"_code_shot")
        // console.log(dt);
        prwd=true
        document.body.appendChild(dt);
      }
  );
};

window.edt = function (tmp, foo, t) {
  shw.innerHTML = plt.innerHTML;
  var element = shw.querySelector("#my-element");
  var code = shw.querySelector("#code");
  code.textContent = tmp;
  hl(
    code,
    {
      mode: mode || code.getAttribute("ace-mode"),
      theme: style || code.getAttribute("ace-theme"),
      //showGutter: true,
      // trim: false,
    },
    function (f) {
      //  console.log(f);
      var c = code.firstChild.firstChild;
      c.insertBefore(win("mac"), c.firstChild);
      ss(element, foo, t);
    }
  );
};
window.win = function (_class) {
  return bar.content.querySelector(".win." + _class).cloneNode(true);
};

window.doc = function (v,o) {
  if (o){
    if (localStorage.value) {
      return 
    }
  }else{
  editor.setValue("loading...");
  }  
  
  
  var doc =
    v === "xjsx" ? "xjsx.xml" : v + "." + _mode[v].extensions.split("|")[0];
  fetch("docs/" + doc)
    .then((req) => req.text())
    .then(function (res) {
      localStorage.value=res
      query.set("v", true);
      editor.setValue(res);
    });
};
window._lang = function (v,o) {
  doc(v,o);
  query._set("lang", v);
  v === "xjsx" && (v = "html");
  editor.session.setMode((mode = "ace/mode/" + v));
};

window._theme = function (v) {
  query._set("theme", v);
  editor.setTheme((style = "ace/theme/" + v));
};

window.load = function () {
  //  theme.innerHTML=lang.innerHTML=""

  var list = ace.require("ace/ext/modelist");
  _mode = list.modesByName;
  
   doc(lang.xvalue, _l)
  
  
  new loop(ace.require("ace/ext/themelist").themes,function(t) {
    var op = document.createElement("option");
    op.value = t.name;
    op.innerHTML = t.caption + (t.isDark ? " (dark)" : "");
    theme.appendChild(op);
  },function() {
  var ld=theme.querySelector(".loading")
  ld. outerHTML=''
    theme.value = theme.xvalue
   // document.removeChild(ld)
  //theme.removeChild(ld)
 //ld&&ld.remove()
  
  });
  
    new loop(list.modes,function(t) {
    var op = document.createElement("option");
    op.value = t.name;
    op.innerHTML = t.caption;
    lang.appendChild(op);
  },function() {
 var ld= lang.querySelector(".loading");
  ld. outerHTML=''
//console.dir(lang);
// lang.removeChild(ld)
 //ld&&ld.remove()
 pending=false
  lang.value = lang.xvalue
  //  document.removeChild(ld)
//  !_l&&_lang(lang.value);
//  !_t&&_theme(theme.value);
  });
  
};

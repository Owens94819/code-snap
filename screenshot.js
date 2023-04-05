function loop(arr, foo, fall) {
  var loop = function () {
    if (i >= arr.length) {
      !hold&&fall();
     // console.log(arr);
    } else {
      foo(arr[i]);
      requestAnimationFrame(loop);
    }
    i+=1;
  };
 var hold=false;
 var set=0;
  var i = 0;
 // i++;
  requestAnimationFrame(loop);
  //  set+=1
  this.count=function() {
    set+=1
        if (set === arr.length-1) {
      fall()
    //  return 
    }
  }
  this.hold=function() {
    !hold&&(hold=true)
  }
  this.call=function() {
   // !hold&&(hold=true)
    if (set === arr.length-1) {
   hold&&   fall()
    //  return 
    }
    set+=1
    // body...
  }
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
      canvas.toBlob(function(e){
        r(e)
      },opt.type,opt.quality);
    } else {
      r(canvas);
    }
  };

  //  })
}

function toSvg(element, opt) {
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
 var element=element.cloneNode(true);
 
// element.style.width=width+"px"
 //element.style.height=height+"px"
 
   /* code */
   var y=0;
   y++
  var l= new loop(style,function(e){
      if(e.ownerNode.id.includes("ace")){
      l.hold()
    new loop(
      e.rules,
      function (e) {
        dt += e.cssText
        .replace(
          /(^|[^\w\d\-])(svg)([^\}]+)(\{)/gi,
          "$1svg $2$3$4"
        );
      },
      function() {
      //  console.log(y++, style);
        l.call()
      }
    );
      }else{
     l.call()
      }   
  }, function () {
        dt += `
     
        </style>

                ${new XMLSerializer().serializeToString(element)}

                  </foreignObject>
                  </svg>
                  
                  `;
                  
                  
               // console.log(dt);
                //return 
        if (opt.type === "blob") {
          r(new Blob([dt], { type: "image/svg+xml;charset=utf-8" }));
        } else if (opt.type === "svg") {
          r((new DOMParser()).parseFromString(dt, 'image/svg+xml').documentElement)
       
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
          img.src="data:image/svg+xml;base64,"+btoa(dt);
       /*   img.src = DOMURL.createObjectURL(
            new Blob([dt], { type: "image/svg+xml;charset=utf-8" })
          );*/
          can(img, opt.type !== "canvas", opt, r);
        } else {
          r(dt);
        }
      });
 

  return new Promise(function () {
    r = arguments[0];
  });
}

var DOMURL = self.URL || self.webkitURL || self;
var ach=document.createElement("a");
function download (url,name){
  if (url instanceof Blob) {
    url=DOMURL.createObjectURL(url);
  }
ach.download=name||"untitled"
ach.href=url
ach.click();
}




      function ss(e,foo,t) {
        toSvg(e, { type:t|| "image", quality:1 }).then(foo||function (dt) {
       // download(dt,Date.now()+"_code_shot")
        // console.log(dt);
       document.body.appendChild(dt);
          
        });
      }

      function edt(tmp,foo,t) {
        shw.innerHTML = plt.innerHTML;
        var element = shw.querySelector("#my-element");
        var code = shw.querySelector("#code");
        code.textContent=tmp
        hl(
          code,
          {
            mode: mode||code.getAttribute("ace-mode"),
            theme: theme||code.getAttribute("ace-theme"),
            showGutter: false,
            trim: false,
          },
          function (f) {
         //  console.log(f);
            var c = code.firstChild.firstChild;
            c.insertBefore(win("mac"), c.firstChild);
            ss(element,foo,t);
          }
        );
      }
      function win(_class) {
        return bar.content.querySelector(".win." + _class).cloneNode(true);
      }
      
      

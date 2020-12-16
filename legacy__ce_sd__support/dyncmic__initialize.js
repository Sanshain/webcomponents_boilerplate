if (!window.customElements){            
                        
    if (Array.from) window.loadEvent = 'load';  // window.scripts = [];

    (function(){
        
        var scripts = [
            "polyfills/packages/custom-elements/build/custom-elements.old.js",   
            "polyfills/packages/shadydom/build/shadydom.min.js",                                       
            "legacy__ce_sd__support/shadowcss__polyfill.js",
            "legacy__ce_sd__support/es5__ce__polyfill.js"            
        ];
        
        scripts.forEach(function (src, i) {
            
            var script = document.createElement('script');
            script.src = src;                                        
            script.type = "text/javascript";
            document.head.appendChild(script);

            // script.id = 'script' + i;    
            // script.addEventListener('load', () => console.log(script.id));
            // scripts.push(script);
        });
    })();
}     

// window.addEventListener('DOMContentLoaded', () => console.warn(customElements))
// window.addEventListener('load', () => console.info(customElements))          
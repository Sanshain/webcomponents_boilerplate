this.attachShadow || window.addEventListener(window.loadEvent || "DOMContentLoaded", function() {

    var style = document.createElement("style");
    style.type = "text/css";
    document.head.appendChild(style);

    [].slice.apply(document.querySelectorAll("template")).forEach(function(template) {

        var shadowedCss = template.innerHTML.replace(/<style>([\s\S]*?)<\/style>/, function(r, group) 
        {
            return group.replace(/(\n\s*)([\.#\w\s]*){/g, function(_, offset, selector) {
                return offset + "." + template.id + " " + selector + "{"
            }).replace(/\:host/g, "." + template.id)
        });

        if (style.styleSheet) style.styleSheet.cssText = shadowedCss;
        else style.appendChild(document.createTextNode(shadowedCss));        
    })
    
});

if (!this.attachShadow){
    
    window.addEventListener("DOMContentLoaded", function() {

        let style = document.createElement("style");
        style.type = "text/css";
        document.head.appendChild(style);
    
        [].slice.apply(document.querySelectorAll("template")).forEach(function(template) {
    
            let shadowedCss = template.innerHTML.replace(/<style>([\s\S]*?)<\/style>/, function(r, group) 
            {
                return group.replace(/(\n\s*)([\.#\w\s]*){/g, function(_, offset, selector) {
                    return offset + "." + template.id + " " + selector + "{"
                }).replace(/\:host/g, "." + template.id)
            });
    
            if (style.styleSheet) style.styleSheet.cssText = shadowedCss;
            else style.appendChild(document.createTextNode(shadowedCss));        
        })
        
    });

}

if (!Array.from){

    window.addEventListener('DOMContentLoaded', function() {
        
        customElements = customElements || {};
        customElements.define = function(componentName, template){
            
            let sample = template.cloneNode(true);
            sample.style.display = 'block';
            [].slice.apply(document.querySelectorAll(componentName)).forEach(function(elem){
                
                let slot = elem.innerHTML; 
                elem.innerHTML = slot 
                    ? sample.innerHTML.replace(/<slot>[\s\S]*?<\/slot>/, slot)        // вставляем slot
                    : sample.innerHTML;
            });                            
        }                
            
    });
}
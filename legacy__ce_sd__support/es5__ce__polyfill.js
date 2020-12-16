if (!Array.from){

    window.addEventListener(window.loadEvent || 'DOMContentLoaded', function() {
        
        console.log('customElements_def')

        window.customElements = window.customElements || {};
        customElements.define = function(componentName, template){
            
            var sample = template.cloneNode(true);  // let
            sample.style.display = 'block';
            [].slice.apply(document.querySelectorAll(componentName)).forEach(function(elem){
                
                var slot = elem.innerHTML; 
                elem.innerHTML = slot 
                    ? sample.innerHTML.replace(/<slot>[\s\S]*?<\/slot>/, slot)        // вставляем slot
                    : sample.innerHTML;
            });                            
        }                
            
    });
}
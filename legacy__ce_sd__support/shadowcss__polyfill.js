

/**
 * my custom polyfill?
 */
this.attachShadow || window.addEventListener(window.loadEvent || "DOMContentLoaded", function () {

	// создает тег style в head, который будет отвечать за стили элемента
	var style = document.createElement("style");
	style.type = "text/css";
	document.head.appendChild(style);

	[].slice.apply(document.querySelectorAll("template")).forEach(function (template) {

		var shadowedCss = '';
		var html = template.innerHTML.replace(/<style>([\s\S]*?)<\/style>/, function (r, group) {
			
			// добавляет id шаблона к каждому селектору
			shadowedCss += group.replace(/(\n\s*)([\.#\w\s]*){/g, function (_, offset, selector) {
				return offset + "." + template.id + " " + selector + "{"
			}).replace(/\:host/g, "." + template.id)
			return '';
		});

		// удаляет стили из шаблона
		[].slice.call(template.querySelectorAll('style')).forEach(function(el) {el.parentElement.removeChild(el)});

		// добавляет стили в шапку
		if (style.styleSheet) style.styleSheet.cssText += shadowedCss; // shadowedCss;
		else style.appendChild(document.createTextNode(shadowedCss));
	})

});


/**
 * custom (my) polyfill
 */
if (!Array.from) {


	// Object.assign = function (baseObj, extObj) {
	// 	for (const key in extObj) {
	// 		if (Object.hasOwnProperty.call(extObj, key)) {
	// 			baseObj[key] = extObj[key];
	// 		}
	// 	}
	// }


	window.addEventListener(window.loadEvent || 'DOMContentLoaded', function () {

		window.customElements = window.customElements || {};

		/**
		 * копирует содержимое темплейта в новую ноду со вставкой содержимого слота
		 */
		customElements.define = function (componentName, template) {

			var sample = template.cloneNode(true);  // let
			sample.style.display = 'block';
			[].slice.apply(document.querySelectorAll(componentName)).forEach(function (elem) {

				var slot = elem.innerHTML;
				elem.innerHTML = slot
					? sample.innerHTML.replace(/<slot>[\s\S]*?<\/slot>/, slot)        // вставляем slot
					: sample.innerHTML;
			});
		}

		/**
		 * 
		 * @param {string} component - имя компонента, должно совпадать с id template, в котором он описан
		 * @param {HTMLElementPrototype | HTMLTemplateElement} componentPrototype - прототип веб-компонента (созданный экз-р класса вебкомп-та,
		 * 										  сбандленного бабелем в ес5 и присоединенного динамически перед этим бандлом либо template
		 * 										  (последний подходит только для styled components, не более))
		 */
		customElements.define = function (component, componentPrototype) {

			var template = document.getElementById(component);
			
			// если component не найден, значит такого шаблона нет - значит это просто стайлед компонент
			if (!template) template = componentPrototype;
			// если найден, то копируем в него свойства и методы, заданные в прототипе
			else {
				// template.call(componentPrototype);	- // не катит, т.к. у элементов нельзя вызвать конструктор вручную
				Object.assign(template, componentPrototype)
			}

			var sample = element.cloneNode(true);  // let
			sample.style.display = 'block';
			[].slice.apply(document.querySelectorAll(component)).forEach(function (elem) {

				var slot = elem.innerHTML;
				elem.innerHTML = slot
					? sample.innerHTML.replace(/<slot>[\s\S]*?<\/slot>/, slot)        // вставляем slot
					: sample.innerHTML;
			});
		}

	});
}
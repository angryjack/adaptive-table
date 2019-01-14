(function() {
    let wrapperClass = 'scrollable';
    let css = '.scrollable { overflow-x: auto; }';

    addWrapperTo('table', wrapperClass);
    createStyleInHead(css);

    // добавление стилей в head
    // styles - строка со стилями
    function createStyleInHead(styles) {
        let head = document.head || document.getElementsByTagName('head')[0];
        let style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            // Для IE8 и ниже.
            style.styleSheet.cssText = styles;
        } else {
            style.appendChild(document.createTextNode(styles));
        }
        head.appendChild(style);
    }

    // добавляем оборачивающий div элемента
    // addTo - элемент к которому будем добавлять
    // wrapperClass - класс обертки (без точки)
    function addWrapperTo(addTo, wrapperClass) {
        // получаем все элементы по выбранному селектору
        let elements = document.querySelectorAll(addTo);
        // для каждого элемента создаем div обертку с классом
        for (let i = 0; i < elements.length; i++) {
            elements[i].outerHTML =
                '<div class="' + wrapperClass + '">' +
                elements[i].outerHTML +
                '</div>';
        }
    }
})();

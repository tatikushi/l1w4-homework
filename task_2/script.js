function getAttributes() {
    var attrs = document.getElementById("w3r").attributes;
    var searchAttrs = ['href', 'hreflang', 'rel', 'target', 'type',];

    searchAttrs.forEach(function (item) {
        var value = attrs.getNamedItem(item).value;
        var p = document.createElement("p");
        p.innerHTML = value;
        document.body.appendChild(p);
    });

}
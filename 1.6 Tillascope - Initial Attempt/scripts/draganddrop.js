function addDnDHandlers() {

    var plantimageswide = document.getElementsByClassName("productarticlewide");
    var plantimages = document.getElementsByClassName("productarticle");
    var shoppingCartDropzone = document.getElementById("shoppingcart");
    var shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];

    var Cart = (function () {
        this.plants = new Array();
    });

    var Plant = (function (id, price) {
        this.plantId = id;
        this.price = price;
    });

    var currentCart = null;

    currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        createEmptyCart();
    }

    UpdateShoppingCartUI();
    currentCart.addPlant = function (plant) {
        currentCart.plants.push(plant); 

        // insert the new cart into the storage as string
        localStorage.setItem('cart', JSON.stringify(currentCart));

    }

    for (var i = 0; i < plantimages.length; i++) {
        plantimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }
    for (var i = 0; i < plantimageswide.length; i++) {
        plantimageswide[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    shoppingCartDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false;
    }, false);

    shoppingCartDropzone.addEventListener("drop", function (ev) {
        if (ev.stopPropagation)
            ev.stopPropagation();

        var plantId = ev.dataTransfer.getData("Text");
        var element = document.getElementById(plantId);

        addPlantToShoppingCart(element, plantId);
        ev.stopPropagation();

        return false;
    }, false);

    function addPlantToShoppingCart(item, id) {
        var price = item.getAttribute("data-price");

        var plant = new Plant(id, price);
        currentCart.addPlant(plant);

        UpdateShoppingCartUI();
    }

    function createEmptyCart() {
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(new Cart()));
        currentCart = JSON.parse(localStorage.getItem("cart"));
    }

    function UpdateShoppingCartUI() {

        shoppingcart.innerHTML = "";
        for (var i = 0; i < currentCart.plants.length; i++) {
            var liElement = document.createElement('li');
            liElement.innerHTML = currentCart.plants[i].plantId + " " + currentCart.plants[i].price;
            shoppingcart.appendChild(liElement);
        }
    };
}
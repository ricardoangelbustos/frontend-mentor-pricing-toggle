function price() {
    var price1 = document.getElementById("price1");
        if (price1.innerHTML.match("199.99")) {
        price1.innerHTML = "19.99";
    } else {
        price1.innerHTML = "199.99";
    }

    var price2 = document.getElementById("price2");
        if (price2.innerHTML.match("249.99")) {
        price2.innerHTML = "24.99";
    } else {
        price2.innerHTML = "249.99";
    }

    var price3 = document.getElementById("price3");
        if (price3.innerHTML.match("399.99")) {
        price3.innerHTML = "39.99";
    } else {
        price3.innerHTML = "399.99";
    }
}
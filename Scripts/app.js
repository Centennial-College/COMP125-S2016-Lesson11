/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date July 12, 2016
 * 
 * StudentID: 300867968
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    // var xhrAddressBook;
    // var xhrNavData;
    // var xhrFooterData;

    // // we can use a named function instead of an anonymous function
    // function readData() {
    //     // data loaded             everything is okay
    //     if (xhrAddressBook.readyState == 4 && xhrAddressBook.status == 200) {

    //         var addressbook = JSON.parse(xhrAddressBook.responseText);
    //         var contacts = addressbook.contacts;

    //         contacts.forEach(function (contact) {
    //             console.log(contact);
    //         }, this);

    //     }
    // }

    // function readNavData() {
    //     // data loaded             everything is okay
    //     if (xhrNavData.readyState == 4 && xhrNavData.status == 200) {

    //         // create a reference to the HTMLElement
    //         var mainNav = document.getElementById("mainNav");
    //         mainNav.innerHTML = xhrNavData.responseText;

    //         $('#projects').replaceWith('<li id= "gallery" > <a href="gallery.html"><i class="fa fa-picture-o fa-lg"></i> Gallery</a></li>')

    //         setActivePage();
    //     }
    // }

    // function readAddressBook() {
    //     xhrAddressBook = new XMLHttpRequest(); // step 1 - create xhr object
    //     // NOTE: the path is relative to the html, not app.js
    //     xhrAddressBook.open("GET", "contacts.json", true); // step 2 - open request
    //     xhrAddressBook.send(null); // step 3 - send request
    //     xhrAddressBook.addEventListener("readystatechange", readData); // step 4 - wait for file to load
    // }

    function readAddressBook() {
        $.getJSON("contacts.json", (data) => {
            var addressbook = data;
            var contacts = addressbook.contacts;

            contacts.forEach(function (contact) {
                console.log(contact);
            }, this);

            // $.each(contacts, (contact) => console.log(contacts[contact]))
        })
    }

    // function readFooterData() {
    //     // data loaded             everything is okay
    //     if (xhrFooterData.readyState == 4 && xhrFooterData.status == 200) {

    //         // create a reference to the HTMLElement
    //         var footer = document.getElementById("footer");
    //         footer.innerHTML = xhrFooterData.responseText;

    //         var year = document.getElementById("year");
    //         var date = new Date();
    //         year.innerText = date.getFullYear();
    //     }
    // }

    function setActivePage() {
        switch (document.title) {
            case "Home":
                document.getElementById("index").setAttribute("class", "active");
                break;
            case "About Me":
                document.getElementById("about").setAttribute("class", "active");
                break;
            case "Projects":
                document.getElementById("projects").setAttribute("class", "active");
                break;
            case "Contact Me":
                document.getElementById("contact").setAttribute("class", "active");
                break;
        }
    }

    // function loadFooter() {
    //     xhrFooterData = new XMLHttpRequest();
    //     xhrFooterData.open("GET", "Partials/footer.html", true);
    //     xhrFooterData.send(null);
    //     xhrFooterData.addEventListener("readystatechange", readFooterData);
    // }

    function loadFooter() {
        $('#footer').load('Partials/footer.html', () => {
            $('#year').text(new Date().getFullYear())
        })
    }

    // function loadNavBar() {
    //     xhrNavData = new XMLHttpRequest();
    //     xhrNavData.open("GET", "Partials/navbar.html", true);
    //     xhrNavData.send(null);
    //     xhrNavData.addEventListener("readystatechange", readNavData);
    // }

    function loadNavBar() {
        $('#mainNav').load('Partials/navbar.html', () => {
            $('#projects').replaceWith('<li id= "gallery" > <a href="gallery.html"><i class="fa fa-picture-o fa-lg"></i> Gallery</a></li>')
            setActivePage()
        })

    }

    // app entry function
    function init() {
        loadNavBar();

        readAddressBook();

        loadFooter();

        // JQUERY STUFF GOES HERE
        var firstH1 = $("#firstH1")
            .text("Hello World")
            .css("color", "red")
            .css('position', 'relative')
            .css('left', '-175px')
            .animate({
                opacity: 0.2,
                left: "+=500"
            }, 1000, "easeInBounce",
            () => $('#firstH1').fadeTo(500, 1))
            .after('<h1>Good Bye!</h1>')
    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();
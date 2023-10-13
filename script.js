(function(){

    'use strict';

    let detailsForm = document.querySelector("#destination_details_form");
    detailsForm.addEventListener("submit", handleFormSubmit);

    function handleFormSubmit(event) {
      event.preventDefault();

      let destName = event.target.elements["name"].value;
      // alert('I am active'); -> To make sure the function was active and working
      let destLocation = event.target.elements["location"].value;
      let destPhoto = event.target.elements["photo"].value;
      let destDescription = event.target.elements["description"].value;

      for (let i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
      }

      let destCard = createDestinationCard(
        destName,
        destLocation,
        destPhoto,
        destDescription
      );
      let wishListContainer = document.getElementById("destinations_container");

      if (wishListContainer.children.length === 0) {
        document.getElementById("title").innerHTML = "My Wish List";
      }

      document.querySelector("#destinations_container").appendChild(destCard);
    }

    function createDestinationCard(name, location, photoUrl, description) {
      let card = document.createElement("div");
      card.className = "card";

      let image = document.createElement("img");
      image.setAttribute("alt", name);

      let constantPhotoUrl = "images/signpost.jpg";
      if (photoUrl.length === 0) {
        image.setAttribute("src", constantPhotoUrl);
      } else {
        image.setAttribute("src", photoUrl);
      }

      card.appendChild(image);

      let card_body = document.createElement("div");
      card_body.className = "card_body";

      let cardTitle = document.createElement("h3");
      cardTitle.innerText = name;
      card_body.appendChild(cardTitle);

      let cardSubtitle = document.createElement("h4");
      cardSubtitle.innerText = location;
      card_body.appendChild(cardSubtitle);

      if (description.length !== 0) {
        let card_text = document.createElement("p");
        card_text.className = "card_text";
        card_text.innerText = description;
        card_body.appendChild(card_text);
      }

      // card_body.appendChild(destDescription);

      let rmv_btn = document.createElement("button");
      rmv_btn.innerText = "Remove";
      rmv_btn.addEventListener("click", removeDestination);
      card_body.appendChild(rmv_btn);

      card.appendChild(card_body);

      return card;
    }

    function removeDestination(evt) {
      var card = evt.target.parentElement.parentElement;
      card.remove();
    }

})();


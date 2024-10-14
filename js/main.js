$(() => {

  $("#calcBtn").on("click", function () {
    let [armor, health] = calcArmorHealth();
    $("#totalArmor").val(armor);
    $("#totalHealth").val(health);
    $("#result").val(`You can withstand about ${armor+health} damage before dying.`);
  });


  $("#helmet-rarity, #shoulders-rarity, #arms-rarity, #body-rarity, #legs-rarity").each(function () {
    $(this).on("change", function () {
      const rarity = $(this).children("option:selected").val();
      $(this).removeClass("border-rare border-epic border-legendary border-unique border-mythic");
      switch (rarity) {
        case "Mythic":
          $(this).addClass("border-mythic");
          break;

        case "Unique":
          $(this).addClass("border-unique");
          break;

        case "Legendary":
          $(this).addClass("border-legendary");
          break;

        case "Epic":
          $(this).addClass("border-epic");
          break;

        case "Rare":
          $(this).addClass("border-rare");
          break;
      }
    }).trigger("change");
  });

});

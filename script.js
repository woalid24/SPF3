$(document).ready(function () {
  // Smooth scrolling
  $("a").on("click", function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $("html, body").animate(
              {
                  scrollTop: $(hash).offset().top,
              },
              800
          );
      }
  });

  // Product filtering
  $("#brandFilter, #priceFilter").on("change", function () {
      const brand = $("#brandFilter").val();
      const price = $("#priceFilter").val();

      $(".product-card").show().filter(function () {
          const productPrice = parseInt($(this).find("p:contains('Price')").text().replace(/[^\d]/g, ''));
          const matchesBrand = brand === "all" || $(this).find("h3").text().includes(brand);
          const matchesPrice =
              price === "all" ||
              (price === "low" && productPrice < 20000) ||
              (price === "mid" && productPrice >= 20000 && productPrice <= 50000) ||
              (price === "high" && productPrice > 50000);

          return !(matchesBrand && matchesPrice);
      }).hide();
  });
});

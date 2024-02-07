document.addEventListener('DOMContentLoaded', function() {
    loadProductImages();


     //this is needed to override background color that .gradient applies
    var elements = document.querySelectorAll('.menu-drawer__submenu.has-submenu.gradient');
    elements.forEach(function(element) {
      element.style.background = '#00F4FF';
    });

});
  
//   function loadProductImages() {
//     document.querySelectorAll('.productImageContainer').forEach(function(container) {
//         var productHandle = container.getAttribute('data-handle');
//         if (productHandle) {
//             var productImageContainerId = 'productImageContainer-' + productHandle;
//             container.id = productImageContainerId; // Optionally set a unique ID if needed

//             fetch('/products/' + productHandle + '.js')
//                 .then(response => response.json())
//                 .then(product => {
//                     var featuredImageUrl = product.images[0];
//                     container.innerHTML = ''; // Clear the "Loading..." message
//                     var imgElement = new Image();
//                     imgElement.src = featuredImageUrl;
//                     imgElement.alt = product.title;
//                     imgElement.width = 75; // Adjust width as necessary
//                     container.appendChild(imgElement);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching product data:', error);
//                     container.innerHTML = 'Image load failed.';
//                 });
//         }
//     });
// }


function loadProductImages() {
  document.querySelectorAll('.productImageContainer').forEach(function(container) {
      var productHandle = container.getAttribute('data-handle');
      if (productHandle) {
          var productImageContainerId = 'productImageContainer-' + productHandle;
          container.id = productImageContainerId; // Optionally set a unique ID if needed

          fetch('/products/' + productHandle + '.js')
              .then(response => response.json())
              .then(product => {
                  if (product.images.length > 0) {
                      // Assuming the first image is the primary one, and modifying it to get a thumbnail version
                      var mainImageUrl = product.images[0];
                      var featuredImageUrl = mainImageUrl.split('?')[0] + "?width=75&height=75"; // Modify this line to adjust size
                      container.innerHTML = ''; // Clear the "Loading..." message
                      var imgElement = new Image();
                      imgElement.src = featuredImageUrl;
                      imgElement.alt = product.title;
                      container.appendChild(imgElement);
                  }
              })
              .catch(error => {
                  console.error('Error fetching product data:', error);
                  container.innerHTML = 'Image load failed.';
              });
      }
  });
}

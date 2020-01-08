
function initMap() {
  var myLatLng = {lat: 55.159897, lng: 61.402554};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng,
    disableDefaultUI: true,
    styles: [
     {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'img/logoMap.svg'
  });
}

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
      tCounter: '',
			enabled: true,
			navigateByImgClick: true // Will preload 0 - before current, and 1 after the current image
		},
	});
});
$('.example-slider').slick({
  dots: false,
  arrows: true,
    infinite: true,
    autoplay: true,
    speed: 400,
  autoplaySpeed: 2000,
    slidesToShow: 4,
    centerMode: false,
    variableWidth: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 6,
        autoplay: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
          arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: false,
        autoplay: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
    // closeMarkup: '<button title="%title%" class="mfp-close" style="position: absolute; top: 30px; right: -15px"><img src="img/exit1.png" width="20" height="20"/></button>',
	});
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
function openMenu() {
  document.getElementById("mySideNav").style.width = "250px";
  document.getElementById("main-nav").style.marginLeft = "250px";

}

function closeMenu() {
  document.getElementById("mySideNav").style.width = "0";
  document.getElementById("main-nav").style.marginLeft= "0";

}


$('.type-slider').slick({
  dots: false,
  arrows: false,
    infinite: true,
    autoplay: false,
    speed: 900,
  autoplaySpeed: 2000,
    slidesToShow: 4,
    centerMode: false,
    variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        autoplay: true,
        centerPadding: '40px',
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1200,
      settings: {
        autoplay: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        autoplay: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: false,
        autoplay: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

//
// $('.slider-products').slick({
//
//     dots: true,
//     arrows: true,
//
//       infinite: true,
//       autoplay: false,
//       speed: 900,
//     autoplaySpeed: 2000,
//       slidesToShow: 4,
//       centerMode: false,
//       variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 576,
//         settings: {
//           arrows: false,
//           dots: false,
//           centerMode: false,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
// });

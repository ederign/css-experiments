// Element.prototype.setDefaultStyles = function () {
//     var element = document.createElement( this.tagName ),
//         styles = window.getComputedStyle( element ),
//         display = styles.getPropertyValue( 'display' );
//     element.style.display = 'none';
//     document.body.appendChild( element );

//     for( style in styles ) {
//         this.style[styles[style]] = styles.getPropertyValue(styles[style]);   
//     };

//     this.style.display = display;
//     document.body.removeChild( element );
// };
// $( document ).ready(function() {
//     document.getElementById( 'unstyled' ).setDefaultStyles();
// });


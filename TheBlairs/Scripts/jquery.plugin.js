(function ( $ ) {
 
    $.fn.showLinkLocation = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
        }, options );
 
        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });
 
        return this;
 
    };
 
}( jQuery ));
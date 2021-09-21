$( document ).ready( function() {

    handleDropdowns( '.js_menu_item', '.js_menu_trigger', '.js_menu_content' );

} );

var contentElemToShow;

function handleDropdowns( itemSelector, triggerSelector, contentSelector ) {

  var handlers = []; // je sais pas si map ca existe partout

  $( itemSelector ).each( function( index, elem ) {

    handlers.push( handleDropdownItem( elem, triggerSelector, contentSelector ) );

  } );

  // this click happens after menu item clicks.
  $( 'body' ).click( function() {

    handlers.forEach( function( handler ) {

      if ( handler.contentElem === contentElemToShow ) {

        handler.show();

      } else {

        handler.hide();

      }

    } );

    contentElemToShow = null;

  } );

}

function handleDropdownItem( menuItem, triggerSelector, contentSelector ) {

  var triggerElem = $( triggerSelector, menuItem );
  var contentElem = $( contentSelector, menuItem );

  $( triggerElem ).click( function() {

    if ( !_isShowing( contentElem ) ) return;

    contentElemToShow = contentElem;

  } );

  $( contentElem ).click( function() {

    contentElemToShow = contentElem;

  } );

  return {
    hide: _hide.bind( null, contentElem ),
    show: _show.bind( null, contentElem ),
    contentElem: contentElem
  }

}


function _show( elem ) {

  elem.attr( 'style', '' );

}

function _hide( elem ) {

  elem.attr( 'style', 'position:absolute; left: -10000px;' );

}

function _isShowing( elem ) {

  return elem.attr( 'style' ) === 'position:absolute; left: -10000px;';

}

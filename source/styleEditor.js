$(document).ready(function(){
  // your code goes here.
  $('form#style_editor').submit(event => {
    event.preventDefault()
    let selector = $('input[name="selector"]').val()
    let property = $('input[name="property"]').val()
    let value = $('input[name="value"]').val()

    $(selector).css(property, value)
  })
});

function makeGrid(makeGrid){

    function makePalette(){

    for (let index = 0; index < 64; index++){
        let div = $('<div class="cell"></div>')
        $('.grid').append(div);
         }




    const PALETTE = [
        'red',
        'blue',
        'orange',
        'green',
        'purple',
        'pink',
        'black'
    
      ]

    for (let index = 0; index < PALETTE.length; index = index + 1) {
        const nextColor = PALETTE[index]
        let button= $('<button>').css('backgroundColor', nextColor);
        $('.palette').append(button);

        
      }
      $('.palette button').first().addClass('active');

}
  makePalette();


}
    makeGrid();
    function onPaletteClick(){

        $('.palette button').removeClass('active');
        $(this).addClass('active');
    }
    
    $('.palette button').click(onPaletteClick);
    onPaletteClick();


    function onGridClick(){
        const paletteColor = $('.palette .active').css('backgroundColor');
        $(this).css('backgroundColor', paletteColor);
        if ($(this).css('backgroundColor') === $('.palette .active')){
            $(this).css('backgroundColor', '')
        }
        else $(this).css('backgroundColor', $('.palette .active').css('backgroundColor'));
    }
    $('.cell').click(onGridClick)

    function onClearClick(){
        $('.controls .clear').click(function(){
        $('.grid .cell').css('backgroundColor', '');
    })
    }
    $('.grid .cell').click(onClearClick);
        

    function onFillAllClick(){
        $('.controls .fill-all').click(function(){
            let targetElement = $('.palette .active').css('backgroundColor');
            $('.grid .cell').css('backgroundColor');
          })
          
          $('.fill-all').click(onFillAllClick)

    }
    onFillAllClick()


    function onFillEmptyClick() {
    $('.controls .fill-empty').click(function(){
    const elements = $('.grid .cell');
    for (let index = 0; index < elements.length; index++) {
        let nextElement = $(elements[index]);
      if ($(nextElement.css('backgroundColor') === 'rgba(0, 0, 0, 0)')){
        $(nextElement).css('backgroundColor', $('.palette .active').css('backgroundColor'));
      }
      }
    })
    $('.fill-empty').click(onFillEmptyClick);
  }
  onFillEmptyClick()
 
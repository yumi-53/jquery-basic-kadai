$(function(){
  // 文字色変化
  $('#change-color').on('click', () => {
    $('#target').css('color', 'red');
  })

  // 文字内容変化
  $('#change-text').on('click', () => {
    $('#target').text('Hello!');
  })
  
  // フェードアウト
  $('#fade-out').on('click', () => {
    $('#target').fadeOut();
  });

  // フェードイン
  $('#fade-in').on('click', () => {
    $('#target').fadeIn();
  });
});
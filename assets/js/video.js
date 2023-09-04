(function($) {
  const btn = document.querySelector('.btn');
  const videoContainer =  document.querySelector('video-container');
  const close = document.querySelector('.close');

  btn.addEventListener('click', function() {
    videoContainer.classList.add('show');
  })

  /*close.addEventListener('click', function() {
    videoContainer.classList.remove('show');*/
  });
})(jQuery);

var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      part: 'snippet',
      type: 'video'
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(e) {
      console.error(e);
    }
  });
};

window.searchYouTube = searchYouTube;
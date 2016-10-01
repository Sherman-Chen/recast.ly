
var searchYouTube = (options, callback) => {
  //var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + maxresult + '&q=' + search + '&type=video&videoEmbeddable=true&key=' + window.YOUTUBE_API_KEY;
  //console.log(url);

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
    contentType: 'json',
    success: function(data) {
      callback(data.items);
    },
    error: function(e) {
      console.error(e);
    }
  });
};

window.searchYouTube = searchYouTube;
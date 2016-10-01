var VideoListEntry = (props) => {
  var attributes = props.video.snippet;
  var trigger = props.onClick;
  return (
  <div className="video-list-entry" onClick={trigger.bind(this, null, props.video)}>
    <div className="media-left media-middle">
      <img className="media-object" src={attributes.thumbnails.default.url} alt={attributes.description} />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{attributes.title}</div>
      <div className="video-list-entry-detail">{attributes.description}</div>
    </div>
  </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;

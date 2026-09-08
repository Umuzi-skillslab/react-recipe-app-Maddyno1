import styles from "./Media.module.css";
import { getYoutubeVideoId } from "../../utils/helpers";

// Default video keeps the player functional
//Embedding YouTube links to allow them to play
const VideoPlayer = ({ videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4", title = "Cooking Tutorial" }) => {
  const youTubeId = getYoutubeVideoId(videoUrl);

  return (
    <div className={styles.videoContainer}>
      <h3>{title}</h3>
      {youTubeId ? (
        <iframe
          className={styles.videoFrame}
          width="100%"
          src={`https://www.youtube.com/embed/${youTubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video controls width="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
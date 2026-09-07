import styles from "./Media.module.css";

// Default video keeps the player functional
const VideoPlayer = ({ videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4", title = "Cooking Tutorial" }) => {
  return (
    <div className={styles.videoContainer}>
      <h3>{title}</h3>
      <video controls width="100%">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
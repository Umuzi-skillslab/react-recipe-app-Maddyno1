import styles from "./Media.module.css";

//Default audio keeps player functional
const AudioPlayer = ({ audioUrl = "https://www.w3schools.com/html/horse.mp3", title = "Cooking Tip" }) => {
  return (
    <div className={styles.audioContainer}>
      <h4>{title}</h4>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
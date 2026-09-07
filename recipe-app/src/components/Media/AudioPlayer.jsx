import styles from "./Media.module.css";

const AudioPlayer = ({ audioUrl, title }) => {
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
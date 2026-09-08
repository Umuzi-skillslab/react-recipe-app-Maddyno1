import styles from "./Media.module.css";

//Default audio keeps player functional
const AudioPlayer = ({ audioUrl = "https://www.w3schools.com/html/horse.mp3", title = "Cooking Tip", image}) => {
  return (
    <div className={styles.audioContainer}>
      {image && <img src={image} alt={title} className={styles.audioImage}/>}
      <h4>{title}</h4>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
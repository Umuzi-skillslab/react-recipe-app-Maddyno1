import styles from "./Media.module.css";

const VideoPlayer = ({ videoUrl, title }) => {
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
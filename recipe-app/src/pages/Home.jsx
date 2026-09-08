import Card from "../components/UI/Card";
import AudioPlayer from "../components/Media/AudioPlayer";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={`page ${styles.home}`}>
            <h1>Welcome to THE FLAMING INFERNO</h1>
            <p>Browse a wide range of recipes from around the world, save your favorites, and plan your meals for the week.</p>
            <p><em>Scorching your taste buds with unbelievable flavor.</em></p>
            {/*Audio is wrapped in a card*/}
            <Card title="Cooking Tip of the Day!" className={styles.tipCard}>
                <AudioPlayer
                    audioUrl="https://www.w3schools.com/html/horse.mp3"
                    title="Cooking Tips: Getting started in the kitchen"
                    image="/assets/images/lasagna.jpg"
                />
            </Card>
        </div>
    );
}

export default Home;
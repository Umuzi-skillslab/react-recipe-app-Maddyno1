import Card from "../components/UI/Card";
import AudioPlayer from "../components/Media/AudioPlayer";

function Home() {
    return (
        <div className="page">
            <h1>Welcome to THE FLAMING INFERNO 🔥</h1>
            <p>Browse a wide range of recipes from around the world, save your favorites, and plan your meals for the week.</p>
            <p><em>FLAMING INFERNO: Scorching your taste buds with unbelievable flavor.</em></p>
            {/*Audio is wrapped in a card*/}
            <Card title="Cooking Tip of the Day!">
                <AudioPlayer
                    audioUrl="https://www.w3schools.com/html/horse.mp3"
                    title="Cooking Tips: Getting started in the kitchen"
                />
            </Card>
        </div>
    );
}

export default Home;
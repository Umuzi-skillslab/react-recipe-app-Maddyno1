import AudioPlayer from "../components/Media/AudioPlayer";

function Home() {
    return (
        <div>
            <h1>Welcome to THE FLAMING INFERNO</h1>
            <p>Browse a wide range of recipes from around the world, choose your favorites, and plan your meals for the week</p>
            <p>FLAMING INFERNO: Scorching your taste buds with unbelievable flavor</p>
            <AudioPlayer
                audioUrl="https://www.w3schools.com/html/horse.mp3"
                title="Cooking Tips: Getting started in the kitchen"
            />
        </div>
    );
}

export default Home;
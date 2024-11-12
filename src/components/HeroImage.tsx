import { useState } from "react";

function HeroImage() {
let items = [
    "The joy we feel has little to do with the circumstances of our lives and everything to do with the focus of our lives.",
    "Your mind is precious! It is sacred. Therefore, the education of one's mind is also sacred.",
    "We need to put God in the forefront of everything.",
    "True disciples of Jesus Christ are willing to stand out, speak up, and be different from the people of the world.",
    "The Lord will make much more out of our lives than we can by ourselves.",
    "Our theology begins with Heavenly Parents. Our highest aspiration is to be like them.",
    "True love is a process, not an event. It is not the proclamation of a promise. It's the constant rendition of a commitment.",
    "The joy of the saints is most precious in the eyes of the Lord.",
    "As you choose to live on the Lord's side, you're never alone."

]
const[selectedQuote,setSelectedQuote] = useState("")

const selectRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedQuote(items[randomIndex]);
};

return(
    
    <>
    <h1>President Nelson Quotes</h1>
    <img src="public/russel.jpeg" alt="" />
    <p>{selectedQuote || "Click the button to get a quote!"}</p>
    <button onClick={selectRandomQuote}>Get Random Quote</button>
    
    
    
    </>

)

}
export default HeroImage;
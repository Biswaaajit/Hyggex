import { useGSAP } from "@gsap/react";
import Questions from "../Components/Questions";
import gsap from "gsap";

function Game() {
  useGSAP(() => {
    gsap.from("#game", {
      scale: 0,
      opacity: 0,
      ease: "power1.in",
    });
  }, []);
  return (
    <div id="game">
      <Questions>Game</Questions>
    </div>
  );
}

export default Game;
Game;

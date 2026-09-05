import { Sounds } from "@/data/sounds";

export const useSound = () => {
  const play = (name: string) => {
    const sound = Sounds.find((sound) => sound.name === name);

    if (!sound) {
      console.warn(`Sound "${name}" not found.`);
      return;
    }

    const audio = new Audio(sound.source);

    audio.play().catch((error) => {
      console.warn(`Failed to play sound "${name}".`, error);
    });
  };

  return {
    play,
  };
};

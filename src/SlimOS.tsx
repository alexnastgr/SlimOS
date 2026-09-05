import { useScreen } from "@/hooks/useScreen";

export default function SlimOS() {
  const { renderScreen } = useScreen();
  return renderScreen();
}

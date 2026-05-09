import { ProfileGate } from "@/components/ProfileGate";
import { RetroComputer } from "@/components/RetroComputer";

export default function EntryPage() {
  return (
    <div className="bg-black">
      <RetroComputer />
      <div id="profiles">
        <ProfileGate />
      </div>
    </div>
  );
}

import { ProfileGate } from "@/components/ProfileGate";
import { RetroComputer } from "@/components/RetroComputer";

export default function EntryPage() {
  return (
    <main>
      <RetroComputer />
      <div id="profiles" className="bg-[#050505]">
        <ProfileGate />
      </div>
    </main>
  );
}

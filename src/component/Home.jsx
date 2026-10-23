
import HeroBanner from './HeroBanner';

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      

      <main className="flex-1 min-h-0 overflow-hidden">
        <HeroBanner />
      </main>
    </div>
  );
}
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-1 min-h-0 overflow-hidden">
        <HeroBanner />
      </main>
    </div>
  );
}
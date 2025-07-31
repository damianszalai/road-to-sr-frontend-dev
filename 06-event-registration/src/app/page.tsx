// 06-event-registration/src/app/page.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto text-center mt-4">
      <h1 className="font-semibold text-4xl mb-4">Bienvenido!</h1>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}

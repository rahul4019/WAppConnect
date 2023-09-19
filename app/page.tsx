import Image from 'next/image';
import Container from '@/components/ui/container';
import LoginSignupTab from '@/components/ui/loginSignupTab';
import { Work_Sans } from 'next/font/google';
const work_sans = Work_Sans({ subsets: ['latin'], weight: '400' });

export default async function Home() {
  return (
    <main className="flex min-h-screen  min-w-full flex-col items-center justify-between bg-green-200 p-4">
      <Container>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          {/* Title */}
          <div className="flex w-full max-w-lg items-center justify-center gap-2 rounded-sm border bg-white py-4">
            <Image src="/whatsapp.png" alt="logo" width={40} height={40} />
            <h1 className={`text-3xl ${work_sans.className}`}>WAppConnect</h1>
          </div>

          {/* Form */}
          <div className="flex w-full max-w-lg justify-center rounded-sm border bg-white py-4">
            <LoginSignupTab />
          </div>
        </div>
      </Container>
    </main>
  );
}

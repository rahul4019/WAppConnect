import Container from '@/components/ui/container';
import LoginSignupTab from '@/components/ui/loginSignupTab';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between min-w-full p-4 bg-blue-200'>
      <Container>
        <div className='flex gap-3 flex-col justify-center w-full'>
          {/* Title */}
          <div className='flex w-full justify-center py-4 rounded-sm border bg-white max-w-md'>
            <h1 className='text-3xl'>WAppConnect</h1>
          </div>

          {/* Form */}
          <div className='flex w-full justify-center py-4 rounded-sm border bg-white max-w-md'>
            <LoginSignupTab />
          </div>
        </div>
      </Container>
    </main>
  );
}

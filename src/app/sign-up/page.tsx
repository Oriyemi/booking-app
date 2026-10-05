import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <SignUp />
    </main>
  );
}
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className='auth flex h-screen justify-center items-center'>
        <SignUp />
    </main>
  )
}
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



export const metadata = {
  title: 'Afri-Dev-Connect',
  description: 'Discover and Connect with Developers in Africa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

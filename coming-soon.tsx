import { HardHat, Hammer } from 'lucide-react'
import Image from 'next/image'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-3xl w-full space-y-12 text-center">
        <div className="flex flex-col items-center space-y-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gBt8xXnjt7BEi0VVSKrq7GF4GWugOO.png"
            alt="Johnson Unlimited - We plan the work."
            width={800}
            height={200}
            priority
            className="w-full max-w-2xl"
          />
          <div className="flex justify-center items-center space-x-4 animate-pulse">
            <HardHat size={48} className="text-[#2B5741]" />
            <Hammer size={48} className="text-[#2B5741]" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in-down">
          Site Under Construction
        </h2>
        
        <div className="w-full h-2 bg-[#2B5741] my-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-white animate-construction-line"></div>
        </div>
        
        <p className="text-xl text-gray-600 mb-8 animate-fade-in-up max-w-xl mx-auto">
          Our new website is currently under development. Check back soon to see our progress.
        </p>
      </div>
    </div>
  )
}

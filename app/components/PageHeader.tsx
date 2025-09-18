import React from 'react'
import { Heart } from 'lucide-react'

interface PageHeaderProps {
  title: string
  description: string
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section className="relative bg-[#EAD7BD] py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src="/golden.png"
              alt="Cachorro da raça golden"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-[#E67E22] p-3 rounded-full shadow-md">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <h1 className="font-serif font-black text-4xl md:text-6xl text-[#3A3A3A] mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
import React from 'react'
import { Heart } from 'lucide-react'
import { Button } from './ui/button'

export const CtaSection = () => {
  return (
    <section className="bg-[#EAD7BD] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#3A3A3A] mb-6">
          Faça a Diferença Hoje
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Cada ligação, cada doação, cada hora de voluntariado pode
          transformar a vida de um animal. Entre em contato com as ONGs e
          descubra como você pode ajudar.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">
            <Heart className="h-5 w-5 mr-2" />
            Divulgue sua ONG
          </Button>
        </div>
      </div>
    </section>
  )
}
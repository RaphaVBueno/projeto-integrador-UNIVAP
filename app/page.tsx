'use client'

import React from 'react'
import { Heart, Phone, Instagram, MapPin } from 'lucide-react'

interface ComponentProps {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className = '' }: ComponentProps) => (
  <div
    className={`bg-[#FFFCF5] rounded border border-[#E67D22] shadow-sm transition-shadow duration-300 hover:shadow-lg ${className}`}
  >
    {children}
  </div>
)

const CardHeader = ({ children, className = '' }: ComponentProps) => (
  <div className={`p-6 ${className}`}>{children}</div>
)

const CardTitle = ({ children, className = '' }: ComponentProps) => (
  <h3
    className={`font-serif text-xl font-bold text-[#3A3A3A] leading-tight ${className}`}
  >
    {children}
  </h3>
)

const CardDescription = ({ children, className = '' }: ComponentProps) => (
  <p className={`text-sm text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
)

const CardContent = ({ children, className = '' }: ComponentProps) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'secondary'
  size?: 'default' | 'lg'
}

const Button = ({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    default: 'bg-[#E67E22] text-white hover:bg-[#D35400] focus:ring-[#E67E22]',
    secondary:
      'bg-[#3498DB] text-white hover:bg-[#2980B9] focus:ring-[#3498DB]',
  }

  const sizeClasses = {
    default: 'h-10 px-4 py-2 text-sm',
    lg: 'h-11 px-8 text-base',
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}

const ongs = [
  {
    id: 1,
    nome: 'CAV Clube Amigo Viralata',
    descricao:
      'O CLUBE AMIGO VIRA-LATA (CAV) é uma associação civil sem fins lucrativos que apoia a causa animal.',
    telefone: '(12) 99711-1204',
    instagram: '@cav_sjc',
    cidade: 'São José dos Campos, SP',
  },
  {
    id: 2,
    nome: 'Instituto Adota Pet SJC - Ong',
    descricao: 'ONG focada na adoção de animais domésticos.',
    telefone: '(12) 98765-4321',
    instagram: '@adotapetsjc',
    cidade: 'São José dos Campos, SP',
  },
  {
    id: 3,
    nome: 'Projeto Ajuda Pet',
    descricao:
      'Trabalha com adoção responsável animais de rua em São José dos Campos.',
    telefone: '(12) 91234-5678',
    instagram: '@projetoajudapetsjc',
    cidade: 'São José dos Campos, SP',
  },
  {
    id: 4,
    nome: 'Aubrigo da Tia Dany',
    descricao:
      'ONG tem como principal objetivo promover a proteção dos animais em situação de risco.',
    telefone: '(12) 98807-2429',
    instagram: '@vaubrigodatiadany_',
    cidade: 'São José dos Campos, SP',
  },
  {
    id: 5,
    nome: 'OPAR',
    descricao: 'Trabalha com adoção responsável e castração gratuita.',
    telefone: '(12) 99720-0120',
    instagram: '@opar.ong',
    cidade: 'São José dos Campos, SP',
  },
  {
    id: 6,
    nome: 'ONG VIREI VIRA LATA',
    descricao: 'Proteção e resgate animal.',
    telefone: '(12) 99230-8515',
    instagram: '@ongvireiviralata_sjcampos',
    cidade: 'São José dos Campos, SP',
  },
]

export default function ONGsPage() {
  return (
    <div className="min-h-screen bg-[#FEFBF6] font-sans">
      {/* Seção do Cabeçalho */}
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
            ONGs que Ajudam Animais
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Descubra organizações dedicadas ao bem-estar animal e faça a
            diferença na vida de quem mais precisa. Cada contato pode salvar uma
            vida.
          </p>
        </div>
      </section>

      {/* Grade de ONGs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongs.map((ong) => (
              <Card key={ong.id} className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle>{ong.nome}</CardTitle>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1.5" />
                    {ong.cidade}
                  </div>
                  <CardDescription>{ong.descricao}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow">
                  <div className="mt-auto">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#F0EBE3]">
                        <Phone className="h-4 w-4 text-[#E67E22] shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          {ong.telefone}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#F0EBE3]">
                        <Instagram className="h-4 w-4 text-[#3498DB] shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          {ong.instagram}
                        </span>
                      </div>
                    </div>

                    {/* Botões de Ação */}

                    <div className="flex gap-3 mt-6">
                      <Button
                        className="flex-1"
                        onClick={() =>
                          window.open(`tel:${ong.telefone.replace(/\D/g, '')}`)
                        }
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Ligar
                      </Button>
                      <Button
                        variant="secondary"
                        className="flex-1"
                        onClick={() =>
                          window.open(
                            `https://instagram.com/${ong.instagram.replace(
                              '@',
                              ''
                            )}`
                          )
                        }
                      >
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
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

      {/* Rodapé */}
      <footer className="bg-[#EAD7BD] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Feito com ❤️ para conectar pessoas que amam animais com ONGs que
            fazem a diferença.
          </p>
        </div>
      </footer>
    </div>
  )
}

'use client'

import { OngCard } from '@/app/components/OngCard'
import { PageHeader } from '@/app/components/PageHeader'
import { CtaSection } from '@/app/components/CtaSection'
import { Footer } from '@/app/components/Footer'

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
    nome: 'Instituto Adota Pet SJC',
    descricao: 'ONG focada na adoção de animais domésticos.',
    telefone: '(12) 99714-4448',
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
      <PageHeader
        title="ONGs que Ajudam Animais"
        description="Descubra organizações dedicadas ao bem-estar animal e faça a
          diferença na vida de quem mais precisa. Cada contato pode salvar uma
          vida."
      />

      {/* Grade de ONGs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongs.map((ong) => (
              <OngCard key={ong.id} ong={ong} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </div>
  )
}

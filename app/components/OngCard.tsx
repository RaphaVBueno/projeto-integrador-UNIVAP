import { MapPin, Phone, Instagram } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

interface Ong {
  id: number
  nome: string
  descricao: string
  telefone: string
  instagram: string
  cidade: string
}

interface OngCardProps {
  ong: Ong
}

export const OngCard = ({ ong }: OngCardProps) => {
  return (
    <Card className="flex flex-col h-full">
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
                  `https://instagram.com/${ong.instagram.replace('@', '')}`
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
  )
}
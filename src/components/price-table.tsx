import { formatPrice } from "../lib/utils"

interface PriceItem {
  service: string
  description: string
  price: number
}

interface PriceTableProps {
  category: string
  items: PriceItem[]
}

const PriceTable = ({ category, items }: PriceTableProps) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-6 text-[#CFAF5E]">{category}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#333]">
              <th className="py-4 px-4 text-left text-[#CFAF5E]">Serviço</th>
              <th className="py-4 px-4 text-left text-[#CFAF5E]">Descrição</th>
              <th className="py-4 px-4 text-right text-[#CFAF5E]">Preço</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b border-[#333] hover:bg-[#1a1a1a] transition-colors">
                <td className="py-4 px-4 font-medium">{item.service}</td>
                <td className="py-4 px-4 text-[#D1D1D1]">{item.description}</td>
                <td className="py-4 px-4 text-right font-medium text-[#CFAF5E]">{formatPrice(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PriceTable

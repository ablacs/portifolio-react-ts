import { P } from './styles'
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}
// index.tsx
const Paragrafro = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafro

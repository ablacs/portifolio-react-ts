import { P } from './styles'
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}
// index.tsx
const Paragrafro = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafro

import { Titulo } from './styles'
export type Props = {
  children: string
  fontSize?: number
}
// index.tsx
const Title = (props: Props) => (
  <Titulo fontSize={props.fontSize}>{props.children}</Titulo>
)

export default Title

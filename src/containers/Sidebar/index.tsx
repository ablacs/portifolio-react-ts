import Avatar from '../../components/Avatar'
import Paragrafro from '../../components/Paragrafro'
import Title from '../../components/TItle'
import { Descricao, BotaoTema, SidebarContainer } from './styles'
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Title fontSize={20}>Arthur Brisola</Title>
      <Paragrafro tipo="secundario" fontSize={16}>
        ablacs
      </Paragrafro>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar

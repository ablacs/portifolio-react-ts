import Title from '../../components/TItle'
import Paragrafro from '../../components/Paragrafro'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafro tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, hic
      animi? Beatae qui illum expedita doloremque ex? Exercitationem laboriosam
      obcaecati, ad, cum eligendi illo odit quia voluptate vero accusantium
      dignissimos!
    </Paragrafro>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=ablacs&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ablacs&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)
export default Sobre

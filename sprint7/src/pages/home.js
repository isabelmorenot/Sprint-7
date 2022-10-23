import { HomeStyle,PresButton} from '../components/styled';

const Home = ()=> 
    <div>
        <HomeStyle>
            <h1>Calcular presupuesto de los servicios que desees</h1>
            <h3>Obtén de inmediato un precio preciso de tus servicios: ¡Es muy fácil y rápido! </h3>
            <p>Tienes diferentes opciones de servicios : </p>
            <li>Página Web</li>
            <li>Consultoria SEO</li>
            <li>Campaña Google Ads</li>
            <br/>
            <b>Haz click en la siguiente sección</b>
            <br/>
            <br/>
            <PresButton>
                <a href='/services/'>Calcular presupuesto</a>
            </PresButton>
        </HomeStyle>
    </div>

export default Home;
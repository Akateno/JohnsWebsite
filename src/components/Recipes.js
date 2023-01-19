
// import CelebratorDoppelbock from "../components/pdf/CelebratorDoppelbock.pdf";
import {CelebratorDoppelbock,AnchorSteam,Hutchweizer,Meisterburger,PilsBabyPils,ShabbyFest,StellaArtois} from "../components/pdf/index.js";



function Recipes(){
    return(
        <div>
            <p>
                Recipes are designed for 5 gallon batches using either Extract with specialty grains or All Grain processes.  Gravity,  ABV,  IBU,  and SRM measurements are estimates.  Recipes marked with a * are exclusive Jon’s Homebrew Recipes.
            </p>
            <p>Clone recipes are educated guesses and imply no endorsement or participation by the original breweries.  Your results will vary.</p>
            <h3>Lagers</h3>
            <ul>
                <li>
                <a href={CelebratorDoppelbock} without rel="noopener noreferrer" target="_blank"> CelebratorDoppelbock </a>
                </li>
                <li>
                <a href={AnchorSteam} without rel="noopener noreferrer" target="_blank"> AnchorSteam </a>
                </li>
                {/* <li>
                <a href={ShabbyFest} without rel="noopener noreferrer" target="_blank"> Hutchweizer </a>
                </li> */}
                
            </ul>
        </div>
    )
}
export default Recipes;
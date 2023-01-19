import jlogo from '../jlogo.webp'; 
import SheBrewLogo from '../SheBrewLogo.png'; 
import National from '../NationalHomeBrew.png';
import WineMaker from '../WineMaker.jpeg';
import Cascade from '../CascadeGuild.png';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    return (
        <div>
            <img class ='logo' src={jlogo} alt ="website logo"></img>
            {/* <h1>Jon's Homewbrew and Wine Supply</h1> */}
            <h4 class="text-center">1430 E Main Ave #1430C Puyallup WA 98372</h4>
            <h4 class = "text-center">Call us!: 253-286-7607</h4>

            <div>
            
            </div>



            <div class='container'>
                <div class="">

                    <h3>Competitions</h3>
                    <div class="SheBrewLogo">
                         {/* <img class ='image' src={SheBrewLogo} alt ="SheBrewLogo" ></img> */}
                     </div>
                     <img class ='SheBrewLogo' src={SheBrewLogo} alt ="SheBrewLogo" ></img>

                     <div class="">
                             <h5 >SheBrew Competition 2023 - Portland</h5>
                             <h6 >Window for entry drop off: 1/16/2023-2/17/2023</h6>
                             <h6 class="text-left">Competitoin Date: 2/26/23</h6>
                    </div>
                    <div class="SheBrewLogo">
                         {/* <img class ='image' src={SheBrewLogo} alt ="SheBrewLogo" ></img> */}
                     </div>
                     <img class ='SheBrewLogo' src={National} alt ="SheBrewLogo" ></img>

                     <div class="">
                             <h5 >2023 National HomeBrew Competition</h5>
                             <h6 >Registration Open: 1/24/2023</h6>
                             <h6 class="text-left">Window for entries:TBD</h6>
                    </div>

                    <div class="SheBrewLogo">
                         {/* <img class ='image' src={SheBrewLogo} alt ="SheBrewLogo" ></img> */}
                     </div>
                     <img class ='SheBrewLogo' src={Cascade} alt ="SheBrewLogo" ></img>

                     <div class="">
                             <h5 >25th Cascade Brewers Cup</h5>
                             <h6 >Window for entries: 3/1/2023 – 3/17/2023  *Jon’s Homebrew and Wine Supply is a drop off location</h6>
                             <h6 class="text-left">Competition Date: 3/24/2023-3/26/2023</h6>
                    </div>





                    <div class="SheBrewLogo">
                         {/* <img class ='image' src={SheBrewLogo} alt ="SheBrewLogo" ></img> */}
                     </div>
                     <img class ='SheBrewLogo' src={WineMaker} alt ="SheBrewLogo" ></img>

                     <div class="">
                             <h5 >2023 Winemaker International Ameteur Wine Competition - Wine</h5>
                             <h6 >Entry Deadline: 3/17/2023</h6>
                             <h6 class="text-left">Competition Date: 4/21/2023 – 4/23/2023</h6>
                    </div>
                </div>


                

                


            </div>

            {/* <div class='container'>
                <div class="row text-center">
                    <div class="col-mid-6">
                         <img class ='SheBrewLogo' src={SheBrewLogo} alt ="SheBrewLogo" width="200" height="100"></img>
                 </div>
                <div class="col-mid-6">
                    <h5 class="text-left">SheBrew Competition 2023 - Portland</h5>
                     <h6 class="text-left">Window for entry drop off: 1/16/2023-2/17/2023</h6>
                     <h6 class="text-left">Competitoin Date: 2/26/23</h6>
                 </div>
                 </div>
            </div> */}














        </div>

        
    )
  }

  export default Home; 
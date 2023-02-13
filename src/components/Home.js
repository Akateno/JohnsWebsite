import jlogo from '../jlogo.webp'; 
import SheBrewLogo from '../SheBrewLogo.png'; 
import National from '../NationalHomeBrew.png';
import WineMaker from '../WineMaker.jpeg';
import Cascade from '../CascadeGuild.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import YoutubeEmbed from "./YoutubeEmbed";
import Bottles from '../Bottles.jpg'
import Hops from '../hops.jpg'
import Beer from '../Beer.jpg'




function Home() {
    return (
        <div className='homeContainer'>

            <div className="homeHeader" >
                 <img class ='logo' src={jlogo} alt ="website logo"></img>
             <h1>Find Ingridients, Starting Kits and Equipment</h1> 
             
            </div>
            <div className='fillerDiv'></div>

            <div class='row'>
                <div class='column'>
                    <img className ='three' src={Hops} alt ="website logo" />
                </div>
                <div class='column'>
                    <img className ='three' src={Bottles} alt ="website logo" />
                </div>
                <div class='column'>
                    <img className ='three' src={Beer} alt ="website logo"/>
                </div>
                
               
            </div>
            
             {/* <h4 class="text-center">1430 E Main Ave #1430C Puyallup WA 98372</h4>
            <h4 class = "text-center">Call us!: 253-286-7607</h4>   */}
            

            {/* <video tabindex="-1" class="video-stream html5-main-video" data-no-fullscreen="true" webkit-playsinline="" playsinline="" controlslist="nodownload" style="width: 2354px; height: 1324px; left: 0px; top: 60px;" src="blob:https://www.youtube-nocookie.com/f05c45b0-6778-4bcf-a4eb-f8dacb0c0771"></video> */}





            <div className="YoutubeHeaders">
                <h2>New to Brewing?</h2>
                <h4>Follow us on Youtube to learn more!</h4>
            </div>
            <div class ='wrapper'>
            <YoutubeEmbed embedId="s9WgjG2248E" class="home1"/>
            <YoutubeEmbed embedId="SQJ_xFjewvc" class="home2"/> 
            </div>



            <div class='container'>
                <div class="">
                    <div className='CompTitle'>
                        <h2>Competitions</h2>
                    </div>
                    
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






            <h6 class="text-center">1430 E Main Ave #1430C Puyallup WA 98372</h6>
            <h6 class = "text-center">Call us!: 253-286-7607</h6>   







        </div>

        
    )
  }

  export default Home; 
import john from '../Images/AboutPage/john.webp';
import brewing from '../Images/AboutPage/brewing.jpeg';
import favoritewine from '../Images/AboutPage/cup.jpeg';
import keig2 from '../Images/AboutPage/keig2.jpeg';

function About() {
    return (
    <div className="aboutPage">
        

         <div class="aboutContainer">
             <h3 class="text-center">Meet John</h3>
             <div class="text-center ">
                <img className="johnImage" src={john} width="300px"/>
             </div>
              <div className='biodiv'>
                 <p><strong>John </strong>Hello I am Jon Sleight, owner of Jon’s Homebrew and Wine Supply.  I started homebrewing in 1997, after taking a brewing class from the legendary Larry Rifenberick of Larry’s Brewing Supply.  Now, many, many batches of beer later I am bringing everything that I have learned to my own store in my home town of Puyallup.  I spent almost 30 years working in the musical instrument industry helping people learn to play, and acquire quality instruments.  I am excited to bring this passion to a new arena!  We have a great community of homebrewers and winemakers in this area, it will be my honor to do the best I can to support you.  I am looking forward to meeting you and hearing about your homebrewing and winemaking adventures!</p>

              </div>
           
        
        {/* <div class="row text-center">
        <div class="col-md-6">
            
            
            </div>
            <div class="col-md-6">
            <p><strong>John </strong>Hello I am Jon Sleight, owner of Jon’s Homebrew and Wine Supply.  I started homebrewing in 1997, after taking a brewing class from the legendary Larry Rifenberick of Larry’s Brewing Supply.  Now, many, many batches of beer later I am bringing everything that I have learned to my own store in my home town of Puyallup.  I spent almost 30 years working in the musical instrument industry helping people learn to play, and acquire quality instruments.  I am excited to bring this passion to a new arena!  We have a great community of homebrewers and winemakers in this area, it will be my honor to do the best I can to support you.  I am looking forward to meeting you and hearing about your homebrewing and winemaking adventures!</p>
        </div>
             </div> */}



             <div className='aboutImages'>
            
                <img src={brewing} className="aboutImage" alt="Responsive image"/>
            
            
                 <img src={favoritewine} className="aboutImage" alt="favoritewine"/>
            
            
                 <img src={keig2} className="aboutImage" alt="favoritewine"/>
            

             </div>
        </div> 




    </div>)
  }

  export default About; 
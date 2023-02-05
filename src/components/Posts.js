
import Post from "./Post";

const Posts = () => {
    const blogPosts = [
      {
        title: "Garage Lagers",
        date: '12/22/2022',
        body: `Brewing Lager beer is something that many homebrewers avoid because of the extra temperature control required. Lager yeast is a bottom fermenting yeast that likes to ferment cold, and can throw off some less than pleasing esters if that fermentation gets too warm. Add to that an extended cold storage period post fermentation, and brewing lagers is just out of reach of many homebrewers. But there are so many great lager beers and recipes out there, wouldn’t it be great to be able to brew them with the equipment we already have? Enter what I call “Garage Lagering”. It’s not as precise as having a temperature controlled chamber, or a chilling coil in your fermenter. But in these colder winter months around here it is possible to get the job done! This is exactly how I did my first experiments with lager fermentations.

        We can think of a lager fermentation as having 3 basic stages: Primary Fermentation, Diacetyl rest, and Lagering. During primary fermentation most lager yeasts like to be in the 50-55° range. When I realized that my garage was holding a pretty steady 50ish degree temperature during the winter I started thinking that brewing a lager was something I might actually be able to try! It’s also where my ultra catchy, creative name of “Garage Lagering” came from. Most garages are subject to some temperature swings, so wrapping your fermenter in a blanket or something can be beneficial. Not in order to keep it warm, but to slow the transitions between higher and lower ambient temps in the garage. Because we are fermenting colder than we do with ales, primary fermentation will take a little longer and require more yeast. A good rule of thumb is to use twice as much yeast for a lager fermentation as you would for an ale of the same gravity. It’s also best to pitch your yeast at close to the temperature you are planning to ferment at. This may mean letting your fermenter sit for a few hours or even overnight to give it time to get down that low. I like to give a lager about 2 weeks of primary fermentation. As we get towards the end of that 2 weeks and you notice fermentation slowing it will be time for our diacetyl rest. This basically means warming up the beer a little bit so the yeast can remain active. We want to encourage it to finish consuming the sugars that are available, and then go back and clean up some of the other compounds that were created during the initial stages of fermentation. Most of the yeast esters were formed early in fermentation, so warming up the beer at this stage of the process will have very little effect on these. In a well controlled fermentation this means warming it into the 60° range. In a garage lager this means bringing your fermenter into the house! We’ll give it a few days inside to warm up and finish our diacetyl rest.
        
        Next begins the cool down stage, and how we do this will depend on the equipment at your disposal. The beer is going to be sitting for anywhere from a few weeks to a few months, so my preference is to move it away from the sediment and into a secondary fermenter. No matter how far we cool it, our goal is to cool it slowly. Ideally, we will eventually get it down to refrigerator temperature, but if we do it too fast it will crash the beer and drop all of the yeast out of suspension. Once the beer is into the secondary the next step will be to move it back into the garage and start the cooling process. For some people this might be as far as it goes, and we will just stay at this temp for another couple of weeks before moving to bottles. My keezer gave me the option to get the beer a little colder. I rearranged the kegs to make room for my secondary fermenter and allowed the keezer to warm to the temperature of the garage. After placing the fermenter inside I start reducing the temperature by about 4 degrees a day until I am back down it’s normal 38°. Granted, I had a couple of days of pouring beers closer to cask temperature, but that was a fair trade! One important thing to be aware of is the dreaded suck back! The pressure in your fermenter changes as the beer cools, and can cause the liquid in your airlock to get sucked back into your fermenter! The ideal way to combat this is to route some sort of CO2 source to your fermenter to fill the headspace, but if you are doing garage lagering there is a good chance that this would be more complex than most people have the options to do. My solution was to put a dry airlock on it and let it suck in air. Not ideal, but better than sanitizer! If you have the ability to disconnect a keg and blow a little CO2 into the headspace, it’s not a bad idea. Once it stabilizes at the final temperature I would return to a filled airlock.
        
        After a few weeks sitting at whatever cooling temperature you can achieve, the next step is to bottle or keg as you normally would! There are definitely some corners being cut in my “Garage Lagering” method, but I have always been pleasantly surprised by the results! Often times homebrewing means looking at the tools and options you have available, and then simply doing what you can with what you’ve got! At the very least you will learn more about the process, and become a better brewer. At the very best….soon you will be sipping on some fine lager beer!`,
      },
      {
        title: "American IPA",
        date:'5/15/2022',
        body: `As the weather is warming up (ever so slowly) I am seeing more people looking to brew IPAs. I thought this might be a good time to re-share a paper I wrote a few years ago with some tips for brewing IPA. A few things have changed in the years since I wrote this, but most of the primary points still stand true!

        ~Cheers!
        IPA is the most popular craft beer style in America. Love it or hate it, IPA is the beer style that keeps the
cash registers of most brew pubs turning. Additionally, it’s popularity has been the guiding force
behind much of the hop research and development over the past few years. The history of IPA goes
back over a hundred years, however our focus here will be on American IPA styles which have only been
around for a few decades. These can be divided into two primary categories: West Coast IPA and East
Coast or New England IPA. Each of these, of course, has numerous variations some of which we will
discuss as well.
West Coast IPA
West Coast style IPA is a clear, somewhat bitter, very aromatic style of beer. Most commonly it is dry
hopped post fermentation with fruity or piney Northwest style hops. Cascade hops were the original,
used in Anchor Liberty Ale in the mid 70s and many other early IPAs. Malt character is usually slightly
sweet, but balanced by the hop bitterness. The finish is usually somewhat on the drier side allowing the
hop flavor and aroma to take center stage.
Grain
The grain bill for a West Coast style IPA is usually pretty simple. A common grain bill might be 85-90%
American 2-row for the base with the remainder split between Caramel malt and Cara-pils. It is not
unusual to see Corn sugar added, especially in Double and Imperial IPAs. Caramel malt is very
appropriate, in 5-10% quantities. We want to avoid grains such as wheat, or flaked grains which would
have a tendency to encourage haziness. The grain bill for Stone IPA, released in 1997, is 93.5% Pale malt,
and 6.5% C-15L. Pliny the Elder is a classic example of a Double IPA and one of the examples that sets
the standard. It consists of 87.3% 2-Row, 3.9% C-45L, 3.9% CaraPils, and 4.9% Corn Sugar. I like to use a
90/5/5 mix of base malt/caramel malt/and CaraPils as a starting point, with the color of the caramel
malt varying dependent on the desired final color. I also like to use a small amount (usually 4 oz.) of
Acidulated malt in all of my hoppier beers. For a Double or Imperial IPA adding ½-1 pound of sugar
helps to increase the ABV without overdoing the malt character of the beer. Since the sugar ferments
more fully than grain, we are able achieve lower final gravity than if we had just used more grain. The
important thought here is that while we do want some malt character, the hops are the star of the
show. I like to mash on the cooler side (148/150 degrees) to encourage a final gravity around 1.010 give
or take a couple of points. This will allow the hop character to be most dominant.
Hops
West Coast IPAs are typically a fairly bitter beer, with GU/BU (Gravity Unit/Bittering Units) ratios close to
1.0 or higher. For example, a beer with Original Gravity of 1.060, a common IBU level would be at least
60. Obviously, this varies widely, but it is a good starting point. High alpha, fairly neutral bittering hops
are preferred allowing you to get maximum bittering from smaller quantities of hops. Common choices
for a 60 minute addition are Columbus, Warrior, Galena, and Chinook. Modern recipes will often have
only a bittering hop addition, and late kettle hop additions (5 min, 0 min, or whirlpool). However, many
West Coast IPA recipes are a little older. It is not unusual to see mid-boil additions as was common at
the time. Late additions and Dry Hopping post fermentation are what give IPAs their characteristic
flavors and intense aromas. Dry hopping rates can vary significantly, but a good rule of thumb would be
to balance the rate of dry hopping to the ABV and IBU. Lower ABV and corresponding lower IBU would
lend themselves to lower dry hopping rates. For a single IPA I might use 2 ounces of total dry hops,
bigger IPAs might be appropriate with 4 or 5 ounces of total dry-hopping or more. Sometimes these very
large doses of dry hops can be split into two additions a couple of days apart. When choosing hops I
prefer to limit myself to 2 or 3 varieties of flavor/aroma hops, often with the same varieties used for
both late kettle additions and dry hopping. There are many good examples of IPAs using only a single
hop variety, however this results in a beer with little hop complexity. In most cases I prefer to feature
one hop variety, and use half the amount of 1 or 2 other varieties to support the featured hop. If we
start using too many different varieties for these late additions, we will likely get a muddy undefined
flavor. The palate of flavor and aroma hops is ever growing, but is normally on the fruity/citrus side with
occasional pine notes. Hops with more earthy, floral notes are normally avoided. I find that flameout,
and whirlpool additions lend a nice resinous quality to the flavor and aroma. Dry-hopping brings out all
of the intense aromas we are looking for in an IPA. It is most common to either move the beer to a
secondary fermenter, or pull the yeast from the beer (if using a conical fermenter) before adding the dry
hops. In this style we want to minimize any interaction between the yeast and the hops which might
result in haziness. Hops are added to the fermenter for a few days before kegging or bottling. If these
hops remain in contact with the beer for too long, or if the hops are old you will get unpleasing leafy or
vegetal flavors. I prefer to use the freshest pellet hops I can, and aim for about 3 days of contact time.
Many double or imperial IPAs use 2 stages of dry-hopping for even more aroma intensity. In this case I
would put the first addition with 5 or 6 days remaining, and the second at 3 days before packaging.
Some recent studies have found that many of the aromatic oils go into solution in as little as 24 hours.
Water
As with most brewing water, if it smells good and tastes good it is probably suitable for brewing West
Coast IPA. That said, there are things that you can do to tailor it more specifically for this style. If you are
using a city water source that has chlorine or chloramine added, removing it is foremost on the list. This
can be done by aerating and allowing brewing water to sit overnight, adding a campden tablet (1 tablet
will neutralize chlorine in up to 20 Gallons), or slowly passing through a charcoal filter. Water that is on
the harder side is usually preferred. The two most common additives for hardening water are Calcium
Sulfate (Gypsum) and Calcium Chloride. I like to use a blend of the two, but for this style I blend heavier
on the gypsum side of things. Gypsum will have a tendency to brighten up the hops and allow them to
shine in the overall mix. Calcium Chloride tends to accentuate the malt character in beer. The ideal way
to apply this is to have your water tested so you know what your starting point is, and then add the
necessary salts to reach a target profile. I use a less exact “seasoning” method, in which I am just
making small adjustments to my water much like putting salt and pepper on my food. I use 1 tsp. total
salts per 5 gallon batch dissolved into my strike water. In the case of West Coast IPA, I would use ¾ tsp
Gypsum and ¼ tsp Calcium Chloride. This is not very much. I am just trying to push my water a little bit in
a harder direction. I don’t want to overdo it.
Yeast
Clean American Ale yeast is most commonly used in West Coast style IPAs, though there are some great
examples that use a clean high flocculating British Strain (Stone IPA). Examples of the most common
American strains would be Imperial A07 Flagship, White Labs WLP001 California Ale, and Wyeast 1056
American Ale. These all source their origin back to the Chico strain of yeast originally used at Sierra
Nevada. The dry yeast US-05 is also a commonly used version of this strain. Imperial A01 House, White
Labs WLP007 Dry English, and Wyeast 1098 British are examples of the commonly used British strain. As
with all beer, pitching rates, nutrients and oxygen levels are extremely important. A single pack of
Wyeast or White Labs yeast normally contains 100 Billion yeast cells. This is appropriate for beers with
OG up to 1.045 or 1.050. If my OG is between 1.050 and 1.075 I will need more yeast. One pack of
Imperial yeast with 200 billion cells, or 2 packs of Wyeast or White labs gives you a good pitching rate.
Another option is to use a single 100 billion cell pack and use a yeast starter to increase the cell count.
For really big beers, I am going to use 2 packs of Imperial, or a really big starter. I would always prefer to
overpitch a little bit rather than take a chance on underpitching.
Process – Boil and Fermentation
Since pilsner malt is not commonly used in West Coast IPA, a 60 minute boil is normally all that is
necessary. This is the length of time needed to fully isomerize the Alpha Acids in your bittering hops.
However, I prefer to boil for 90 minutes for everything I brew. This allows me to be consistent with my
pre-boil volume for every batch, and I like giving the boil 30 minutes to settle in before I start adding
hops. I always use whirlfloc and yeast nutrient towards the end of the boil. Once my wort is in the
fermenter, I oxygenate at a moderate level for 1 minute prior to pitching my yeast. If you don’t have a
method for adding pure oxygen, just try to do what you can to increase the oxygen level in your wort.
This could be using an aquarium pump, stirring with a whisk, or even pouring back and forth between
vessels. Your yeast will appreciate it! I prefer to keep my fermentation a little on the cool side (64-66
degrees) in order to keep yeast esters low. This allows the hops to be the star of the show without other
flavors interfering. Towards the end of primary fermentation, I will allow the temperature to rise to
around 70 degrees for a few days. This encourages the yeast to remain active, thoroughly fermenting
through all of the sugars available, and cleaning up any compounds created in the early stages of
fermentation.
It may seem like these form a very narrow set of guidelines, but a wide range of beers have been
created that fit into this style! The most important elements are clarity, bitterness, and aromatics from
dry hopping. These are what set West Coast IPA apart from other styles. Start with those fundamentals
and let your creativity craft something special!
East Coast IPA/NEIPA
Rebellion is often the guiding force behind innovation. In my opinion there are 2 acts of rebellion that
spawned the beginning of what is now known as East Coast IPA, New England Style IPA, or simply a
Hazy. As West Coast IPA gained in popularity, brewers pushed the limits of bittering IBUs. This was not
to everyone’s liking, and the natural reaction was to push back the other way. The pendulum had swung
as far as it could go in the bitterness direction, and it began to swing back towards the other extreme.
The second act of blatant rebellion was to question the common (at the time) wisdom of separating hop
additions from active yeast action. It was found that active yeast would bio-transform elements in hops
creating new flavors and aromas that had not been seen previously in IPAs. This also created an
unavoidable haze, that once embraced became a hallmark of the East Coast Style IPA. Once the haze
became an accepted and even targeted element in these beers, grains that would have previously been
avoided because of their haze inducing properties started gaining popularity.
Grain
The grain bill for an East Coast style IPA is also usually fairly simple, but significantly different from a
West Coast IPA. Base malt can be either 2-row pale, or lighter colored Pilsner malt. If using pilsner malt
however, I’d recommend a 90 minute boil to reduce potential DMS off flavor. It is not unusual to blend
10% or 20% of a darker base malt such as Maris Otter, Vienna, or even Munich to add a little complexity
to the base. Flaked Oats and Flaked Wheat are often used in smaller amounts. They will lend a softness
to the mouthfeel, and also add haze forming proteins that the hop compounds can bind to. Malted
Wheat is commonly used as well. All of these combine to make a beer that is usually light in color, with a
thick soft mouthfeel. Sometimes described as pillowy, this creates a nice soft hazy bed for those hop oils
to rest in. As with West Coast IPA, I like to use a small amount of Acidulated malt as well. Other grains
that occasionally make an appearance in this style of beer are: honey malt, malted oats, spelt malt, and
cara-pils. It is uncommon to see any sort of crystal or caramel malt in a NEIPA recipe. Because of the
amount of husk-less grain in this sort of recipe, adding some rice hulls is a good idea to help prevent a
stuck mash.
Hops
As with all styles of IPA, hops are the dominant factor in East Coast IPA. Bittering is typically very low in
comparison to other styles of IPA, usually ranging from about 10-40 IBUs. A 60-minute hop addition is
unusual. If a recipe has one, it is usually very small. Most of these IBUs are usually achieved from late
boil or even post boil additions. Any time the hops are in contact with wort above about 180 degrees,
alpha acids will isomerize forming iso-alpha acids which create bittering. This is why hops added even
after flame-out will still create IBUs, just in lower quantities. The benefit of these late additions is that
very little of the hop oils that give us all of the wonderful aromas are volatized away in the steam from
boiling. Often times hops are added in a whirlpool or hop stand after the wort has been cooled to below
170 degrees. This allows the hop oils and other compounds to go into solution while creating almost no
additional bittering. This is one area where homebrewers have it a lot easier than large scale brewers.
We can simply put an immersion chiller in our kettle, chill it to where we want and then finish the hop
additions. This is very difficult to do if you have a 200-300 gallon batch! The thing that really sets New
England style IPA apart is adding a dry hop addition at high krausen, when the yeast is actively
fermenting. Compounds in the hop oils are transformed by the active yeast creating the sweet fruit
characteristics NEIPA is known for. These new compounds then bind themselves to proteins and other
compounds in the wort, which causes the haze that we usually see in these beers. I have had the best
luck with Citra hops for this high krausen addition, but there are others that will work. This is usually
followed up with 1 or 2 more dry hop additions shortly before packaging in the same manner as West
Coast IPA. The variety of hop options for this style of IPA is growing all the time. Most of the recently
developed, and currently in development varieties are targeting the flavors brewers are looking to
achieve in hazy NEIPAs. Citra is most common and appears in almost all recipes I have seen. Other
commonly used hops include Amarillo®, Azacca, Centennial, El Dorado, Galaxy, Ekuanot, and Mosaic. We
are targeting hops with more fruity and citrus qualities. Varieties with more piney, grassy and earthy
flavors are usually avoided in this style of beer.
Yeast
Yeast choice for this style of beer is critical. It has to be a yeast that has the ability to create the bio-transformation with the hops during fermentation. There are several strains of British origin that are
most commonly used. Initially the Conan strain from The Alchemist in Vermont (makers of Heady
Topper) was the strain most used by Homebrewers. Imperial yeast carries this as A04 Barbarian. More
recently the Boddington’s strain has gained popularity. This would be the Imperial A38 Juice, White Labs
WLP066, or Wyeast WY1318. Other options, if you are looking for something a little different would be
Imperial A24 Dry Hop (a blend of A04 Barbarian and A20 Citrus) or White Labs WLP067 Coastal Haze
Blend. As with all beers, having a proper sized, healthy pitch of yeast is extremely important. Oxygen
and Nutrients will help ensure that you have a good healthy fermentation. All of these yeast strains are
fairly active. Be sure you have plenty of headspace and/or a blow off tube to account for this. Also,
anticipate additional activity for a short time after adding the high krausen dry hop. Kveik yeasts are the
newest thing people have been using in hazy IPAs with good results. These varieties also have the
benefit of being able to ferment at fairly warm temperatures with out any negative off flavors.
Water
Water for NEIPA is similar in some ways as to West Coast IPA, with the exception being that the balance
of Calcium Chloride to Gypsum is usually skewed more towards the Calcium Chloride. This tends to
complement the softer mouthfeel found in many East Coast IPAs. Many people use a ratio of 2:1 or even
3:1 (Calcium Chloride:Gypsum), but I prefer a ratio of 1:1. I feel like a beer can get flabby and indistinct if
the balance is too much on the Calcium Chloride side. The gypsum helps to maintain the brightness of
the hops. Notice however that this ratio is still balanced more to the side of Calcium Chloride than I
would use with a West Coast style IPA. As with most brewing water, if it smells good and tastes good it is
probably suitable for brewing. The most important thing you can do, even if you do nothing else is to
take steps to remove the chlorine and/or chloramine from your water. A campden tablet, charcoal filter,
or just a long sit uncovered overnight can usually accomplish this.
Process – Boil and Fermentation
For an East Coast IPA, I like to mash in the area of 152-154 degrees. Sometimes even 156. This
encourages a higher finishing gravity. The end result is a slightly sweeter beer, which both increases the
mouthfeel, and also pushes the balance away from hop bitterness. If using pilsner malt, I’d recommend
a 90-minute boil. Personally, I do this with every brew. It helps reduce the possibility of DMS in the final
beer, and gives me consistency from batch to batch no matter what I am brewing. Most of the rest of
my brew-day process is the same as I would do for a West Coast IPA. Whirlfloc, yeast nutrient, and
oxygenating wort prior to pitching yeast are all important steps in the process. I like to ferment NEIPA in
the range of 66-68 degrees. Some people will ferment a few degrees warmer than that to encourage
more yeast esters. As primary fermentation slows down I usually allow the temperature to rise a few
degrees to encourage the yeast to fully clean up after itself. Because of the very low IBU levels, and high
protein levels, this style of beer is more prone to damage from oxygen contact during the later stages of
the process. If this happens, the nice bright hazy appearance of your beer can start to turn to a less
attractive tan or brown, and eventually the flavor can deteriorate as well. Any steps that you can take to
reduce the amount of oxygen contacting the beer during dry hopping, and packaging are more
important than with other beer styles. This is not to say that I think you must run out and purchase a
purgeable dry hop vessel right now! Just take care, and think about how what you are doing affects the
oxygen contact of the beer. When dry hopping I usually just pull the stopper on the fermentation vessel,
use a funnel if it is a small opening, add the hops, and get it closed back up as quickly as I can. If cold
crashing your beer, it’s wise to try to set up a system that will allow CO2 to pull back into the vessel
rather than oxygen as the pressure changes. At the end of fermentation, if it is possible to do a closed
transfer into a purged keg, this is a good place to do it. If bottle conditioning, the yeast should scrub any
oxygen from the headspace of the bottle during the carbonating process. If bottling from kegs, this is
one style that you will definitely want to be able to purge your bottles with CO2 prior to filling. The
important thing here is to do what you can, and don’t stress about what you can’t.
Relax, Don’t Worry, Have a HomeBrew is always the best mantra for all things HomeBrew (thanks
Charlie Papazian!). Enjoy the process, and enjoy the results. Share with your friends. Try to get a little
better and learn a little more with each batch. You are making the world a better place, one homebrew
at a time! `,
      },
      {
        title: "Are We Having Fun Yet?",
        date:'3/16/2022',
        body: ` I LOVE brewing beer. I love the social aspects of brewing beer as well. Sharing my beers, trying other people’s beers, talking about brewing adventures, exploring new recipes, and improving old ones. All of these are part of the fun. But what I really love is brewing. In fact, I may love brewing beer more than I actually like drinking beer….and I LOVE drinking beer, so this is really saying something! It is important as we grow as brewers not to lose this important aspect of why we do this. It is fun! If it wasn’t, there are lots of options at the local grocery store or at the neighborhood brewery who is working so hard at their craft. I think some people lose the enjoyment somewhere along the way and that is why people drift in and out of the homebrewing community.

        The science of brewing is something that is growing all of the time. The last 10 or 15 years has seen an explosion in the options, and details available to the homebrewer. For many people this has added to the enjoyment, and in many cases to the quality of the beer we can brew at home. There are now calculators to help with water adjustments, all in one brewing systems that will perform complicated step mash regimes, and Bluetooth hydrometers that will send information directly to your phone so you can monitor your fermentation on an hourly basis. Are all of these details necessary for this to be fun? For some people the answer is a resounding YES! Are all of these details necessary to enjoy brewing, and make beer that you enjoy drinking? My answer is no. The important thing is to look at the options available, and decide what is right for you.
        
        Working in a homebrew shop you see brewers of all levels and abilities. Some brew with malt extract, specialty grains, and ferment in glass carboys and have no interest in doing anything more complex. And that is just fine! For others, the fun in this hobby comes from exploring every new gadget, and examining the smallest details of everything that goes into their recipes. And that is just fine too! The place where this can begin to go sideways is when people get the idea that they have to make it complex in order to make good beer. I spoke with somebody recently who had been researching homebrewing.  He hadn’t started yet because he was so intimidated by what he had read about water treatment, pH adjustments, temperature control, and oxygen free dry-hop and transfer methods. My advice was “Dude, you need to throw all of that out the window and just make beer. You don’t NEED any of it!” He has the rest of his life to make it difficult. This is not to say that those things are not important in their own right, just not “necessary”. If malted barley is soaked in hot water for a little while and then exposed to some sort of yeast it IS going to turn into beer. It wants really badly to become the beer that we so heartily enjoy!
        
        It is hard to imagine having more fun brewing than I did in those early days of brewing with malt extract, and fermenting in a glass carboy in the corner with a T-shirt wrapped around it. I have also spent a fair amount of time with a pH meter in my hand and monitoring close additions of gypsum, calcium chloride and lactic acid. My current set up falls somewhere between these two. While my brewing system is complex in some people’s book, it pales in comparison to the science labs that some people have. I have found the place where this stays fun for me. And I make pretty good beer with it! The important part of what I am trying to say here, is to find the point where you truly enjoy the process. And whatever that point is, you are winning! …and that is awesome!`,
      },
      {
        title: "Feb Blog",
        date:'2/3/2022',
        body: `Balance. It’s something we are often striving for in life, but more importantly (?) it’s also something we are striving for in our beer! Balance is a somewhat subjective term. It can mean different things to different people. My preferred balance might be different from yours. And that’s ok. However, being able to assign a number to the balance of a recipe can be a huge tool in helping you make the beer that you are hoping to taste! Balance can apply to the ratio of base malt to specialty grains which is important, however the number I am most concerned with here is the Bittering Units to Gravity Units ratio in a recipe.

        We’ll call this the BU/GU ratio, and it varies from one style to another. It is important to understand that the bitterness that your hops impart is balancing the sweet maltiness that we have gained from the grains. We also gain aroma and flavor contributions from late boil additions of hops, but for now let’s focus on the bittering element that we are targeting. Bittering Units (BU) are the number of IBUs (International Bittering Units) derived from the hops in your recipe. Pretty simple. While there are ways to figure this out with pencil and paper (see “How to Brew” by John Palmer) I’d recommend using a brewing calculator like Beersmith, Brewers Friend, or one of the many others out there. This makes it easier to make quick adjustments to your hop schedule as you dial in the number you are shooting for. Gravity Units (GU) come from the predicted Original Gravity of your recipe. If your recipe has a predicted OG of 1.060, that translates to 60 gravity units. A predicted original gravity of 1.045 would be 45 gravity units, and so on. If we have a recipe that calls for 30 IBUs, and a predicted OG of 1.060, our BU/GU ratio would be 30/60, or 0.5. Using this formula, if we have a recipe that will have an OG 1.048 for example, and we want to have this same ratio of 0.5, our targeted number of IBUs would be 24. This would give us a BU/GU ration of 24/48, or 0.5. If we had kept our initial amount of hops (30 IBU), but had reduced our OG to 1.048, we would have a BU/GU ratio of 30/48 or 0.63. This would produce a beer that would be perceived as more bitter, even though the IBUs haven’t changed at all.
        
        This BU/GU ratio varies from one style to another and is a huge part of brewing a beer accurate to any specific style. This is not to say that this ratio is a hard fast rule. There’s nothing wrong with pushing the boundaries on any style, the goal here is just to be in control of what you are creating. The BJCP style guidelines are a great reference when looking for a starting point for our BU/GU ratio. The “Vital Statistics” for each style has a recommended IBU range, and OG range. By combing these we can get an idea of an average starting point. Here are some examples that show some of the variations:
        
        Cat.     Name                                         BU/GU             Cat.     Name                                      BU/GU
        
        1A        American Light Lager           0.29                 1C        Cream Ale                               0.27    
        
        3A        Czech Pale Lager                    0.75                 4A        Munich Helles                      0.40
        
        5B        Kolsch                                         0.50                 6A        Marzen                                   0.36
        
        9A        Doppelbock                              0.22                 11B      Best Bitter                               0.73
        
        13C      English Porter                         0.56                 15A      Irish Red                                  0.55
        
        15C      Irish Extra Stout                    0.74                 16D      Foreign Extra Stout             0.91
        
        17C      Wee Heavy                                0.25                 18A      American Blonde Ale           0.45
        
        18B      American Pale Ale                 0.75                 20A      American Porter                   0.60
        
        20B      American Stout                     0.85                 21A      American IPA                          0.60
        
        21C      Hazy IPA                                   0.55                 22A      American Double IPA           1.16
        
        22C      American Barleywine         0.71                  26B      Belgian Dubbel                        0.29
        
        26C      Belgian Tripel                       0.36                  26D      Belgian Dark Strong             0.28
        
        In some cases the ratio varies by as much as a few points on either side, but at least this gives you an idea of a good starting point. Once you have a good understanding of your preferences with regards to the BU/GU ratio of a certain style, you can start to adjust your beers to suit your own pallet.
        
        The biggest variable in hops that affects IBUs is the Alpha Acid percentage. However, boil time has a large contribution that needs to be accounted for when designing a recipe. Boiling for 60 minutes fully isomerizes (or at least mostly) the Alpha Acids that will create the bulk of your Bittering Units. However, any additions you make to wort above about 180°F will still add IBUs and should be accounted for. It might seem logical to increase the amount of hops if you are looking to increase IBUs, or reduce the quantity to lower them, but small adjustments in boil time can also have an effect. If I need a few more IBUs from a recipe I’ll often move a 10 minute addition back to 15 minutes, or if I need to shave off a few IBUs I might move that 10 minute addition to 5 minutes, flameout, or even whirlpool. The important consideration with these late additions is how much hop aroma and flavor you want to retain. The hop oils that create aroma and flavor boil away pretty quickly, so the longer you boil, the less you will be left with. The last step in designing any recipe should be balancing all of these elements.
        
        Understanding the BU/GU ratio gives your brewing toolbox one more element that will help you brew awesome beers! The Dalai Lama once said “If humanity is to survive, happiness and inner balance are crucial” and I’m pretty sure he was talking about beer. Once you have balance mastered, your path to happiness is assured! …and of course, the survival of humanity along with it.
        
        ~Cheers!`, 
      },
      {
        title: "Always Keep Learning!",
        date:'4/26/2021',
        body: `This is one that falls into the “old dogs can still learn new tricks” department. Except, what want I want to talk about today isn’t actually a new trick. It’s a really old trick, just new to this old dog!

        I have never been a homebrewer who brewed for competition. And as such, appearance and cosmetics have never made much difference to me. How does the beer taste? That is really all that I have cared about. Maybe the color in reference to whatever style I was brewing, but clarity has been pretty low on my list of concerns. I have been happy. My friends who get free beer have been happy.  If I was brewing for commercial purposes, or competitions, it might be different. But I am not! Until recently Irish moss and whirlfloc have been as much effort I have wanted to put into the clarity of my beer. But that extra step of using gelatin? Too much work!
        
        Surprise, surprise! …turns out I LOVE clear beer!
        
        Don’t get me wrong, I also love a good hazy IPA. In fact, some of this has come from brewing hazy IPAs. I love the unique flavors that you can only find in a hazy IPA. When I see that wonderful cloudy haze in the glass, I know what is coming! But when I went back to brewing an old school west coast IPA I wanted it to look like something different. Any haziness was no longer appropriate. Vienna Lager? American Blonde Ale? Some beers are just supposed to be clear! Around this time I also had a discussion with a customer in the store about using gelatin. I have known it to be a tool that homebrewers and pro brewers alike have used for a long time to improve the appearance of their beers. Maybe it was time for me to see what all the fuss was about. Thus began my experiments with gelatin. I had no idea the pride I would soon take in looking through a crystal clear glass of homebrew! …in the joy I would take in just looking at my beer! The first beer I tried it in was a Red Ale. It was kind of an experimental beer and the beautiful clear, rich, red hues ended up being the best part. It was so pretty! So nice to just look at it in the glass! I now use gelatin in almost every beer that I want clear. I have been converted! The words “Would you look at that?” have now become part of the drinking experience! Could it be possible that it even tastes better too? Maybe!
        
        So, what is the point of this rambling? Never take things for granted. Always keep learning. Something you have ruled out for years might just be a new discovery that re-fuels your passion! …and Have a Great Brew!`, 
      },
      {
        title: "November Blog",
        date:'11/18/2020',
        body: `If you’ve been in my store anytime since April, you are probably aware of how seriously I take precautions regarding spreading the COVID-19 virus. I’m pretty lucky in that I am able to operate with a system that allows me to maintain most store functions, while ensuring almost complete safety for my customers, employees, and myself.

        Many of my friends who own breweries and taprooms are not as lucky.  As we enter another period where they have to restrict their services, they’ll need our support more than ever. Some of them have full tanks that were being brewed for anticipated capacities that no longer exist. It’s all of our jobs to make sure that doesn’t go to waste! Also remember that crowlers, grunts, and growlers don’t allow nearly the margins that pints over the counter do. Adding a couple of extra bucks to the tip jar will help too!
        
        This virus doesn’t spread itself. We spread it! It should be all of our jobs to be certain that we don’t. The best thing we can do to help our fellow businesses get back to normal is to take every precaution in every part of our lives to not catch it in the first place, and not spread it if we do.
        
        Like everybody I am looking forward to a time when all of this is behind us, we’ll get there eventually….one growler and dinner to go at a time.
        
        `, 
      },
      {
        title: "Sanitation in Brewing",
        date:'10/20/2020',
        body: `
        Today I’d like to talk a little bit about the most glamorous part of brewing! Which is of course cleaning and sanitizing. I’ll bet that if you ask your non-brewing friends to describe what it’s like to brew beer, some might bring up the science aspects of the art while others might think it’s a 6 or 7 hour beerfest party on a brew day. Some may see the parallels with cooking or barbecue. Most likely none will see you for the glorified dishwasher that you actually are! If you are a first-rate dishwasher, and a nurturing yeast babysitter, you are probably a good brewer.

I recently read a statement in “Principles of Brewing Science” by George Fix that sums up the brewing process in one sentence as well as any I have ever seen:  “Since Pasteur’s time, it has become clear that the most important part of a brewers art is the proper control of adverse microorganisms like bacteria and wild yeasts, and the proper care of the good ones like brewing yeasts.” That’s all of it in a nutshell!

We can control these “adverse microorganisms” by proper cleaning and sanitizing. It is important to think of cleaning and sanitizing as 2 separate steps. Cleaning is done immediately after you finish using a piece of equipment. Sanitizing is done immediately before you use a piece of equipment. Most preferred brewing cleaners (such as PBW, One Step, Straight A, and B Brite) are percarbonate based and clean with an oxygenating action. This reduces the amount of elbow grease needed, and can also clean into hard to reach areas. A good warm half hour soak will normally clean things right up, or at the very least make surfaces easy to wipe clean with a soft sponge. We’ve got to make sure there is no residue or organic film that will give bacteria a place to hide. Once those hiding places are eliminated, sanitizer can get to all the needed surfaces and reduce the bacteria to acceptable levels. That’s actually what we are doing when we sanitize. Sterilizing would be complete elimination of any bacteria. We can’t do that, and don’t need to. 2 minutes of contact time with a no-rinse iodine, or acid-based sanitizer will knock any bacteria down to levels below anything we need to be concerned with. Then we can get on to the fun stuff! Babysitting yeast!

Happy, healthy yeast that is treated right is the single difference between most great beers and those that are…um…not so great. So, what does “treated right” actually mean? Yeast cell count, and viability are the first things to be concerned with. The Mr. Malty yeast calculator (my favorite) tells us that a 5 gallon batch of ale with an OG of 1.065 would be best off with 225 billion yeast cells. It’s always important to look at how many cells are in that pack of yeast you are buying. The age of the yeast is also important. Yeast cells lose their viability over time, and older yeast will have less viable cells than a fresh pack. Making a yeast starter can help with both problems and is a great way to ensure you are pitching plenty of healthy viable yeast cells. My preference is to pitch plenty of healthy cells straight from a fresh pack or two, but if I am ever concerned with cell count or viability, I will always do a starter. The second part of “treated right” has to do with how happy the yeast is in the fermenter. Yeast need oxygen and nutrients in order to achieve their potential. As proper guardians of the yeast it is our job to be sure they have enough of both! Fermentation temperature is the next area of focus. During the fermentation process yeast produce many by-products other than alcohol and CO2. Esters are one of these that will survive into the finished beer and are very much temperature dependent. Most esters are created during the first few days of fermentation. If we let our wort get too warm during this period, these esters will usually be less pleasing than those created at slightly lower temps. Other by-products are actually consumed by the yeast once active fermentation slows down. Give that beer plenty of time with the yeast for it to complete this job! I actually like to increase my wort temperature by a couple of degrees as fermentation slows (we are no longer worried about ester formation at this point) to encourage the yeast to stay active. Like most things in life, if you treat your yeast well, it will treat you well in return.

40 years ago, while washing dishes in the back room of the pizza parlor, or the seafood restaurant I worked at, I would dream about being in a better place. Being a dishwasher was the worst! Little did I know that I would find my better place later in life, in my own basement, still washing dishes, dreaming about the next beer in the kettle. Being a Homebrewer is the best! `, 
      },
      {
        title: "October",
        date:'10/03/2020',
        body: `I must be getting old.

        There was a time when I would be thrilled to find that special 13% or 14% ABV Barleywine or Imperial stout! 10.5% Triple IPA? Absolutely! Dogfish Head 120 minute? I’ll take a 4 pack! My, how things have changed. I still really enjoy these styles of beer, it’s just that my appropriate serving size is probably a 4oz glass.
        
        These days when I go into a taproom I find myself doing something I almost never used to do…look at the ABV first, and see at which beers fit into my “abv comfort zone”. Some of this comes from concern about driving home afterwards, but some comes from the fact that it just seems to affect me differently than it did when I was younger. This is quite the conundrum, because I find that I really like that sweetness the alcohol brings to a nice 7.5% or 8% beer. I’d just like to be able to have more than one, and not wake up with a headache in the morning! Luckily there are enough quality lower ABV beers out there to take care of me quite nicely.
        
        As a homebrewer this presents some challenges as well. For a long time, I have enjoyed brewing beers up in the 7%-8% range. When you put in enough grain to get the ABV up there, it’s easy for the beer to be full bodied and full of flavor. Try getting that same body and flavor in a 4% or 5% beer! It’s hard to do! The great thing about Homebrewing is that we are really only brewing for ourselves. If I want my beer to be a certain way, the challenge is on me to brew it.  I love a good session beer, but I don’t want it to taste like a watered down version of a good beer. I want it to BE a good beer! One of the best beers I have ever had was Four Generals ESB, which came in at around 3.8% ABV. I would drink that beer every day if I could!
        
        Most recently I have been working on a recipe for a session Hazy IPA. There is some challenge to this, because this style really needs decent body and a good soft mouthfeel. It doesn’t want to feel light or watery. This is hard to do with a small malt bill. I was a little bit inspired by the recipe for Founders All Day IPA and the work they put into figuring out a grain bill that was low in ABV (4.7%) but still flavorful. I have been going heavy on the specialty malts and mashing high to increase the body and encourage a slightly higher finishing gravity. The most recent version came in at 3.3% with an OG of 1.038, and is just about right where I want it. I used approximately 36% Pilsner, 13% Munich, 15% CaraFoam, with the remaining 36% split between Flaked oats, Flaked Wheat, Golden Naked Oats, a little bit of Rye Malt, and a little bit of Acid Malt. Mashed at 158 degrees. I fermented with Imperial POG (Kveik) yeast at 93 degrees (!!!), and hopped in a similar fashion to my other bigger hazy’s. So far, it’s tasting awesome! If I decide no more tweaks are necessary, you’ll see a recipe soon for what I’m calling Cirrus IPA.
        
        Not quite sure where I was going with all of this. It’s just what has been on my mind lately. We are pretty lucky as Homebrewers to be able to target and brew what ever kind of beer we want to drink! Commercial brewers don’t get to have that kind of freedom. They always have to be concerned to some extent with how a beer is going to sell. But if you want to brew an imperial cinnamon chocolate pumpkin porter, and age it in a whiskey barrel…you can do it! We have the freedom to brew what ever strikes our imagination. The worst that could happen is 5 gallons have to go down the drain (which admittedly does suck). The best that could happen though, could be the greatest thing ever! `, 
      },
      {
        title: "Experience In Brewing",
        date:'9/04/2020',
        body: `I often get asked how I learned the things that I know about brewing. Did I go to a school? Have I been through the Beer Judge Certification Program? No, neither. Though I believe that both are great resources for serious brewers. My standard answer is “Well…I have just screwed up a lot of batches over the years!” Now, that’s not completely true (although, it kind of is), it’s really a combination of things. Brewing a lot over the years is a big part of it. I learn from every batch, good or bad, and I take good notes on what I do. But I have also studied informally a ton. I love this stuff! I can’t get enough. I am always taking advantage of resources that fit my available time and available budget. Primary among these are books and podcasts. So, I thought I’d talk a little bit about some of my favorites that have inspired me along the way.

        Relax. Don’t Worry. Have a Homebrew.  Charlie Papazian coined that phrase in the “Complete Joy of Homebrewing” almost 40 years ago. It was the first book in my homebrewing library, and is now on it’s 4th Edition. Lot’s of great information and inspiring stories. Though some of the information is starting to become a little bit dated, it’s still a great read! The modern equivalent is “How to Brew” by John Palmer. Though not quite as entertaining as Charlie’s book, this is basically a textbook of all things brewing related and I refer to it all the time. “Brewing Classic Styles” by Jamil Zainasheff and John Palmer is another important book. While it is primarily a recipe book, there is great information about the processes that Jamil uses, and background on all of the recipes and styles. Any time I am brewing a style that is new to me, this is my first stop. For the serious brewer “New Brewing Lager Beer” by Greg Noonan is a must read.  It covers much more than just lager beer, and gets really deep into what is going on in all parts of the brewing process. The Brewing Elements Series from Brewers Publications is another great resource. With individual books on Water, Malt, Hops, and Yeast each volume digs deep into the specifics of each of our main ingredients! Obviously, this is a list that could almost go on forever. There are great books on IPA, Belgian beer, Sour beers, and even other homebrewers! I have been both entertained and inspired by every one.
        
        Another place that I have found a lot of great information is podcasts. You’ve gotta have something playing in the background when you brew, right? I have learned a ton from the various brewing podcasts. These are a great free resource! The Brewing Network hosts many of my favorites. “Brew Strong” tops that list. Hosted by Jamil Zainasheff and John Palmer (these names keep coming up, don’t they?) they tackle everything that is important to homebrewers. Another great one that Jamil hosted along with Tasty McDole was called “Can You Brew It”. They are not doing new episodes any longer, but all of the old ones are archived. Anytime I am working on a clone recipe for a customer, I check the CYBI archives and see if they have worked through it. Denny Conn and Drew Beechum host the “Experimental Brewing” podcast. The name makes it sound like it should be full of obscure stuff, but they cover lots of normal, necessary knowledge type of stuff too! Sure, there’s a little bit of ukulele, but at least it’s not banjo! The “BeerSmith Homebrewing” podcast by Brad Smith is another that is on my regular listening list. He consistently has some of the top brewing minds in the business as his guests.
        
        For the serious brewer thinking about making a career of brewing, a brewing school might be the answer. For the serious homebrewer, going through the BJCP training will help you learn all of the specifics for various styles, along with common off flavors and flaws. These will all make you a better brewer. The most important thing is to keep brewing, keep learning, and keep having fun! I have been brewing for 23 years, done nearly 400 batches, and I am still learning with every batch. If this old dog can keep learning new tricks, so can you! `, 
      },
      {
        title: "Community Support",
        date:'8/28/2020',
        body: `Someone once said “it takes a village…”

        Well, when it comes to homebrewing it doesn’t necessarily take a village. But it can be a whole lot more fun when you are part of one!
        
        For a lot of my early years brewing I brewed in what I call a bubble. I didn’t have much contact with the outside brewing world. I brewed beers that I thought were good. My friends thought they were good. I had developed ways of doing things that worked for me, but I had no idea if they were “right” or not. I liked the social aspect of sharing my beers, and seeing the enjoyment on someone’s face when I gave them a bottle. I enjoyed talking with co-workers or customers who brewed, but I really had no interest in joining any sort of a larger group. What if I found out I was doing it all wrong? What if my beers actually sucked? That all changed when I started working at Larry’s Brewing Supply and became a member of the Impaling Alers Homebrew Club. It took a meeting or two to get over the intimidation of being around all of these serious homebrewers. But you know what? They were great people! They were encouraging, accepting, and inspiring. I have now had the opportunity to be involved with several other clubs and they all share these same aspects.  COVID has made it difficult for most clubs to operate like they had, but they are adapting and trying to stay in touch with their members. This will all be behind us eventually. There is a list of all of the local homebrew clubs on the Washington Homebrewers Association website if you are interested. It’s possible that joining an actual club might not be the right thing for you, but if you ever have the opportunity to share your hobby with someone, take advantage of it! You’ll be glad you did.
        
        Another aspect of our brewing community that I love are the Brick and Mortar stores around us. My competition! I love how even though we are all technically “competitors” there is so much support for each other among us. We all share a common passion for homebrewing, and supporting our local community of brewers. We all want you to love this like we do, not to just sell you stuff. It’s easy to click a button on a website, but the only way to be part of that passion is to stop in and see one of us! I know I’m preaching to the choir here. You get it. You wouldn’t be reading this if you didn’t. I’d love to see you in my store sometime, but if you can’t make it here please visit one of the other stores on this list. We are all in this together!
        
        Olympia – Rocky Top Homebrew                           Lakewood – The Beer Essentials
        
        Tacoma – Fermentation Initiative                       Georgetown – Sound Homebrew Supply   
        
        Seattle – Cellar Homebrew                              Bremerton – Olympic Brewing Supplies
        
        Port Angeles – Angeles Homebrew                        Snoqualmie – Mt Si Homebrew
        
        Redmond – Brewhouse Provisions                         Kenmore – Micro Homebrew
        
        Burlington – Northwest Homebrew Supply                 Bellingham – North Corner Brewing Supply
        
        Cheers everybody! Thanks for being part of this village!
        
        jon `, 
      },
      {
        title: "Recipes",
        date:'8/21/2020',
        body: `
        So, you want to start designing your own recipes? What are the important things to know, and where should you start? Prepare to be blinded by Science!   ….or not.

        The first piece of advice I would give is to just brew. A lot! Start out brewing recipes from trusted sources (ie: not something you just found randomly on the internet). Brew many different styles and see if you can identify what the different elements are bringing to the flavor. The majority of the grain bill for any beer is base malt. Small amounts of specialty malts can have a large impact on the flavor and color. Keep the recipe close at hand when you are tasting and try to identify the specialty grain varieties and their impact. Hops can affect the bitterness, aroma, or both in a beer depending on how they are used. Hop bitterness is used to balance the malty sweetness from the grain. This balance will vary from one style to another. Boiling hops longer (up to 60 minutes) increases the percentage of Alpha Acids that are isomerized creating higher levels of bittering. However, this boils away much of the aromatic oils that we may want for aroma and flavor. Any hop aromas you can identify usually come from hops added late in the boil or even during fermentation. Again, look at the recipe while you are tasting and see if you can identify the elements that come from the hops. In any beer Yeast really does all of the heavy lifting. Learning the flavor differences between strains is a huge part of designing a beer that will turn out the way you picture it in your mind. An easy step to take in the beginning is to change just one element of a beer you have brewed and really look at the difference. Always take notes and refer to them when you are tasting so you can learn the things that will affect the final product when you start designing your own recipes.
        
        The second piece of advice I would give is to actually study and break down respected recipes, even if you are not brewing them. Get some sort of brewing software, and start entering recipes into it. Brewer’s Friend and Brew Toad are free ones that a lot of people use, I really like BeerSmith which has a small cost. Look at how quality recipes are put together. What is the percentage of base grain to specialty grain? I usually target 90% base malt as a starting point when designing, and then go up or down from there depending on the beer style. What is the level of hop bittering in relation to the gravity of the beer? This Bittering Units/Gravity Units ratio makes a huge difference in the final product.
        
        When I first looked at the recipe for Pliny the Elder it was a real eye-opening experience. Here was a beer full of flavor, with only 3 grains and some sugar! It uses 87.2% base malt, 3.9% C-45L, 3.9% CaraPils, and 4.9% Corn Sugar. For me this was a lesson in simplicity. Many of the best beers in the world have the simplest recipes.  Identify the flavors that you want to target and choose only the grains that will create that beer.
        
        Any time I am brewing a beer that I am not real familiar with I pull out my copy of Brewing Classic Styles by Jamil Zainasheff. One of the best ways to learn how to design recipes is to plug his into your software. Look at the grain choices and percentages of each that he uses. Learn how he uses his mash temperatures to pull different elements from these grains. Look at the BU/GU ratio, and see how that changes from style to style. Read about the reasons for his yeast choices, and how he uses fermentation temperature to control what he is getting from them.
        
        When I design a recipe, the first thing I look at is how much base grain it will take to get my desired ABV. Next will be the more subtle things like variety of base grain for style, and specialty grains to get my desired color and flavor. Next, I’ll decide my hop combination and targeted IBU in relation my predicted original gravity. As I lay out my hop schedule, I’m thinking about how much aroma and flavor I want to retain vs. how much bittering I’m gaining by additional boil time. My yeast choice is usually significantly narrowed down by the style of beer I am brewing, but this choice is usually the final piece of the puzzle. Once this is all in the software, I’ll look at it as a whole and make some final tweaks. I’ll look at how my mash temp will affect my final gravity. If I adjust that, it may require an adjustment of my base grain to maintain my desired ABV. These changes may also affect my BU/GU ratio so a slight adjustment to my hop boil times might be needed.
        
        Once you are armed with all of this new knowledge its time to brew! A lot! Thinking and planning is great but there is no substitute for doing.
        
        Cheers!
        
        Jon `, 
      },
      {
        title: "Shabbys",
        date:'8/14/2020',
        body: `
        Why Shabby?

A frequent question I am asked is “why do so many of your recipes have Shabby in the name?” As you might guess, there is a story behind the answer…

I am a homebrewer. Like many homebrewers, when we are deep in a brew day the fantasy of doing this for real, as a commercial brewery can’t help but cross our mind. We love having friends over and proudly serving them a beer that we crafted. We love hearing their thoughts, and answering the question that always comes up… “you made this?” This always leads to the thought on my end of “wouldn’t it be the greatest thing in the world to make a living doing this thing that I love so much? I could just brew beer, and sell it to my friends, and then brew beer again, and live happily ever after!” Any commercial brewer will tell you that this fantasy is pretty far from real life. But that doesn’t have to stop us from having the dream, right? Why spoil a perfectly good fantasy with things like facts and reality? And if we are going to dream about having a pretend brewery, the first thing we need is a name.

I am also a musician. For much of my life I have had a small recording studio in my home for my personal projects and those of my friends. Turns out that private home recording studio owners and home brewers have something in common! We both dream about doing it like the big boys. And if we are going to dream, the first thing we need is a name. My home studio is called Shabby Road Studios. It’s kind of an obvious joke pulled from the famous Abbey Road Studios where the Beatles recorded all of their music, as well as a humorous poke at the quality of the streets in some of the places I have lived! It’s all in good fun, and has served me well over the years.

Eventually my brewing ego got to the point where I decided I needed a name for my pretend home brewery too. I started coming up with all kinds of ideas but nothing seemed to stick. One day while running names past my wife and kids for approval, somebody said “why don’t you just call it Shabby Road Brewing?” The answer had been right there in front of me the whole time! Shabby Road Brewing was born. After that, as I designed recipes to brew at home it just seemed like a natural and unique name to incorporate into my recipes. If it has Shabby in the name you know it is mine! …and hopefully you’ll know that it’s actually not too shabby! From time to time I have pondered taking the next step towards being a commercial brewer, but I am pretty happy with where things stand right now at Shabby Road Brewing. Would I really want to change that? Isn’t it the greatest thing in the world to get to do this thing that I love so much? I can just brew beer, and share it with my friends, and then brew beer again, and live happily ever after.
         `, 
      },

    ];
    
    return (
      <div className="posts-container">
        {blogPosts.map((post, index) => (
          <Post key={index} index={index} post={post} />
        ))}
      </div>
    );
  };
    
  export default Posts;
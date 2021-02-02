import React from 'react';
import './Destinations.css';
import CardItem from './CardItem';

function Destinations() {
  return (
    <div className='cards'>
      <h1>TOP DESTINACIJE</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/senja.png'
              text='Senja je drugo po veličini norveško ostrvo, smešteno daleko iznad Arktičkog kruga. Ovde vas dočekuje strahopoštovana mešavina mora, planina, plaža, ribarskih sela i unutrašnjosti, sve u roku od nekoliko sati vožnje. Okeanska obala ostrva strma je sa skulpturalnim stenama i živopisnim ribarskim selima u zaštićenim uvalama. Unutrašnjost je ispunjena planinama, jezerima i šumama, a obala okrenuta prema kopnu ima neočekivano zelena polja.Predeo u Senji i Centralnom Tromsu prepun je kontrasta, sa ponoćnim suncem i severnim svetlima, u zavisnosti od godišnjeg doba. Udaljenost od obale do „sirovih“ planinskih vrhova je kratka i idealna je kombinacija za one koji učestvuju u zimskim aktivnostima.'
              label='Norveška'
              path='/galerija'
            />
            
            <CardItem
              src='img/china1.jpg'
              text='Nacionalni park Zhangjiajie nalazi se u centralno-istočnom delu Kine u živopisnom području Vulingiuan, koje sadrži više zaštićenih područja. Nacionalni park zauzima površinu od 48,15 kvadratnih kilometara od 18,59 kvadratnih milja.

              Veće živopisno područje Vulingiuan prostire se na 397,5 kvadratnih kilometara. Kolektivno područje Vulingiuan nalazi se pod zaštitom UNESCO-a. Nacionalni park šuma Zhangjiajie je verovatno najželjeniji deo područja.
              
              Park se sastoji od gustih šuma, dubokih jaruga, dubokih kanjona, neobičnih vrhova, pećina i kamenih formacija nalik na stupove prekrivenih čitavim parkom. Ove stubne stenske formacije su ono po čemu je park poznat širom sveta.'
              label='China'
              path='/galerija'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/hrvatska.jpg'
              text='Srcoliko ostrvo Galešnjak, nalazi se u Pašmanskom kanalu, nedaleko od Zadra.Ovaj prirodni fenomen opisan je još u 19. veku kada ga je primetio Napoleonov kartograf, ali je svetsku slavu dobilo 2008. godine kada je "otkriveno" na Google Earth-u.Ostrvo je u vlasništvu lokalne porodice Jureško, koja na njemu gaji retke biljke, te je iz tog razloga srce dobilo "ožiljak".
              Od skoro je otvoreno za turiste koji dolaze iz različitih krajeva sveta kako bi tu proveli Dan zaljubljenih.'
              label='Hrvatska'
              path='/galerija'
            />
            
            <CardItem
              src='img/comfort1.jpg'
              text='Projekat se nalazi na levoj obali Kijeva, na 100 metara od prometne ulice - avenije Vozziednannia.

               Comfort Tovn je kombinacija koncepta „grad u gradu“ koji je već popularan među kupcima i inovativnih evropskih standarda stanovanja!
              
              Arhitektonski stil kompleksa podseća na mali flamanski grad. Unutrašnji prostor je namenjen širokim pešačkim zonama - budućim omiljenim mestima za šetnju i rekreaciju. Promenljivi podovi kompleksa pružiće priliku svima da se dive mekoj sunčevoj svetlosti sa svojih balkona i na klupama u zonama za parkiranje.'
              label='Ukrajina'
              path='/galerija'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/saturnia.jpg'
              text='Saturnia je manje grad, a više živa legenda. Pitajte lokalno stanovništvo i uveriće vas da je ovaj grad Maremman zapravo mitska Saturnia tellus - utočište Saturna nakon što je izgubio presto bogova.Izgradili su ga Etrurci, za njim su ljubomorno željeli Rimljani, koji su za sebe želeli tople izvore koji su okruživali grad. Na kraju su je uzeli silom i izgradili kupke napunjene vrelom sumpornom vodom, pretvarajući Saturniju u igralište za bogate i poznate carstvo

              Danas vrela koja su zapela za oko Rimljana takođe svake godine privlače hiljade turista u grad.
              
              Više od pukog kupatila na otvorenom, gde temperature dostižu tostnih 37,5 ° C tokom cele godine, izvori se takođe mogu pohvaliti lekovitim svojstvima za koja se govori da leče razne manje bolesti zahvaljujući prisustvu sumpora u vodi.'
              label='Italija'
              path='/galerija'
            />
            
            <CardItem
              src='img/kefalonija4.jpg'
              text='Mirtos plaža se nalazi na zapadnoj obali Kefalonije, samo 9km daleko od sela Agia Efimia, 25km od Fiskarda i oko 40km od Argostolija. Do Mirtos plaže se stiže niz serpentine, do podnožja brda. Okružena je impozantnim stenama što čini da dok ovde boravite osećate svu moć prirodnog, pomalo divljeg okruženja.Boja mora na ovoj plaži varira od tamno plave do mlečno plave i tirkizne. 
              Plaža je pretežno šljunkovita, a po sredini i na ulazu u more nalazi se sitan beli pesak. Dužina plaže je oko 700m, a širina oko 100m. Sa leve strane plaže nalazi se mala pećina u vodi koja pravi divan hlad u vrelim letnjim danima. Na ovoj plaži često duva vetar u popodnevnim časovima, i stvara velike talase. Plaža nije pogodna za malu decu jer je dubina nagla i velika, a struje jake. '
              label='Grčka'
              path='/galerija'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
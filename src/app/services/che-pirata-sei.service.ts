import { Injectable } from '@angular/core';
import { iDomanda } from '../interfaces/i-domanda';

@Injectable({
  providedIn: 'root',
})
export class ChePirataSeiService {
  domande: iDomanda[] = [
    {
      domanda:
        ' Yarr! Ti ritrovi tra le mani una vecchia mappa con segni strani e un X marcata al centro. Ma non sei certo di cosa rappresenti! Che faresti, pirata?',
      navigatore:
        'Mi metto a decifrare quei segni, ogni dettaglio può nascondere un indizio!',
      capitano:
        'Corro subito a mostrarla al mio capo, un affare così non posso gestirlo da solo!',
      mozzo:
        'Me la metto in tasca e faccio finta di nulla. Al massimo la userò più tardi per pulire un po di polvere.',
      spugna:
        'Non so leggere le mappe, ma magari potrebbe farmi da tovaglietta mentre sorseggio qualcosa di forte',
      cannoniere:
        'Non serve studiare: una buona dose di polvere da sparo e vediamo cosa si nasconde sotto quell’X!Non so leggere le mappe, ma magari potrebbe farmi da tovaglietta mentre sorseggio qualcosa di forte',
      corsaro:
        'Niente fretta, la nascondo finché non decido con chi dividerla… o se tenerla per me.',
      ruolishuffle: [],
    },
    {
      domanda:
        'Dì un po, mentre navighiamo verso il tramonto, scopri che un altra nave cisegue da vicino. Che pensiero ti passa per la testa, giovanotto?',
      capitano:
        'Devo decidere in fretta e assicurarmi che ognuno sappia cosa fare: nessuno entra in azione senza il mio ordine!',
      mozzo:
        'Vado subito a prendere secchi e spugne! Se scoppia un pasticcio, qualcuno dovrà pulire il disastro.',
      navigatore:
        'Meglio controllare la rotta e vedere da che parte possiamo sfuggire alla vista!',
      spugna:
        'Non riesco a vedere troppo bene da qui... E se ci mettessimo a fare un brindisi alla faccia loro?',
      corsaro:
        'Mi metto in posizione e studio bene come possiamo convincerli a lasciarci qualche doblone senza resistere.',
      cannoniere:
        'Oh, finalmente! Qualcuno su cui provare il mio nuovo giocattolo a polvere nera!',
      ruolishuffle: [],
    },
    {
      domanda:
        'Immagina di trovarti su un isola remota e deserta. Dopo giorni di fame e fatica, trovi un baule chiuso a chiave. Cosa fai con questo strano bottino?',
      cannoniere:
        'Perfetto! È ora di vedere quanto un po’ di esplosivo può tornare utile.',
      capitano:
        'Prima di tutto, devo valutare bene la situazione e decidere chi può aiutarmi ad aprirlo.',
      navigatore:
        "La chiave non mi serve, posso già capire cosa c'è dentro usando un po' di logica e osservazione.",
      spugna:
        'Tento di aprirlo col mio coltello, ma se non va, almeno posso usarlo come tavolino per il mio bottiglione!',
      mozzo:
        'Non ho tempo per aprirlo ora, lo trasporto alla nave e lo pulisco per benino: i bauli preziosi si trattano con rispetto.',
      corsaro:
        "Lo nascondo bene, non si sa mai che ci trovi un po' di monete d'oro… tutto a tempo debito.",
      ruolishuffle: [],
    },
    {
      domanda:
        'Mentre la nave oscilla sulle onde, senti un forte odore di fumo! Cosa faresti per primo in caso di emergenza?',
      spugna:
        'Bevo un sorso rapido per il coraggio e vado a vedere. Non si può certo lasciar tutto in fiamme!',
      mozzo:
        'Prendo subito acqua e secchi, ogni barile può servire per spegnere il fuoco!',
      navigatore:
        'Punto il naso verso il vento, così da determinare la direzione del fumo e la fonte del problema.',
      corsaro:
        'Mi sposto subito per mettere in salvo il bottino! Nessuno si avvicina ai miei dobloni!',
      cannoniere:
        "Che meraviglia! Dove c'è fumo, ci sarà un esplosione! Corro a controllare i miei cannoni!",
      capitano:
        'Mando subito i membri della ciurma nei posti chiave: nessuno corre se non sotto i miei ordini!',
      ruolishuffle: [],
    },
    {
      domanda:
        'Ogni pirata deve tener con sé un oggetto speciale che lo rappresenti. Qual è il tuo, e perché?',
      cannoniere:
        'Il mio adorato acciarino, pronto a dar fuoco alle polveri e ai miei piccoli cannoni!',
      mozzo:
        'Una spugna e un secchio: non mi separo mai dagli strumenti che tengono pulita la nave.',
      navigatore:
        'Un astrolabio o una bussola di precisione, perfetti per non perdere mai la strada in mare aperto.',
      corsaro:
        'Un piccolo sacco di monete d’oro, perché ogni buon pirata sa dove nascondere il suo bottino.',
      capitano:
        "Un vecchio cannocchiale, con cui posso tenere d'occhio la ciurma e tutto ciò che mi circonda.",
      spugna:
        'La mia fedele bottiglia di rum. È l’unica cosa di cui ho davvero bisogno nei momenti duri!',
      ruolishuffle: [],
    },
    {
      domanda:
        'In una notte di tempesta, l intera ciurma è in preda al panico! Dove ti trovi tu, nel bel mezzo di questo caos?',
      mozzo:
        'Pronto con secchi e stracci: nulla va fuori posto, non importa quanto forte sia il vento!',
      cannoniere:
        'Sopra il ponte, vicino ai cannoni! La mia forza è in azione!',
      corsaro:
        'Nascosto nella stiva, ad assicurarmi che nessuno tocchi il bottino in mia assenza!',
      navigatore:
        'Cerco di seguire le stelle per capire se stiamo ancora seguendo la rotta corretta.',
      capitano:
        'Do istruzioni precise a tutti, non lascio nessuno allo sbando in mia presenza!',
      spugna:
        'Sotto coperta! Meglio stare al sicuro con una bottiglia di rum, sperando che la tempesta passi!',
      ruolishuffle: [],
    },
    {
      domanda:
        "Ogni giorno in mare è un'avventura diversa. Come affronti le giornate di calma, quando non c’è terra né battaglia in vista?",
      navigatore:
        'Mi concentro sugli studi di nuove rotte e sulle mappe… il mare ha sempre qualcosa da insegnare!',
      spugna:
        'Una giornata tranquilla? Il momento ideale per gustarsi un buon sorso di rum sotto coperta.',
      cannoniere:
        'Controllo i miei cannoni e, se tutto è in ordine, magari faccio un po’ di pratica.',
      corsaro:
        'Calcolo il valore dei nostri tesori e studio modi per accumularne altri senza troppi rischi.',
      capitano:
        'Controllo che tutti siano impegnati: è il mio dovere mantenere la disciplina, anche nei momenti di quiete.',
      mozzo:
        'Faccio pulizie, lucido il ponte e organizzo tutto! È l’occasione perfetta per rimettere in sesto la nave.',
      ruolishuffle: [],
    },
  ];

  shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  generateshuffledResponses() {
    for (const domanda of this.domande) {
      const risposte = [
        domanda.capitano,
        domanda.cannoniere,
        domanda.spugna,
        domanda.corsaro,
        domanda.mozzo,
        domanda.navigatore,
      ];
      domanda.ruolishuffle = this.shuffleArray(risposte);
    }
  }
}

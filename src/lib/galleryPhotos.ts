// Curated gallery data for Diving Chia.
// 145 photos hand-classified into 7 categories, each with an Italian
// caption written to lead with a strong hook (no AI-generic fluff).

export type GalleryCategory =
  | "avventure-sub"
  | "vita-marina"
  | "volti-del-blu"
  | "primi-respiri"
  | "relitti-tesori"
  | "vita-di-bordo"
  | "sardegna-selvaggia";

export type Orientation = "portrait" | "landscape" | "square";

export interface GalleryPhoto {
  file: string;
  category: GalleryCategory;
  caption: string;
  orientation: Orientation;
}

export const CATEGORIES: {
  key: GalleryCategory;
  label: string;
  tagline: string;
}[] = [
  { key: "avventure-sub", label: "Avventure Sub", tagline: "Quando il blu diventa il tuo cielo." },
  { key: "vita-marina", label: "Vita Marina", tagline: "Il Mediterraneo che non immagini." },
  { key: "volti-del-blu", label: "Volti del Blu", tagline: "Sguardi che il mare non dimentica." },
  { key: "primi-respiri", label: "Primi Respiri", tagline: "Il momento in cui tutto cambia." },
  { key: "relitti-tesori", label: "Relitti & Tesori", tagline: "Storia che dorme sotto le onde." },
  { key: "vita-di-bordo", label: "Vita di Bordo", tagline: "Tutto inizia con un sorriso a riva." },
  { key: "sardegna-selvaggia", label: "Sardegna Selvaggia", tagline: "Dove il blu non finisce mai." },
];

export const PHOTOS: GalleryPhoto[] = [
  // ─── AVVENTURE SUB ────────────────────────────────────────────────
  { file: "37F0F753-1FDC-4C98-8EE5-E209E7E9397C.jpeg", category: "avventure-sub", caption: "Si scende insieme. Le bolle salgono in colonne d'oro mentre il gruppo si lascia inghiottire dal blu.", orientation: "square" },
  { file: "DSC03897.jpeg", category: "avventure-sub", caption: "Controluce sul fondale. La luce del mattino piove a strisce sulla prateria di posidonia.", orientation: "square" },
  { file: "fa20f05e-18f6-4540-9f1f-d16a4e04bb32.jpeg", category: "avventure-sub", caption: "Il volo. Pinne in alto, testa giù — il salto nel vuoto che vale tutta l'attesa in barca.", orientation: "landscape" },
  { file: "DSC00337.jpeg", category: "avventure-sub", caption: "La parete infinita. Una scogliera di Capo Spartivento che cade verticale, e una nuvola di castagnole intorno.", orientation: "portrait" },
  { file: "DSC00339.jpeg", category: "avventure-sub", caption: "Quattro sagome sospese sul nulla — la sensazione del primo grande blu.", orientation: "landscape" },
  { file: "DSC00371.jpeg", category: "avventure-sub", caption: "Bianco e nero. Quando l'avventura prende la forma di un'illustrazione vintage.", orientation: "landscape" },
  { file: "DSC00430.jpeg", category: "avventure-sub", caption: "Risalita controllata. Sopra la testa, l'ombra del gommone che ti aspetta.", orientation: "portrait" },
  { file: "DSC00980.jpeg", category: "avventure-sub", caption: "Fish-eye sull'ignoto. Una bocca di roccia che si apre verso l'azzurro più puro.", orientation: "landscape" },
  { file: "DSC01209.jpeg", category: "avventure-sub", caption: "Tre sub, una torcia, una parete. Il silenzio totale del Mediterraneo profondo.", orientation: "portrait" },
  { file: "DSC01216.jpeg", category: "avventure-sub", caption: "OK in profondità. Il segno universale che dice \"sto bene\" — e che qui significa felicità.", orientation: "square" },
  { file: "DSC01437.jpeg", category: "avventure-sub", caption: "Volare. Né nuotare né camminare: questo è quello che si fa qui sotto.", orientation: "portrait" },
  { file: "DSC01442.jpeg", category: "avventure-sub", caption: "Solo nel grigio. Quando la visibilità ti regala un quadro a olio in movimento.", orientation: "portrait" },
  { file: "DSC01443.jpeg", category: "avventure-sub", caption: "Oro sopra, blu sotto. L'ora magica esiste anche a venti metri.", orientation: "portrait" },
  { file: "DSC00051.jpeg", category: "avventure-sub", caption: "Sopra la prateria di posidonia. Il polmone verde del Mediterraneo, e tu che lo sorvoli.", orientation: "portrait" },
  { file: "DSC00070.jpeg", category: "avventure-sub", caption: "Una colonna di bolle che ti tradisce. La sub si volta a salutare la macchina.", orientation: "portrait" },
  { file: "DSC02012.jpeg", category: "avventure-sub", caption: "Tre amici, una stessa onda di bolle. Si scende a uno, ma si sale insieme.", orientation: "portrait" },
  { file: "DSC02166.jpeg", category: "avventure-sub", caption: "Sub in bottiglia. Quando la fotografia gioca con la geometria del vetro e della luce.", orientation: "landscape" },
  { file: "DSC02171.jpeg", category: "avventure-sub", caption: "Due sub in un bicchiere. L'obiettivo gioca, il mare diventa arte.", orientation: "portrait" },
  { file: "DSC02178.jpeg", category: "avventure-sub", caption: "Buddy team incorniciati. Mano salda sul vetro, mondo intero dentro.", orientation: "portrait" },
  { file: "DSC04009.jpeg", category: "avventure-sub", caption: "Apnea tra le faraglie. In bianco e nero, dove finisce la luce e inizia il silenzio.", orientation: "portrait" },
  { file: "IMG_5936.jpeg", category: "avventure-sub", caption: "A pochi centimetri dalla parete. La roccia che racconta milioni di anni di Mediterraneo.", orientation: "landscape" },
  { file: "IMG_8847.jpeg", category: "avventure-sub", caption: "In fila indiana sopra la posidonia. Una formazione che sa di squadra.", orientation: "landscape" },
  { file: "immagine-whatsapp-2025-05-24.jpeg", category: "avventure-sub", caption: "Assetto perfetto. Quando il corpo trova il suo equilibrio, il mare ti regge.", orientation: "portrait" },

  // ─── VITA MARINA ──────────────────────────────────────────────────
  { file: "A7E173EC-AE91-432B-B76C-FE701BE27001.jpeg", category: "vita-marina", caption: "Il polpo ti studia. Otto braccia, tre cuori, occhi che sembrano leggere nei pensieri.", orientation: "landscape" },
  { file: "IMG_7555.jpeg", category: "vita-marina", caption: "Il manto del polpo. Si apre come un mantello regale tra le spugne arancioni.", orientation: "landscape" },
  { file: "IMG_5185.jpeg", category: "vita-marina", caption: "Mimetismo da maestro. Cercalo: c'è. Solo non te lo aspettavi così vicino.", orientation: "landscape" },
  { file: "DSC00041.jpeg", category: "vita-marina", caption: "Una tana, due occhi. Il polpo si nasconde tra i sassi e ti spia in silenzio.", orientation: "portrait" },
  { file: "6E8C0893-9B51-4970-ABB0-9F1D3F251698.jpeg", category: "vita-marina", caption: "Murena a bocca aperta. Non è aggressività, è respirazione. Ma fa comunque impressione.", orientation: "square" },
  { file: "DSC00178.jpeg", category: "vita-marina", caption: "Simbiosi al lavoro. Il gamberetto-pulitore disinfetta gli occhi della murena.", orientation: "landscape" },
  { file: "DSC04021.jpeg", category: "vita-marina", caption: "Murena gialla in primo piano. Il sorriso più sincero del Mediterraneo.", orientation: "landscape" },
  { file: "3E4A8FBF-1DAA-4470-9969-B0E3760FFB23.jpeg", category: "vita-marina", caption: "Lo scorfano rosso. Velenoso, immobile, magnificamente arrabbiato.", orientation: "portrait" },
  { file: "DSC00008.jpeg", category: "vita-marina", caption: "Lo scorfano si finge alga. Trovarlo è la prima emozione della giornata.", orientation: "portrait" },
  { file: "DSC00290.jpeg", category: "vita-marina", caption: "Spine, occhi, attesa. Lo scorfano è il vero re mascherato della scogliera.", orientation: "portrait" },
  { file: "DSC04304.jpeg", category: "vita-marina", caption: "Un dragone in miniatura. Le pinne aperte, il colore che sembra dipinto a mano.", orientation: "landscape" },
  { file: "IMG_8269.jpeg", category: "vita-marina", caption: "La cernia. Lenta, curiosa, antica come queste rocce.", orientation: "portrait" },
  { file: "4FF53557-DB40-4FAC-BE8C-01F645585EFB.jpeg", category: "vita-marina", caption: "Trigone in volo radente. Sfila sul fondo sabbioso e sparisce nell'azzurro.", orientation: "square" },
  { file: "B9776E45-A88B-4B81-9D23-635B29559B52.jpeg", category: "vita-marina", caption: "Decollo. Una mantellina spunta dalla sabbia e ti regala un attimo prima di sparire.", orientation: "landscape" },
  { file: "DSC03656.jpeg", category: "vita-marina", caption: "Tramonto subacqueo. Il trigone attraversa il blu sotto un cielo che si tinge d'arancio.", orientation: "landscape" },
  { file: "9957D3DF-0B08-4647-B0AD-CC38924E3E08.jpeg", category: "vita-marina", caption: "Flabellina. Pochi centimetri di puro fuoco viola tra le idroidi.", orientation: "portrait" },
  { file: "DSC05288.jpeg", category: "vita-marina", caption: "Il drago dei sub. Una flabellina rosa che sembra danzare nel vuoto.", orientation: "square" },
  { file: "DSC02498.jpeg", category: "vita-marina", caption: "Filigrana viola. Macro di un nudibranco aggrappato a una gorgonia bonsai.", orientation: "portrait" },
  { file: "DSC02552.jpeg", category: "vita-marina", caption: "Sospesa nel niente. Una flabellina che si fa equilibrista su un filo di alga.", orientation: "portrait" },
  { file: "DSC01882.jpeg", category: "vita-marina", caption: "Due flabelline in conversazione. Bastano pochi millimetri per fare un capolavoro.", orientation: "landscape" },
  { file: "IMG_5885.jpeg", category: "vita-marina", caption: "Pirotecnica nudibranca. Un fuoco d'artificio fisso in mezzo al blu.", orientation: "portrait" },
  { file: "IMG_2005.jpeg", category: "vita-marina", caption: "Sferica e elettrica. La flabellina si gonfia come una stella di mare al neon.", orientation: "square" },
  { file: "IMG_5698.jpeg", category: "vita-marina", caption: "Macro pura. Quando la pazienza è la tua attrezzatura più importante.", orientation: "landscape" },
  { file: "IMG_5914.jpeg", category: "vita-marina", caption: "Spine, viola e oro. Una creatura aliena che cammina su tappeti di alghe.", orientation: "portrait" },
  { file: "C3A1798D-0D8B-4B70-9F14-3C4B32479669.jpeg", category: "vita-marina", caption: "Cratena peregrina. Le strisce blu fluorescente non sono un filtro: sono vere.", orientation: "portrait" },
  { file: "IMG_8268.jpeg", category: "vita-marina", caption: "Due piccoli predatori. Sembrano fragili — eppure mangiano idroidi velenosi senza battere ciglio.", orientation: "portrait" },
  { file: "IMG_6790.jpeg", category: "vita-marina", caption: "La discodoride dalmata. Il nudibranco che sembra un cucciolo a pois.", orientation: "landscape" },
  { file: "DSC04002.jpeg", category: "vita-marina", caption: "Felimare giallo-blu. Un graffito vivente sulle spugne rosse di Sardegna.", orientation: "landscape" },
  { file: "IMG_0494.jpeg", category: "vita-marina", caption: "Un Umbraculum umbraculum beige. Lento, vegetariano, e con due antennine simpaticissime.", orientation: "landscape" },
  { file: "DSC01829.jpeg", category: "vita-marina", caption: "Faccia a faccia con una Phyllorhiza punctata. Più grande della tua testa, ma del tutto innocua.", orientation: "portrait" },
  { file: "DSC02199.jpeg", category: "vita-marina", caption: "Diver e medusa, stessa direzione. Co-protagonisti di un'immersione fortunata.", orientation: "portrait" },
  { file: "DSC02023.jpeg", category: "vita-marina", caption: "Banco di meduse cassiopee. Una migrazione gentile a un metro dalla superficie.", orientation: "portrait" },
  { file: "DSC05150.jpeg", category: "vita-marina", caption: "La medusa cassiopea con i suoi inquilini. Pesciolini che fanno autostop nei tentacoli.", orientation: "landscape" },
  { file: "DSC01897.jpeg", category: "vita-marina", caption: "Una corona dorata sospesa. La Phyllorhiza punctata fluttua tra superficie e fondo.", orientation: "portrait" },
  { file: "IMG_7582.jpeg", category: "vita-marina", caption: "L'uovo fritto del mare. Soprannome dato dai sub alla Cotylorhiza tuberculata.", orientation: "landscape" },
  { file: "DSC01841.jpeg", category: "vita-marina", caption: "Medusa fish-eye. Pizzo bianco e cobalto puro, in un'unica inquadratura.", orientation: "landscape" },
  { file: "DSC01842.jpeg", category: "vita-marina", caption: "Lampada vivente. La medusa si offre alla luce e diventa cristallo.", orientation: "landscape" },
  { file: "DSC01859.jpeg", category: "vita-marina", caption: "Vista subacquea fish-eye. Una medusa minuscola persa nel grande blu.", orientation: "landscape" },
  { file: "DSC01861.jpeg", category: "vita-marina", caption: "Controsole su medusa. L'azzurro che diventa cattedrale liquida.", orientation: "landscape" },
  { file: "9DFF1FA4-4421-49BB-A60D-A453C2272A38.jpeg", category: "vita-marina", caption: "Vermocane. Bellissimo da fotografare, ma da non toccare assolutamente.", orientation: "square" },
  { file: "DSC01920.jpeg", category: "vita-marina", caption: "Il tritone gigante. Una conchiglia che sembra appena uscita da un mito.", orientation: "portrait" },
  { file: "IMG_6019.jpeg", category: "vita-marina", caption: "Stella rossa, fondo verde. La firma del Mediterraneo in due colori.", orientation: "portrait" },
  { file: "IMG_5955.jpeg", category: "vita-marina", caption: "Una stella su una cima. La vita si attacca a tutto, anche alle corde dell'ormeggio.", orientation: "landscape" },
  { file: "IMG_8891.jpeg", category: "vita-marina", caption: "La cicala di mare. Crostaceo schivo, notturno, e da sempre simbolo dei fondali sardi.", orientation: "landscape" },
  { file: "IMG_6123.jpeg", category: "vita-marina", caption: "Una rete fantasma. Recuperarle è parte del nostro lavoro silenzioso per il mare.", orientation: "portrait" },

  // ─── VOLTI DEL BLU ────────────────────────────────────────────────
  { file: "3E79F81A-7F5B-43F0-99CC-392971467D5C.jpeg", category: "volti-del-blu", caption: "Maschera rosa, occhi liquidi. Lo sguardo di chi ha appena visto qualcosa di nuovo.", orientation: "landscape" },
  { file: "AC021436-7E1D-4EBC-80DD-2EA73EAC8257.jpeg", category: "volti-del-blu", caption: "Ritratto in apnea visiva. Pochi minuti di assoluta concentrazione, immortalati.", orientation: "portrait" },
  { file: "964623b7-ca6f-40ef-8553-c4185493bfc4.jpeg", category: "volti-del-blu", caption: "Una stella in mano e una in faccia. Si chiama meraviglia, e qui è di casa.", orientation: "portrait" },
  { file: "DSC04895.jpeg", category: "volti-del-blu", caption: "Il sorriso che non hai dietro la cattedra. È quello che ti aspetta a 10 metri sotto.", orientation: "portrait" },
  { file: "DSC04866.jpeg", category: "volti-del-blu", caption: "Lo stupore puro. Quando il mare ti regala qualcosa che non ti aspettavi.", orientation: "portrait" },
  { file: "DSC05589.jpeg", category: "volti-del-blu", caption: "Lo sguardo blu. Il mare si specchia nelle iridi e tutto il resto sparisce.", orientation: "portrait" },
  { file: "DSC04041.jpeg", category: "volti-del-blu", caption: "Doppio shaka subacqueo. Linguaggio dei sub: tutto va alla grande.", orientation: "portrait" },
  { file: "DSC02025.jpeg", category: "volti-del-blu", caption: "In bianco e nero, come un ricordo che non sbiadisce mai.", orientation: "portrait" },
  { file: "DSC02007.jpeg", category: "volti-del-blu", caption: "Ritratto da copertina. La luce dall'alto, l'erogatore in centro, il resto è sguardo.", orientation: "portrait" },
  { file: "DSC02026.jpeg", category: "volti-del-blu", caption: "Sospeso, immobile, totale. L'assetto neutro raccontato in una sola foto.", orientation: "portrait" },
  { file: "EBE611D6-F8F6-4A0D-B7CA-14B6F16B2261.jpeg", category: "volti-del-blu", caption: "Braccia spalancate sopra una scogliera. Si chiama gratitudine in assetto neutro.", orientation: "portrait" },
  { file: "DSC01907.jpeg", category: "volti-del-blu", caption: "Trofeo di pace: una conchiglia ammirata, fotografata, poi rimessa al suo posto.", orientation: "portrait" },
  { file: "DSC03169.jpeg", category: "volti-del-blu", caption: "Mani e tentacoli. Tra sub e polpo c'è una conversazione che non ha bisogno di parole.", orientation: "landscape" },
  { file: "IMG_0691.jpeg", category: "volti-del-blu", caption: "Maschera con il nome scritto a mano. Il dettaglio che ti dice che sei in una vera scuola di sub.", orientation: "landscape" },
  { file: "IMG_5342.jpeg", category: "volti-del-blu", caption: "Assetto perfetto, capelli al vento sottomarino. Il volo del sub.", orientation: "portrait" },
  { file: "IMG_5892.jpeg", category: "volti-del-blu", caption: "Maschera viola contro pareti chiare. Geometria pura del Mediterraneo.", orientation: "portrait" },
  { file: "IMG_5904.jpeg", category: "volti-del-blu", caption: "Sorriso sotto la maschera fucsia. Si vede tutto, anche con il boccaglio in bocca.", orientation: "landscape" },
  { file: "IMG_7158.jpeg", category: "volti-del-blu", caption: "Selfie a un respiro dalla superficie. La risata che non riesci a trattenere.", orientation: "portrait" },
  { file: "IMG_8842.jpeg", category: "volti-del-blu", caption: "Shaka subacqueo, classico. Diving is the new lifestyle.", orientation: "portrait" },
  { file: "IMG_8844.jpeg", category: "volti-del-blu", caption: "Gli occhi prima delle parole. È così che inizia ogni amore per il mare.", orientation: "landscape" },
  { file: "IMG_9084.jpeg", category: "volti-del-blu", caption: "Bottiglia rinvenuta dal fondo. Si beve l'aria del passato — il vino, ovviamente, è ancora chiuso.", orientation: "portrait" },
  { file: "IMG_9086.jpeg", category: "volti-del-blu", caption: "Mano alzata in saluto. Il \"ciao\" più silenzioso e più sincero che esista.", orientation: "portrait" },

  // ─── PRIMI RESPIRI ────────────────────────────────────────────────
  { file: "1106ea29-2717-4e21-8120-0311050e4689.jpeg", category: "primi-respiri", caption: "Primo battesimo, primo sorriso. Il momento esatto in cui un bambino diventa un piccolo sub.", orientation: "portrait" },
  { file: "a9690914-519d-49b6-924b-2b040172f50b.jpeg", category: "primi-respiri", caption: "Mute in coppia. Mamma e figlio pronti a scoprire insieme cosa c'è sotto.", orientation: "portrait" },
  { file: "IMG_1811.jpeg", category: "primi-respiri", caption: "In piscina, con calma. Si parte sempre da qui: prima la fiducia, poi il mare.", orientation: "landscape" },
  { file: "IMG_4763.jpeg", category: "primi-respiri", caption: "Svuotamento maschera, palestra di calma. L'esercizio che cambia tutto, fatto in sicurezza.", orientation: "landscape" },
  { file: "IMG_4745.jpeg", category: "primi-respiri", caption: "Vasca, palme, attrezzatura. La nostra piscina-scuola sotto il cielo della Sardegna.", orientation: "landscape" },
  { file: "IMG_5503.jpeg", category: "primi-respiri", caption: "Due fratelli, due maschere, una bolla doppia. Il primo respiro sott'acqua si ricorda per sempre.", orientation: "landscape" },
  { file: "IMG_6559.jpeg", category: "primi-respiri", caption: "Bolle e meraviglia. A volte la felicità ha la forma di un bambino dietro una maschera.", orientation: "landscape" },
  { file: "B005E854-8BEC-4A5D-A0D2-66E21F69BBEC.jpeg", category: "primi-respiri", caption: "Istruttore e allievo, mano nella mano. È così che si impara a volare nel blu.", orientation: "portrait" },
  { file: "IMG_3881_preview.jpeg", category: "primi-respiri", caption: "Primi metri di profondità. La pinna sul fondo, l'istruttore sempre a portata di sguardo.", orientation: "landscape" },
  { file: "IMG_4116.jpeg", category: "primi-respiri", caption: "Briefing in immersione. Anche sotto, ogni segnale viene controllato e rispiegato.", orientation: "square" },
  { file: "IMG_8845.jpeg", category: "primi-respiri", caption: "Si stringe la mano. Promemoria silenzioso: non sei mai sola qui sotto.", orientation: "landscape" },
  { file: "DSC02057.jpeg", category: "primi-respiri", caption: "Due OK in posidoneto. La coppia che si è fidata del mare e della propria scuola.", orientation: "portrait" },
  { file: "f49584d5-6b45-4917-b86b-03a11221e71f.jpeg", category: "primi-respiri", caption: "Lezione di superficie in piscina. Si comincia dall'acqua bassa, sempre.", orientation: "portrait" },
  { file: "IMG_6179.jpeg", category: "primi-respiri", caption: "Tre allievi, tre OK. Il momento in cui la teoria diventa fiducia.", orientation: "landscape" },
  { file: "IMG_8848.jpeg", category: "primi-respiri", caption: "Posa da pro a 12 anni. Per qualcuno il mare è già una seconda casa.", orientation: "square" },
  { file: "IMG_8849.jpeg", category: "primi-respiri", caption: "Mano nella mano con un polpo. La curiosità di un ragazzino vale più di mille lezioni.", orientation: "landscape" },
  { file: "DSC00237.jpeg", category: "primi-respiri", caption: "Salto a braccia aperte. La fine della giornata è sempre la più divertente.", orientation: "portrait" },

  // ─── RELITTI & TESORI ─────────────────────────────────────────────
  { file: "61BB4E7B-7531-4507-ADAE-AFF61F3CDF4D.jpeg", category: "relitti-tesori", caption: "Il relitto in controluce. Una piramide d'acciaio addormentata da decenni.", orientation: "portrait" },
  { file: "AEF89894-F5BC-4A17-B80B-792B057ECA3D.jpeg", category: "relitti-tesori", caption: "Due torce sopra un relitto. Quando l'esplorazione diventa cinema.", orientation: "portrait" },
  { file: "IMG_6114.jpeg", category: "relitti-tesori", caption: "La prua coperta di vita. Ogni ruggine ospita un piccolo ecosistema.", orientation: "portrait" },
  { file: "DSC04714.jpeg", category: "relitti-tesori", caption: "Anfora romana incrostata. Duemila anni in fondo al mare, e ancora qui.", orientation: "landscape" },
  { file: "DSC05829.jpeg", category: "relitti-tesori", caption: "Anfora e un piccolo abitante rosso. Il passato è un appartamento sempre affittato.", orientation: "portrait" },
  { file: "img_4025.jpeg", category: "relitti-tesori", caption: "Recupero archeologico. Le anfore si sollevano lentamente, come si tratta una memoria fragile.", orientation: "landscape" },
  { file: "IMG_2497.jpeg", category: "relitti-tesori", caption: "Trofeo storico in superficie. Sorridi: hai appena toccato duemila anni di storia.", orientation: "landscape" },

  // ─── VITA DI BORDO ────────────────────────────────────────────────
  { file: "413b51e5-1399-4bb0-9925-4c598c870ef3.jpeg", category: "vita-di-bordo", caption: "Famiglia al completo, gommone giallo. È così che inizia un'avventura: con cinque mani alzate.", orientation: "landscape" },
  { file: "6c45df1e-74d6-47d7-a3ea-74068eca056b.jpeg", category: "vita-di-bordo", caption: "Direzione punto di immersione. Bombole in mezzo, sorrisi tutto intorno.", orientation: "landscape" },
  { file: "72786957-f82b-4786-8d87-4648a56a3356.jpeg", category: "vita-di-bordo", caption: "Pre-tuffo. La bandiera issata, le mute mezze chiuse, il cuore che già accelera.", orientation: "landscape" },
  { file: "8BE08459-E542-4ED3-9F85-222AD6433B77.jpeg", category: "vita-di-bordo", caption: "Padre e figlio in superficie. Da una vita si tuffano insieme — e si vede.", orientation: "portrait" },
  { file: "2E586260-6338-488F-9278-6CE842E5E648-1504-000000D777C95418_Original.jpeg", category: "vita-di-bordo", caption: "Il sollevamento della bombola. Routine quotidiana, ma sempre con un filo di sano orgoglio.", orientation: "portrait" },
  { file: "bacbd48b-08b5-4c5a-a495-5977e4bd5fd9.jpeg", category: "vita-di-bordo", caption: "Lo sguardo all'orizzonte. La pausa che separa un'immersione dall'altra.", orientation: "portrait" },
  { file: "DSC05586.jpeg", category: "vita-di-bordo", caption: "Pronta a entrare in acqua. Maschera in mano, sorriso pre-tuffo.", orientation: "portrait" },
  { file: "IMG_2468.jpeg", category: "vita-di-bordo", caption: "Vista dal drone: tutti in acqua. Quando guardi giù e vedi il tuo gruppo già sotto.", orientation: "landscape" },
  { file: "IMG_8979.jpeg", category: "vita-di-bordo", caption: "Snorkeling con doppio pollice in su. Anche senza bombola, qui sotto succede sempre qualcosa.", orientation: "landscape" },
  { file: "IMG_8981.jpeg", category: "vita-di-bordo", caption: "Boccagli in mano, occhi sull'acqua. Cinque sconosciuti che fra dieci minuti saranno un equipaggio.", orientation: "portrait" },
  { file: "IMG_9780.jpeg", category: "vita-di-bordo", caption: "Bandiera Coltri al vento. Il gommone scalda i motori davanti alla Torre del Budello.", orientation: "portrait" },
  { file: "IMG_9782.jpeg", category: "vita-di-bordo", caption: "Mare di tela, gommone fermo. La quiete prima della prima discesa del mattino.", orientation: "portrait" },
  { file: "IMG_9900.jpeg", category: "vita-di-bordo", caption: "Il salvagente più bello del Mediterraneo. Anche il bassotto ha la sua muta da squalo.", orientation: "portrait" },
  { file: "IMG_9901.jpeg", category: "vita-di-bordo", caption: "Equipaggio non-umano. Il bassotto è la vera mascotte di bordo.", orientation: "portrait" },
  { file: "72e971a0-4a51-4ef1-988a-f65e70165f89.jpeg", category: "vita-di-bordo", caption: "Bad Boy of Sardinia. La t-shirt firmata e il vero cattivo ragazzo: il bassotto.", orientation: "square" },
  { file: "IMG_6038.jpeg", category: "vita-di-bordo", caption: "Galleggiare in turchese. La sosta tra due immersioni vale quanto le immersioni stesse.", orientation: "portrait" },

  // ─── SARDEGNA SELVAGGIA ───────────────────────────────────────────
  { file: "28f6c09a-daab-4974-ad10-23f83e2e2770.jpeg", category: "sardegna-selvaggia", caption: "Cielo a pecorelle sopra la Torre del Budello. Il momento in cui capisci che stai in un posto speciale.", orientation: "portrait" },
  { file: "b9e9a095-cfb3-4e6d-a9a9-42f8bb44727e.jpeg", category: "sardegna-selvaggia", caption: "Panoramica di Su Giudeu. Le sfumature di turchese che hanno reso Chia famosa nel mondo.", orientation: "landscape" },
  { file: "IMG_0146.jpeg", category: "sardegna-selvaggia", caption: "La falesia che cade in mare. Da qui partono le immersioni più scenografiche.", orientation: "portrait" },
  { file: "IMG_1610.jpeg", category: "sardegna-selvaggia", caption: "Spiaggia deserta, mare-piscina. A volte il paradiso non ha bisogno di filtri.", orientation: "square" },
  { file: "IMG_2548.jpeg", category: "sardegna-selvaggia", caption: "Scogli e trasparenze. Il fondo si vede a otto metri come fosse a uno.", orientation: "landscape" },
  { file: "IMG_2988.jpeg", category: "sardegna-selvaggia", caption: "Scia all'alba. Quando il mare è uno specchio e tu sei l'unico a graffiarlo.", orientation: "landscape" },
  { file: "IMG_2996.jpeg", category: "sardegna-selvaggia", caption: "Drone sull'ancora. Il gommone sembra appeso a un cielo capovolto.", orientation: "landscape" },
  { file: "IMG_3125.jpeg", category: "sardegna-selvaggia", caption: "Faraglioni dall'alto. Ogni roccia qui sotto è un'immersione che ti aspetta.", orientation: "square" },
  { file: "IMG_3232.jpeg", category: "sardegna-selvaggia", caption: "Su Giudeu, lo scoglio della cartolina. Il punto in cui tutti chiedono \"ma questo è davvero in Italia?\".", orientation: "portrait" },
  { file: "IMG_4183.jpeg", category: "sardegna-selvaggia", caption: "I faraglioni di Capo Spartivento. Dove finisce la terra e inizia la nostra palestra blu.", orientation: "landscape" },
  { file: "IMG_5770.jpeg", category: "sardegna-selvaggia", caption: "Granito al sole, mare a fianco. La firma geologica del Sud Sardegna.", orientation: "portrait" },
  { file: "IMG_8405.jpeg", category: "sardegna-selvaggia", caption: "Torre del Budello al crepuscolo. Sentinella di pietra sul mare, da settecento anni.", orientation: "landscape" },
  { file: "IMG_8448.jpeg", category: "sardegna-selvaggia", caption: "La torre, la laguna, le dune. Tre paesaggi in una sola inquadratura.", orientation: "portrait" },
  { file: "IMG_7863.jpeg", category: "sardegna-selvaggia", caption: "Tramonto sulla laguna dei fenicotteri. Quando la natura prende fuoco senza bruciare.", orientation: "landscape" },
  { file: "IMG_8978.jpeg", category: "sardegna-selvaggia", caption: "Panoramica dal gommone. Cala di Tuerredda — turchese che sembra photoshoppato.", orientation: "landscape" },
];

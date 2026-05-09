#!/usr/bin/env python3
import json
import os

BASE = "/mnt/data/Desktop/clieni/diving chia/Kimi_Agent_Diving Chia Site Scrape/app"

# Read existing files
with open(os.path.join(BASE, "src/messages/it.json"), "r", encoding="utf-8") as f:
    it = json.load(f)
with open(os.path.join(BASE, "src/messages/en.json"), "r", encoding="utf-8") as f:
    en = json.load(f)
with open(os.path.join(BASE, "src/messages/de.json"), "r", encoding="utf-8") as f:
    de = json.load(f)

# ===== CONTACT (client component) =====
contact_it = {
    "metaTitle": "Contatti e Prenotazioni — Diving Chia",
    "metaDescription": "Scrivici per prenotare la tua esperienza subacquea a Chia. Ti risponderemo in pochi minuti.",
    "goldLabel": "Prenota Ora",
    "title": "Contatti e Prenotazioni",
    "subtitle": "Scrivici per prenotare la tua esperienza. Ti risponderemo in pochi minuti.",
    "formTitle": "Richiedi Prenotazione",
    "formSubtitle": "Compila il form e ti invieremo una conferma via WhatsApp",
    "labelName": "Nome / Name *",
    "placeholderName": "Il tuo nome completo",
    "labelPhone": "Telefono / Phone *",
    "placeholderPhone": "+39 ...",
    "labelDate": "Data / Date *",
    "labelPeople": "Numero di Persone / Number of People",
    "placeholderPeople": "Es: 2 adulti + 1 bambino",
    "labelActivity": "Attività / Activity *",
    "activityPlaceholder": "Seleziona un'attività...",
    "labelLevel": "Livello Sub / Diving Level",
    "levelPlaceholder": "Seleziona il tuo livello...",
    "labelHotel": "Hotel / Zona / Hotel / Area",
    "placeholderHotel": "Dove alloggi?",
    "submitButton": "Invia Richiesta via WhatsApp",
    "contactTitle": "Contatti Diretti",
    "whatsappLabel": "WhatsApp",
    "locationLabel": "Dove Siamo",
    "locationValue": "Chia, Sud Sardegna, Italia",
    "hoursLabel": "Orari",
    "hoursValue": "8:00 — 20:00, Aprile — Ottobre",
    "mapLabel": "Mappa — Chia, Sardegna",
    "activities": {
        "tryScuba": "Try Scuba",
        "guidedDives": "Immersioni Guidate",
        "snorkeling": "Snorkeling",
        "privateTour": "Tour Privato",
        "sunsetBoat": "Tramonto in Barca",
        "course": "Corso Sub"
    },
    "levels": {
        "never": "Mai immersioni",
        "beginner": "Principiante",
        "advanced": "Avanzato",
        "expert": "Esperto"
    }
}

contact_en = {
    "metaTitle": "Contact & Bookings — Diving Chia",
    "metaDescription": "Get in touch to book your diving experience in Chia. We reply within minutes.",
    "goldLabel": "Book Now",
    "title": "Contact & Bookings",
    "subtitle": "Write to us to book your experience. We will reply within minutes.",
    "formTitle": "Request a Booking",
    "formSubtitle": "Fill in the form and we will send you a confirmation via WhatsApp",
    "labelName": "Name *",
    "placeholderName": "Your full name",
    "labelPhone": "Phone *",
    "placeholderPhone": "+39 ...",
    "labelDate": "Date *",
    "labelPeople": "Number of People",
    "placeholderPeople": "E.g. 2 adults + 1 child",
    "labelActivity": "Activity *",
    "activityPlaceholder": "Select an activity...",
    "labelLevel": "Diving Level",
    "levelPlaceholder": "Select your level...",
    "labelHotel": "Hotel / Area",
    "placeholderHotel": "Where are you staying?",
    "submitButton": "Send Request via WhatsApp",
    "contactTitle": "Direct Contact",
    "whatsappLabel": "WhatsApp",
    "locationLabel": "Where We Are",
    "locationValue": "Chia, South Sardinia, Italy",
    "hoursLabel": "Hours",
    "hoursValue": "8:00 — 20:00, April — October",
    "mapLabel": "Map — Chia, Sardinia",
    "activities": {
        "tryScuba": "Try Scuba",
        "guidedDives": "Guided Dives",
        "snorkeling": "Snorkeling",
        "privateTour": "Private Tour",
        "sunsetBoat": "Sunset Boat Trip",
        "course": "Diving Course"
    },
    "levels": {
        "never": "Never dived",
        "beginner": "Beginner",
        "advanced": "Advanced",
        "expert": "Expert"
    }
}

contact_de = {
    "metaTitle": "Kontakt & Buchungen — Diving Chia",
    "metaDescription": "Kontaktieren Sie uns, um Ihr Tauerlebnis in Chia zu buchen. Wir antworten innerhalb weniger Minuten.",
    "goldLabel": "Jetzt Buchen",
    "title": "Kontakt & Buchungen",
    "subtitle": "Schreiben Sie uns, um Ihr Erlebnis zu buchen. Wir antworten innerhalb weniger Minuten.",
    "formTitle": "Buchungsanfrage",
    "formSubtitle": "Füllen Sie das Formular aus und wir senden Ihnen eine Bestätigung per WhatsApp",
    "labelName": "Name *",
    "placeholderName": "Ihr vollständiger Name",
    "labelPhone": "Telefon *",
    "placeholderPhone": "+39 ...",
    "labelDate": "Datum *",
    "labelPeople": "Anzahl der Personen",
    "placeholderPeople": "Z.B. 2 Erwachsene + 1 Kind",
    "labelActivity": "Aktivität *",
    "activityPlaceholder": "Wählen Sie eine Aktivität...",
    "labelLevel": "Tauchlevel",
    "levelPlaceholder": "Wählen Sie Ihr Level...",
    "labelHotel": "Hotel / Gebiet",
    "placeholderHotel": "Wo übernachten Sie?",
    "submitButton": "Anfrage per WhatsApp senden",
    "contactTitle": "Direktkontakt",
    "whatsappLabel": "WhatsApp",
    "locationLabel": "Standort",
    "locationValue": "Chia, Südsardinien, Italien",
    "hoursLabel": "Öffnungszeiten",
    "hoursValue": "8:00 — 20:00, April — Oktober",
    "mapLabel": "Karte — Chia, Sardinien",
    "activities": {
        "tryScuba": "Schnuppertauchen",
        "guidedDives": "Geführte Tauchgänge",
        "snorkeling": "Schnorcheln",
        "privateTour": "Private Tour",
        "sunsetBoat": "Sonnenuntergang per Boot",
        "course": "Tauchkurs"
    },
    "levels": {
        "never": "Noch nie getaucht",
        "beginner": "Anfänger",
        "advanced": "Fortgeschritten",
        "expert": "Experte"
    }
}

# ===== COURSES =====
courses_it = {
    "metaTitle": "Corsi Sub — Certificazioni PADI, SSI, CMAS Chia",
    "metaDescription": "Corsi subacquei PADI, SSI e CMAS a Chia, Sud Sardegna. Dalla prima immersione al Divemaster.",
    "goldLabelHero": "Impara a Sub",
    "title": "Corsi Subacquei",
    "subtitle": "Certificazioni PADI, SSI e CMAS per ogni livello. Dalla prima immersione al Divemaster.",
    "cta": "Prenota su WhatsApp",
    "goldLabelSection": "I Nostri Corsi",
    "sectionTitle": "Scegli il Tuo Livello",
    "goldLabelAffiliations": "Affiliazioni",
    "affiliationsTitle": "Perché Trainare con Noi",
    "courses": [
        {"num": "01", "name": "Discover Scuba Diving", "price": "€85", "duration": "1/2 giorno",
         "desc": "La tua prima esperienza sott'acqua. Nessuna certificazione richiesta, un breve briefing e un istruttore sempre al tuo fianco."},
        {"num": "02", "name": "Open Water Diver", "price": "€420", "duration": "3-4 giorni",
         "desc": "Il corso base per diventare subacqueo certificato. Teoria, esercizi in acque confinate e 4 immersioni in mare aperto."},
        {"num": "03", "name": "Advanced Open Water", "price": "€320", "duration": "2-3 giorni",
         "desc": "Migliora le tue competenze con 5 immersioni di specialità: deep, navigazione, e tre a tua scelta tra le nostre proposte."},
        {"num": "04", "name": "Rescue Diver", "price": "€380", "duration": "3-4 giorni",
         "desc": "Impara a gestire situazioni di emergenza e a prenderti cura degli altri sub. Un corso stimolante che ti farà crescere come subacqueo."},
        {"num": "05", "name": "Divemaster", "price": "Su richiesta", "duration": "4+ settimane",
         "desc": "Il primo livello professionale. Diventa un leader, assisti gli istruttori e porta gli altri alla scoperta del mondo subacqueo."},
    ],
    "affiliations": [
        {"name": "PADI", "desc": "Professional Association of Diving Instructors — la più grande organizzazione subacquea al mondo."},
        {"name": "SSI", "desc": "Scuba Schools International — certificazioni riconosciute globalmente con approccio digitale moderno."},
        {"name": "CMAS", "desc": "Confédération Mondiale des Activités Subaquatiques — standard europei di eccellenza."},
    ]
}

courses_en = {
    "metaTitle": "Diving Courses — PADI, SSI, CMAS Certifications Chia",
    "metaDescription": "PADI, SSI and CMAS scuba courses in Chia, South Sardinia. From your first dive to Divemaster.",
    "goldLabelHero": "Learn to Dive",
    "title": "Diving Courses",
    "subtitle": "PADI, SSI and CMAS certifications for every level. From your first dive to Divemaster.",
    "cta": "Book on WhatsApp",
    "goldLabelSection": "Our Courses",
    "sectionTitle": "Choose Your Level",
    "goldLabelAffiliations": "Affiliations",
    "affiliationsTitle": "Why Train With Us",
    "courses": [
        {"num": "01", "name": "Discover Scuba Diving", "price": "€85", "duration": "1/2 day",
         "desc": "Your first underwater experience. No certification required, a short briefing and an instructor by your side at all times."},
        {"num": "02", "name": "Open Water Diver", "price": "€420", "duration": "3-4 days",
         "desc": "The foundation course to become a certified diver. Theory, confined water exercises and 4 open water dives."},
        {"num": "03", "name": "Advanced Open Water", "price": "€320", "duration": "2-3 days",
         "desc": "Improve your skills with 5 specialty dives: deep, navigation, and three of your choice from our offerings."},
        {"num": "04", "name": "Rescue Diver", "price": "€380", "duration": "3-4 days",
         "desc": "Learn to manage emergency situations and care for other divers. A stimulating course that will make you grow as a diver."},
        {"num": "05", "name": "Divemaster", "price": "On request", "duration": "4+ weeks",
         "desc": "The first professional level. Become a leader, assist instructors and guide others in discovering the underwater world."},
    ],
    "affiliations": [
        {"name": "PADI", "desc": "Professional Association of Diving Instructors — the largest scuba diving organisation in the world."},
        {"name": "SSI", "desc": "Scuba Schools International — globally recognised certifications with a modern digital approach."},
        {"name": "CMAS", "desc": "World Underwater Federation — European standards of excellence."},
    ]
}

courses_de = {
    "metaTitle": "Tauchkurse — PADI, SSI, CMAS Zertifizierungen Chia",
    "metaDescription": "PADI-, SSI- und CMAS-Tauchkurse in Chia, Südsardinien. Vom ersten Tauchgang bis zum Divemaster.",
    "goldLabelHero": "Tauchen lernen",
    "title": "Tauchkurse",
    "subtitle": "PADI-, SSI- und CMAS-Zertifizierungen für jedes Level. Vom ersten Tauchgang bis zum Divemaster.",
    "cta": "Auf WhatsApp buchen",
    "goldLabelSection": "Unsere Kurse",
    "sectionTitle": "Wählen Sie Ihr Level",
    "goldLabelAffiliations": "Verbände",
    "affiliationsTitle": "Warum bei uns trainieren",
    "courses": [
        {"num": "01", "name": "Discover Scuba Diving", "price": "€85", "duration": "1/2 Tag",
         "desc": "Ihr erstes Unterwassererlebnis. Keine Zertifizierung erforderlich, ein kurzes Briefing und ein Instruktor an Ihrer Seite."},
        {"num": "02", "name": "Open Water Diver", "price": "€420", "duration": "3-4 Tage",
         "desc": "Der Basiskurs zum zertifizierten Taucher. Theorie, Übungen im geschützten Gewässer und 4 Freiwassertauchgänge."},
        {"num": "03", "name": "Advanced Open Water", "price": "€320", "duration": "2-3 Tage",
         "desc": "Verbessern Sie Ihre Fähigkeiten mit 5 Spezialtauchgängen: Tief, Navigation und drei nach Wahl aus unserem Angebot."},
        {"num": "04", "name": "Rescue Diver", "price": "€380", "duration": "3-4 Tage",
         "desc": "Lernen Sie, Notsituationen zu managen und sich um andere Taucher zu kümmern. Ein spannender Kurs, der Sie weiterbringt."},
        {"num": "05", "name": "Divemaster", "price": "Auf Anfrage", "duration": "4+ Wochen",
         "desc": "Das erste professionelle Level. Werden Sie ein Leader, unterstützen Sie Instruktoren und führen Sie andere in die Unterwasserwelt."},
    ],
    "affiliations": [
        {"name": "PADI", "desc": "Professional Association of Diving Instructors — die größte Tauchorganisation der Welt."},
        {"name": "SSI", "desc": "Scuba Schools International — weltweit anerkannte Zertifizierungen mit modernem digitalen Ansatz."},
        {"name": "CMAS", "desc": "Confédération Mondiale des Activités Subaquatiques — europäische Exzellenzstandards."},
    ]
}

# ===== DIVING CHIA =====
divingChia_it = {
    "metaTitle": "Immersioni Subacquee a Chia — Diving Chia | Dal 1996",
    "metaDescription": "Scopri le immersioni subacquee a Chia, Sud Sardegna. Oltre 25 anni di esperienza nei migliori siti di diving del Mediterraneo.",
    "goldLabel": "Dal 1996",
    "title": "Immersioni Subacquee a Chia",
    "subtitle": "Oltre 25 anni di esperienza esplorando i fondali del Sud Sardegna.",
    "cta": "Prenota su WhatsApp",
    "paragraphs": [
        "Chia è una delle località più affascinanti della Sardegna del Sud per le immersioni subacquee. Le sue acque cristalline, la visibilità spesso superiore ai 30 metri e la ricchezza della vita marina la rendono una meta ambita dai subacquei di tutto il mondo. Dal 1996, Diving Chia accompagna appassionati e curiosi alla scoperta di questo paradiso sommerso.",
        "I nostri siti di immersione spaziano dalla tranquilla Baia di Chia, perfetta per i principianti, alle profonde Grotte di Teulada per i sub più esperti. Ogni immersione è un'avventura unica, guidata da istruttori certificati che conoscono ogni anfratto e ogni segreto di queste coste.",
        "Che tu sia alla tua prima esperienza o un sub certificato alla ricerca di nuove emozioni, a Chia troverai ciò che cerchi. Organizziamo immersioni guidate, corsi PADI e SSI, e tour privati per far vivere il meglio del Mediterraneo ai nostri ospiti."
    ]
}

divingChia_en = {
    "metaTitle": "Scuba Diving in Chia — Diving Chia | Since 1996",
    "metaDescription": "Discover scuba diving in Chia, South Sardinia. Over 25 years of experience at the best Mediterranean dive sites.",
    "goldLabel": "Since 1996",
    "title": "Scuba Diving in Chia",
    "subtitle": "Over 25 years of experience exploring the seabeds of South Sardinia.",
    "cta": "Book on WhatsApp",
    "paragraphs": [
        "Chia is one of the most fascinating locations in South Sardinia for scuba diving. Its crystal-clear waters, visibility often exceeding 30 metres, and the richness of marine life make it a sought-after destination for divers from around the world. Since 1996, Diving Chia has been accompanying enthusiasts and curious visitors to discover this underwater paradise.",
        "Our dive sites range from the tranquil Chia Bay, perfect for beginners, to the deep Teulada Caves for more experienced divers. Every dive is a unique adventure, guided by certified instructors who know every nook and cranny and every secret of these coasts.",
        "Whether it is your first experience or you are a certified diver looking for new thrills, in Chia you will find what you are looking for. We organise guided dives, PADI and SSI courses, and private tours to let our guests experience the best of the Mediterranean."
    ]
}

divingChia_de = {
    "metaTitle": "Tauchen in Chia — Diving Chia | Seit 1996",
    "metaDescription": "Entdecken Sie das Tauchen in Chia, Südsardinien. Über 25 Jahre Erfahrung an den besten Tauchspots des Mittelmeers.",
    "goldLabel": "Seit 1996",
    "title": "Tauchen in Chia",
    "subtitle": "Über 25 Jahre Erfahrung bei der Erkundung der Meeresböden Südsardiniens.",
    "cta": "Auf WhatsApp buchen",
    "paragraphs": [
        "Chia ist einer der faszinierendsten Orte in Südsardinien zum Tauchen. Das kristallklare Wasser, die Sichtweite von oft über 30 Metern und der Reichtum an Meeresleben machen es zu einem begehrten Ziel für Taucher aus aller Welt. Seit 1996 begleitet Diving Chia Enthusiasten und Neugierige bei der Entdeckung dieses Unterwasserparadieses.",
        "Unsere Tauchgebiete reichen von der ruhigen Bucht von Chia, perfekt für Anfänger, bis zu den tiefen Höhlen von Teulada für erfahrenere Taucher. Jeder Tauchgang ist ein einzigartiges Abenteuer, geführt von zertifizierten Instruktoren, die jede Ecke und jedes Geheimnis dieser Küsten kennen.",
        "Ob es Ihr erstes Erlebnis ist oder Sie ein zertifizierter Taucher sind, der nach neuen Nervenkitzeln sucht – in Chia finden Sie, was Sie suchen. Wir organisieren geführte Tauchgänge, PADI- und SSI-Kurse sowie private Touren, damit unsere Gäste das Beste des Mittelmeers erleben können."
    ]
}

# ===== DIVING NEAR CHIA =====
divingNearChia_it = {
    "metaTitle": "Immersioni vicino a Chia, Pula, Teulada & Capoterra — Diving Chia",
    "metaDescription": "Immersioni subacquee nei dintorni di Chia, Pula, Teulada e Capoterra. I migliori siti del Sud Sardegna.",
    "goldLabel": "Sud Sardegna",
    "title": "Immersioni vicino a Chia, Pula, Teulada & Capoterra",
    "subtitle": "I migliori siti subacquei del Sulcis-Iglesiente a portata di barca.",
    "cta": "Prenota su WhatsApp",
    "paragraphs": [
        "Il Sud Sardegna offre alcuni dei siti di immersione più spettacolari del Mediterraneo. Dalla Baia di Chia, con i suoi fondali sabbiosi ideali per i principianti, alle Secche di Pula, dove i sub esperti possono ammirare branchi di barracuda e gorgonie, ogni immersione è un'avventura diversa. La costa tra Chia, Pula, Teulada e Capoterra è un susseguirsi di calette, grotte e secche sommerse che conservano tesori naturali e archeologici.",
        "A Teulada, le grotte sottomarine offrono scenari da film: gallerie, camini di luce e ambienti criptici dove la fauna trova rifugio. I fondali antistanti Nora conservano reperti archeologici risalenti all'epoca romana e punica, rendendo ogni immersione anche un viaggio nella storia.",
        "Organizziamo immersioni guidate per sub certificati di ogni livello, dalla prima Open Water fino ai brevetti avanzati. I piccoli gruppi garantiscono sicurezza e attenzione personalizzata. Contattaci per pianificare il tuo itinerario di diving nel Sud Sardegna."
    ]
}

divingNearChia_en = {
    "metaTitle": "Diving near Chia, Pula, Teulada & Capoterra — Diving Chia",
    "metaDescription": "Scuba diving around Chia, Pula, Teulada and Capoterra. The best sites in South Sardinia.",
    "goldLabel": "South Sardinia",
    "title": "Diving near Chia, Pula, Teulada & Capoterra",
    "subtitle": "The best dive sites of the Sulcis-Iglesiente within boat reach.",
    "cta": "Book on WhatsApp",
    "paragraphs": [
        "South Sardinia offers some of the most spectacular dive sites in the Mediterranean. From Chia Bay, with its sandy seabeds ideal for beginners, to the Pula Shoals, where experienced divers can admire schools of barracuda and gorgonians, every dive is a different adventure. The coast between Chia, Pula, Teulada and Capoterra is a succession of coves, caves and submerged shallows that preserve natural and archaeological treasures.",
        "In Teulada, the underwater caves offer cinematic scenery: galleries, light shafts and cryptic environments where marine life finds refuge. The seabeds off Nora preserve archaeological finds dating back to Roman and Punic times, making every dive also a journey through history.",
        "We organise guided dives for certified divers of every level, from first Open Water to advanced certifications. Small groups guarantee safety and personalised attention. Contact us to plan your diving itinerary in South Sardinia."
    ]
}

divingNearChia_de = {
    "metaTitle": "Tauchen in der Nähe von Chia, Pula, Teulada & Capoterra — Diving Chia",
    "metaDescription": "Tauchen in der Umgebung von Chia, Pula, Teulada und Capoterra. Die besten Tauchplätze in Südsardinien.",
    "goldLabel": "Südsardinien",
    "title": "Tauchen in der Nähe von Chia, Pula, Teulada & Capoterra",
    "subtitle": "Die besten Tauchplätze des Sulcis-Iglesiente vom Boot aus erreichbar.",
    "cta": "Auf WhatsApp buchen",
    "paragraphs": [
        "Südsardinien bietet einige der spektakulärsten Tauchplätze des Mittelmeers. Von der Bucht von Chia mit ihren sandigen Meeresböden, ideal für Anfänger, bis zu den Untiefen von Pula, wo erfahrene Taucher Schwärme von Barrakudas und Gorgonien bewundern können – jeder Tauchgang ist ein anderes Abenteuer. Die Küste zwischen Chia, Pula, Teulada und Capoterra ist eine Abfolge von Buchten, Höhlen und versunkenen Untiefen, die natürliche und archäologische Schätze bewahren.",
        "In Teulada bieten die Unterwasserhöhlen kinoreife Szenarien: Galerien, Lichtschächte und geheimnisvolle Umgebungen, in denen die Meeresfauna Zuflucht findet. Die Meeresböden vor Nora bewahren archäologische Funde aus römischer und punischer Zeit, die jeden Tauchgang auch zu einer Zeitreise machen.",
        "Wir organisieren geführte Tauchgänge für zertifizierte Taucher jedes Levels, vom ersten Open Water bis zu fortgeschrittenen Brevets. Kleine Gruppen garantieren Sicherheit und persönliche Betreuung. Kontaktieren Sie uns, um Ihren Tauchurlaub in Südsardinien zu planen."
    ]
}

# ===== DIVING TEULADA =====
divingTeulada_it = {
    "metaTitle": "Immersioni a Teulada — Diving Chia | Sud Sardegna",
    "metaDescription": "Immersioni subacquee a Teulada, tra grotte marine e fondali spettacolari. Il meglio del Sud Sardegna con Diving Chia.",
    "goldLabel": "Teulada",
    "title": "Immersioni a Teulada",
    "subtitle": "Grotte marine, fondali verticali e avventure subacquee indimenticabili.",
    "cta": "Prenota su WhatsApp",
    "paragraphs": [
        "Teulada è una delle località subacquee più affascinanti della Sardegna. Situata nell'estremo sud dell'isola, la sua costa frastagliata nasconde grotte sottomarine, corridoi rocciosi e pareti verticali che scendono nel blu profondo. Le Grotte di Teulada rappresentano il sito più celebre: una serie di cavità naturali che si sviluppano tra i 15 e i 30 metri di profondità, con camini di luce che creano atmosfere surreali.",
        "La fauna marina di Teulada è ricchissima: grosse cernie, murene, gronchi, astici e, con un po' di fortuna, avvistamenti di tartarughe marine e delfini. Le correnti marine portano nutrienti che alimentano una biodiversità straordinaria, con gorgonie rosse e parazoanthus che colorano i fondali.",
        "Le immersioni a Teulada sono consigliate a sub con esperienza intermedia o avanzata, a causa delle profondità e delle condizioni marine che possono variare rapidamente. I nostri istruttori conoscono ogni anfratto e ti guideranno in sicurezza attraverso questi scenari da sogno. Prenota la tua immersione a Teulada con Diving Chia."
    ]
}

divingTeulada_en = {
    "metaTitle": "Diving in Teulada — Diving Chia | South Sardinia",
    "metaDescription": "Scuba diving in Teulada, among sea caves and spectacular seabeds. The best of South Sardinia with Diving Chia.",
    "goldLabel": "Teulada",
    "title": "Diving in Teulada",
    "subtitle": "Sea caves, vertical drop-offs and unforgettable underwater adventures.",
    "cta": "Book on WhatsApp",
    "paragraphs": [
        "Teulada is one of the most fascinating dive locations in Sardinia. Situated at the extreme south of the island, its jagged coastline hides underwater caves, rocky corridors and vertical walls that drop into the deep blue. The Teulada Caves are the most famous site: a series of natural cavities developing between 15 and 30 metres depth, with light shafts creating surreal atmospheres.",
        "The marine fauna of Teulada is incredibly rich: large groupers, moray eels, scorpionfish, lobsters and, with a bit of luck, sightings of sea turtles and dolphins. Marine currents bring nutrients that fuel extraordinary biodiversity, with red gorgonians and parazoanthus colouring the seabeds.",
        "Dives in Teulada are recommended for divers with intermediate or advanced experience, due to the depths and marine conditions that can change rapidly. Our instructors know every nook and will safely guide you through these dreamlike scenarios. Book your dive in Teulada with Diving Chia."
    ]
}

divingTeulada_de = {
    "metaTitle": "Tauchen in Teulada — Diving Chia | Südsardinien",
    "metaDescription": "Tauchen in Teulada, zwischen Meereshöhlen und spektakulären Meeresböden. Das Beste von Südsardinien mit Diving Chia.",
    "goldLabel": "Teulada",
    "title": "Tauchen in Teulada",
    "subtitle": "Meereshöhlen, steile Wände und unvergessliche Unterwasserabenteuer.",
    "cta": "Auf WhatsApp buchen",
    "paragraphs": [
        "Teulada ist einer der faszinierendsten Tauchorte Sardiniens. Am äußersten Süden der Insel gelegen, birgt seine zerklüftete Küste Unterwasserhöhlen, Felskorridore und senkrechte Wände, die in das tiefe Blau abfallen. Die Höhlen von Teulada sind der berühmteste Spot: eine Reihe natürlicher Kavitäten zwischen 15 und 30 Metern Tiefe, mit Lichtschächten, die surreale Atmosphären schaffen.",
        "Die Meeresfauna von Teulada ist unglaublich reichhaltig: große Zackenbarsche, Muränen, Skorpionsfische, Hummer und mit etwas Glück Sichtungen von Meeresschildkröten und Delfinen. Meeresströmungen bringen Nährstoffe, die eine außergewöhnliche Artenvielfalt ermöglichen, mit roten Gorgonien und Parazoanthus, die die Meeresböden färben.",
        "Tauchgänge in Teulada werden für Taucher mit mittlerer oder fortgeschrittener Erfahrung empfohlen, aufgrund der Tiefen und sich schnell ändernden Meeresbedingungen. Unsere Instruktoren kennen jede Ecke und führen Sie sicher durch diese traumhaften Szenarien. Buchen Sie Ihren Tauchgang in Teulada mit Diving Chia."
    ]
}

# ===== FAQ =====
faq_it = {
    "metaTitle": "Domande Frequenti — Diving Chia",
    "metaDescription": "Trova le risposte alle domande più frequenti sulle nostre esperienze subacquee a Chia, Sud Sardegna.",
    "goldLabel": "FAQ",
    "title": "Domande Frequenti",
    "subtitle": "Tutto quello che devi sapere prima di tuffarti.",
    "items": [
        {"q": "Serve la certificazione per partecipare?", "a": "No, per la Prima Immersione (Try Scuba) non serve alcuna certificazione né esperienza precedente. Il nostro istruttore sarà sempre al tuo fianco durante tutta l'esperienza."},
        {"q": "I principianti possono partecipare?", "a": "Sì, assolutamente. Le nostre attività sono pensate per accogliere principianti di ogni età. Offriamo esperienze adatte a chi non ha mai messo la testa sott'acqua."},
        {"q": "Cosa succede se il mare è mosso?", "a": "Se le condizioni marine non sono sicure, rinviamo l'attività alla prima data disponibile oppure offriamo il rimborso completo. La tua sicurezza viene prima di tutto."},
        {"q": "Cosa devo portare con me?", "a": "Porta solo costume da bagno, asciugamano e protezione solare. Noi forniamo tutta l'attrezzatura necessaria, inclusa quella subacquea o da snorkeling."},
        {"q": "L'attrezzatura è inclusa?", "a": "Sì, tutta l'attrezzatura è inclusa in ogni nostra esperienza. Maschere, erogatori, mute, pinne e giubbotti sono forniti e controllati quotidianamente."},
        {"q": "Posso venire con i bambini?", "a": "Sì, i bambini sono i benvenuti a partire dai 6 anni per lo snorkeling e dai 10 anni per la prima immersione. Abbiamo attrezzature di taglia per i più piccoli."},
        {"q": "Posso fare snorkeling mentre altri fanno immersione?", "a": "Sì, organizziamo spesso gruppi misti in cui alcuni partecipanti fanno immersione guidata mentre altri esplorano la superficie con lo snorkeling."},
        {"q": "Quanto dura l'esperienza?", "a": "Le nostre esperienze durano generalmente dalle 2,5 alle 3 ore dall'imbarco allo sbarco, inclusi briefing, navigazione e attività in acqua."},
        {"q": "Da dove partiamo?", "a": "Tutte le nostre attività partono dal Porto di Chia. Ti invieremo le indicazioni precise al momento della prenotazione."},
        {"q": "Come posso prenotare?", "a": "La prenotazione è semplice e veloce: contattaci via WhatsApp al +39 338 858 5504 e ti risponderemo in pochi minuti con disponibilità e conferma."},
    ]
}

faq_en = {
    "metaTitle": "Frequently Asked Questions — Diving Chia",
    "metaDescription": "Find answers to the most common questions about our diving experiences in Chia, South Sardinia.",
    "goldLabel": "FAQ",
    "title": "Frequently Asked Questions",
    "subtitle": "Everything you need to know before you dive in.",
    "items": [
        {"q": "Do I need a certification to participate?", "a": "No, for the Try Scuba experience no certification or previous experience is required. Our instructor will be by your side throughout the entire experience."},
        {"q": "Can beginners participate?", "a": "Yes, absolutely. Our activities are designed to welcome beginners of all ages. We offer experiences suitable for those who have never put their head underwater."},
        {"q": "What happens if the sea is rough?", "a": "If sea conditions are not safe, we postpone the activity to the first available date or offer a full refund. Your safety comes first."},
        {"q": "What should I bring?", "a": "Just bring your swimsuit, towel and sun protection. We provide all necessary equipment, including diving or snorkeling gear."},
        {"q": "Is equipment included?", "a": "Yes, all equipment is included in every experience. Masks, regulators, wetsuits, fins and BCDs are provided and checked daily."},
        {"q": "Can I bring children?", "a": "Yes, children are welcome from 6 years old for snorkeling and from 10 years old for the first dive. We have sizes for the little ones."},
        {"q": "Can I snorkel while others dive?", "a": "Yes, we often organise mixed groups where some participants do guided dives while others explore the surface with snorkeling."},
        {"q": "How long does the experience last?", "a": "Our experiences generally last between 2.5 and 3 hours from boarding to disembarking, including briefing, navigation and time in the water."},
        {"q": "Where do we depart from?", "a": "All our activities depart from Chia Harbour. We will send you precise directions upon booking."},
        {"q": "How can I book?", "a": "Booking is simple and fast: contact us via WhatsApp at +39 338 858 5504 and we will reply within minutes with availability and confirmation."},
    ]
}

faq_de = {
    "metaTitle": "Häufig Gestellte Fragen — Diving Chia",
    "metaDescription": "Finden Sie Antworten auf die häufigsten Fragen zu unseren Tauerlebnissen in Chia, Südsardinien.",
    "goldLabel": "FAQ",
    "title": "Häufig Gestellte Fragen",
    "subtitle": "Alles, was Sie wissen müssen, bevor Sie eintauchen.",
    "items": [
        {"q": "Brauche ich eine Zertifizierung?", "a": "Nein, für das Schnuppertauchen (Try Scuba) ist keine Zertifizierung oder Vorerfahrung erforderlich. Unser Instruktor begleitet Sie während des gesamten Erlebnisses."},
        {"q": "Können Anfänger teilnehmen?", "a": "Ja, absolut. Unsere Aktivitäten sind darauf ausgelegt, Anfänger jeden Alters willkommen zu heißen. Wir bieten Erlebnisse für diejenigen an, die noch nie unter Wasser waren."},
        {"q": "Was passiert bei unruhigem Meer?", "a": "Wenn die Meeresbedingungen nicht sicher sind, verschieben wir die Aktivität auf den nächsten verfügbaren Termin oder bieten eine volle Rückerstattung an. Ihre Sicherheit steht an erster Stelle."},
        {"q": "Was sollte ich mitbringen?", "a": "Bringen Sie einfach Badebekleidung, Handtuch und Sonnenschutz mit. Wir stellen die gesamte notwendige Ausrüstung, einschließlich Tauch- und Schnorchelausrüstung, zur Verfügung."},
        {"q": "Ist die Ausrüstung inklusive?", "a": "Ja, die gesamte Ausrüstung ist in jedem Erlebnis inklusive. Masken, Regulatoren, Neoprenanzüge, Flossen und Tarierjacken werden bereitgestellt und täglich geprüft."},
        {"q": "Kann ich Kinder mitbringen?", "a": "Ja, Kinder sind ab 6 Jahren zum Schnorcheln und ab 10 Jahren zum ersten Tauchgang willkommen. Wir haben Ausrüstung in Kindergrößen."},
        {"q": "Kann ich schnorcheln, während andere tauchen?", "a": "Ja, wir organisieren oft gemischte Gruppen, in denen einige Teilnehmer geführte Tauchgänge machen, während andere die Oberfläche beim Schnorcheln erkunden."},
        {"q": "Wie lange dauert das Erlebnis?", "a": "Unsere Erlebnisse dauern in der Regel zwischen 2,5 und 3 Stunden vom Einstieg bis zum Ausstieg, einschließlich Briefing, Navigation und Zeit im Wasser."},
        {"q": "Von wo starten wir?", "a": "Alle unsere Aktivitäten starten vom Hafen von Chia. Wir senden Ihnen bei der Buchung genaue Anweisungen."},
        {"q": "Wie kann ich buchen?", "a": "Die Buchung ist einfach und schnell: Kontaktieren Sie uns per WhatsApp unter +39 338 858 5504. Wir antworten innerhalb weniger Minuten mit Verfügbarkeit und Bestätigung."},
    ]
}

# ===== GALLERY (add page-specific keys to existing namespace) =====
gallery_add_it = {
    "heroLabel": "Diving Chia",
    "discoverMore": "Scopri di più",
    "contactWhatsApp": "Contattaci su WhatsApp",
    "bookingTitle": "Pronto a vivere queste esperienze?",
    "bookingSubtitle": "Contattaci su WhatsApp e costruiamo insieme la tua avventura nel mare di Sardegna.",
    "bookingCta": "Prenota su WhatsApp"
}
gallery_add_en = {
    "heroLabel": "Diving Chia",
    "discoverMore": "Discover more",
    "contactWhatsApp": "Contact us on WhatsApp",
    "bookingTitle": "Ready to experience these adventures?",
    "bookingSubtitle": "Contact us on WhatsApp and let's build your Sardinian sea adventure together.",
    "bookingCta": "Book on WhatsApp"
}
gallery_add_de = {
    "heroLabel": "Diving Chia",
    "discoverMore": "Mehr erfahren",
    "contactWhatsApp": "Kontaktieren Sie uns auf WhatsApp",
    "bookingTitle": "Bereit, diese Erlebnisse zu erleben?",
    "bookingSubtitle": "Kontaktieren Sie uns auf WhatsApp und gestalten wir gemeinsam Ihr Abenteuer im Meer Sardiniens.",
    "bookingCta": "Auf WhatsApp buchen"
}

# ===== GUIDED DIVES =====
guidedDives_it = {
    "metaTitle": "Immersioni Guidate Chia — Subacquea Sud Sardegna",
    "metaDescription": "Immersioni guidate per sub certificati a Chia e Teulada. I migliori siti del Sud Sardegna con guide esperte.",
    "goldLabelHero": "Sub Certificati",
    "title": "Immersioni Guidate",
    "subtitle": "Esplora i migliori siti subacquei del Sud Sardegna con guide esperte e sicurezza al primo posto.",
    "cta": "Prenota su WhatsApp",
    "goldLabelSites": "I Nostri Siti",
    "sitesTitle": "Dove Portiamo i Sub",
    "sites": [
        {"name": "Baia di Chia", "depth": "5 — 18m", "level": "Tutti i Livelli",
         "desc": "Una baia protetta con fondali sabbiosi e posidonia. Ideale per chi cerca un'immersione rilassante tra cernie, polpi e scorfani. La visibilità eccezionale rende ogni immersione un'esperienza visivamente straordinaria."},
        {"name": "Secca di Pula", "depth": "12 — 25m", "level": "Open Water+",
         "desc": "Una secca sommersa ricca di vita marina. Incontri frequenti con branchi di barracuda, murene e gorgonie. Correnti moderate e fondali rocciosi che regalano emozioni ad ogni discesa."},
        {"name": "Grotte di Teulada", "depth": "15 — 30m", "level": "Avanzato",
         "desc": "Grotte sottomarine spettacolari con gallerie, camini e ambienti criptici. La luce filtra creando giochi d'ombra indimenticabili. Per sub esperti che cercano l'avventura autentica."},
        {"name": "Nora Archeologico", "depth": "8 — 20m", "level": "Tutti i Livelli",
         "desc": "Immergiti nella storia con i resti dell'antica città di Nora. Fondali che custodiscono reperti romani e punici, circondati da una flora e fauna marina rigogliosa."},
    ],
    "requirementsTitle": "Requisiti",
    "requirementsSubtitle": "Requisiti per sub certificati",
    "requirements": [
        "Certificazione Open Water (o equivalente)",
        "Immersione logata entro 12 mesi",
        "Attrezzatura personale o noleggio incluso",
        "Briefing obbligatorio pre-immersione",
        "Max 6 sub per guida",
    ],
    "priceTitle": "Prezzi",
    "priceAmount": "€65",
    "pricePer": "per immersione",
    "priceDescription": "Prezzo per persona per singola immersione guidata con equipaggiamento incluso. Sconti per pacchetti multipli.",
    "priceCta": "Prenota su WhatsApp"
}

guidedDives_en = {
    "metaTitle": "Guided Dives Chia — Scuba Diving South Sardinia",
    "metaDescription": "Guided dives for certified divers in Chia and Teulada. The best sites in South Sardinia with expert guides.",
    "goldLabelHero": "Certified Divers",
    "title": "Guided Dives",
    "subtitle": "Explore the best dive sites in South Sardinia with expert guides and safety as our top priority.",
    "cta": "Book on WhatsApp",
    "goldLabelSites": "Our Sites",
    "sitesTitle": "Where We Take Divers",
    "sites": [
        {"name": "Chia Bay", "depth": "5 — 18m", "level": "All Levels",
         "desc": "A protected bay with sandy seabeds and posidonia. Ideal for those seeking a relaxing dive among groupers, octopuses and scorpionfish. Exceptional visibility makes every dive a visually extraordinary experience."},
        {"name": "Pula Shoal", "depth": "12 — 25m", "level": "Open Water+",
         "desc": "A submerged shoal rich in marine life. Frequent encounters with schools of barracuda, moray eels and gorgonians. Moderate currents and rocky seabeds that deliver excitement on every descent."},
        {"name": "Teulada Caves", "depth": "15 — 30m", "level": "Advanced",
         "desc": "Spectacular underwater caves with galleries, shafts and cryptic environments. Filtering light creates unforgettable shadow play. For expert divers seeking authentic adventure."},
        {"name": "Nora Archaeological", "depth": "8 — 20m", "level": "All Levels",
         "desc": "Immerse yourself in history with the remains of the ancient city of Nora. Seabeds that preserve Roman and Punic artefacts, surrounded by lush marine flora and fauna."},
    ],
    "requirementsTitle": "Requirements",
    "requirementsSubtitle": "Requirements for certified divers",
    "requirements": [
        "Open Water certification (or equivalent)",
        "Logged dive within 12 months",
        "Personal equipment or rental included",
        "Mandatory pre-dive briefing",
        "Max 6 divers per guide",
    ],
    "priceTitle": "Prices",
    "priceAmount": "€65",
    "pricePer": "per dive",
    "priceDescription": "Price per person for a single guided dive with equipment included. Discounts for multi-dive packages.",
    "priceCta": "Book on WhatsApp"
}

guidedDives_de = {
    "metaTitle": "Geführte Tauchgänge Chia — Tauchen Südsardinien",
    "metaDescription": "Geführte Tauchgänge für zertifizierte Taucher in Chia und Teulada. Die besten Tauchplätze in Südsardinien mit erfahrenen Guides.",
    "goldLabelHero": "Zertifizierte Taucher",
    "title": "Geführte Tauchgänge",
    "subtitle": "Erkunden Sie die besten Tauchplätze in Südsardinien mit erfahrenen Guides und höchster Sicherheit.",
    "cta": "Auf WhatsApp buchen",
    "goldLabelSites": "Unsere Plätze",
    "sitesTitle": "Wohin wir Taucher bringen",
    "sites": [
        {"name": "Bucht von Chia", "depth": "5 — 18m", "level": "Alle Level",
         "desc": "Eine geschützte Bucht mit sandigen Meeresböden und Posidonia. Ideal für diejenigen, die einen entspannten Tauchgang zwischen Zackenbarschen, Kraken und Skorpionfischen suchen. Die außergewöhnliche Sicht macht jeden Tauchgang zu einem visuell extraordinären Erlebnis."},
        {"name": "Untiefe von Pula", "depth": "12 — 25m", "level": "Open Water+",
         "desc": "Eine versunkene Untiefe, reich an Meeresleben. Häufige Begegnungen mit Schwärmen von Barrakudas, Muränen und Gorgonien. Mäßige Strömungen und felsige Meeresböden, die bei jedem Abstieg Nervenkitzel bieten."},
        {"name": "Höhlen von Teulada", "depth": "15 — 30m", "level": "Fortgeschritten",
         "desc": "Spektakuläre Unterwasserhöhlen mit Galerien, Schächten und geheimnisvollen Umgebungen. Das einfallende Licht schafft unvergessliche Schattenspiele. Für erfahrene Taucher, die echtes Abenteuer suchen."},
        {"name": "Nora Archäologisch", "depth": "8 — 20m", "level": "Alle Level",
         "desc": "Tauchen Sie ein in die Geschichte mit den Überresten der antiken Stadt Nora. Meeresböden, die römische und punische Artefakte bewahren, umgeben von üppiger Meeresflora und -fauna."},
    ],
    "requirementsTitle": "Voraussetzungen",
    "requirementsSubtitle": "Voraussetzungen für zertifizierte Taucher",
    "requirements": [
        "Open Water Zertifizierung (oder gleichwertig)",
        "Protokollierter Tauchgang innerhalb von 12 Monaten",
        "Eigene Ausrüstung oder Verleih inklusive",
        "Obligatorisches Briefing vor dem Tauchgang",
        "Max. 6 Taucher pro Guide",
    ],
    "priceTitle": "Preise",
    "priceAmount": "€65",
    "pricePer": "pro Tauchgang",
    "priceDescription": "Preis pro Person für einen einzelnen geführten Tauchgang mit Ausrüstung inklusive. Rabatte für Mehrfachtauchpakete.",
    "priceCta": "Auf WhatsApp buchen"
}

# ===== PRICES =====
prices_it = {
    "metaTitle": "Prezzi — Diving Chia | Esperienze e Pacchetti",
    "metaDescription": "Listino prezzi trasparente per immersioni, snorkeling, corsi e tour privati a Chia, Sud Sardegna.",
    "goldLabelHero": "Prezzi Trasparenti",
    "title": "Prezzi e Pacchetti",
    "subtitle": "Prezzi chiari, nessuna sorpresa. Scegli l'esperienza che fa per te.",
    "cta": "Prenota su WhatsApp",
    "goldLabelExperiences": "Le Nostre Esperienze",
    "experiencesTitle": "Listino Prezzi",
    "experiences": [
        {"name": "Prima Immersione (Try Scuba)", "price": "da €85", "per": "a persona"},
        {"name": "Immersione Guidata", "price": "da €65", "per": "per immersione"},
        {"name": "Snorkeling in Barca", "price": "da €55", "per": "a persona"},
        {"name": "Tour Privato mezza giornata", "price": "Su richiesta", "per": ""},
        {"name": "Tour Privato giornata intera", "price": "Su richiesta", "per": ""},
        {"name": "Esperienza Tramonto", "price": "da €75", "per": "a persona"},
        {"name": "Corso Open Water", "price": "€420", "per": "per corso"},
        {"name": "Corso Advanced", "price": "€320", "per": "per corso"},
    ],
    "goldLabelPackages": "Risparmia",
    "packagesTitle": "Pacchetti Speciali",
    "packages": [
        {"name": "Pacchetto 2 Immersioni", "desc": "Due immersioni guidate in un giorno con equipaggiamento incluso.", "price": "€115"},
        {"name": "Pacchetto Famiglia Snorkeling", "desc": "Tour di snorkeling per 4 persone con attrezzatura e rinfresco inclusi.", "price": "€195"},
        {"name": "Weekend Sub", "desc": "2 giorni di immersioni guidate, 4 immersioni totali con equipaggiamento.", "price": "€220"},
        {"name": "Full Experience", "desc": "Prima immersione + snorkeling + esperienza tramonto. 3 giorni di attività.", "price": "Su richiesta"},
    ],
    "cancellation": "Cancellazione gratuita fino a 48 ore prima dell'attività. Oltre tale termine verrà addebitato il 50% dell'importo totale. In caso di condizioni meteorologiche avverse, offriamo il rimborso completo o il riprogrammamento senza penali."
}

prices_en = {
    "metaTitle": "Prices — Diving Chia | Experiences & Packages",
    "metaDescription": "Transparent pricing for dives, snorkeling, courses and private tours in Chia, South Sardinia.",
    "goldLabelHero": "Transparent Pricing",
    "title": "Prices & Packages",
    "subtitle": "Clear prices, no surprises. Choose the experience that suits you.",
    "cta": "Book on WhatsApp",
    "goldLabelExperiences": "Our Experiences",
    "experiencesTitle": "Price List",
    "experiences": [
        {"name": "Try Scuba (First Dive)", "price": "from €85", "per": "per person"},
        {"name": "Guided Dive", "price": "from €65", "per": "per dive"},
        {"name": "Boat Snorkeling", "price": "from €55", "per": "per person"},
        {"name": "Private Tour half day", "price": "On request", "per": ""},
        {"name": "Private Tour full day", "price": "On request", "per": ""},
        {"name": "Sunset Experience", "price": "from €75", "per": "per person"},
        {"name": "Open Water Course", "price": "€420", "per": "per course"},
        {"name": "Advanced Course", "price": "€320", "per": "per course"},
    ],
    "goldLabelPackages": "Save",
    "packagesTitle": "Special Packages",
    "packages": [
        {"name": "2-Dive Package", "desc": "Two guided dives in one day with equipment included.", "price": "€115"},
        {"name": "Family Snorkeling Package", "desc": "Snorkeling tour for 4 people with equipment and refreshments included.", "price": "€195"},
        {"name": "Diving Weekend", "desc": "2 days of guided dives, 4 dives total with equipment.", "price": "€220"},
        {"name": "Full Experience", "desc": "First dive + snorkeling + sunset experience. 3 days of activities.", "price": "On request"},
    ],
    "cancellation": "Free cancellation up to 48 hours before the activity. Beyond this deadline, 50% of the total amount will be charged. In case of adverse weather conditions, we offer a full refund or rescheduling without penalties."
}

prices_de = {
    "metaTitle": "Preise — Diving Chia | Erlebnisse & Pakete",
    "metaDescription": "Transparente Preise für Tauchgänge, Schnorcheln, Kurse und private Touren in Chia, Südsardinien.",
    "goldLabelHero": "Transparente Preise",
    "title": "Preise & Pakete",
    "subtitle": "Klare Preise, keine Überraschungen. Wählen Sie das Erlebnis, das zu Ihnen passt.",
    "cta": "Auf WhatsApp buchen",
    "goldLabelExperiences": "Unsere Erlebnisse",
    "experiencesTitle": "Preisliste",
    "experiences": [
        {"name": "Schnuppertauchen (Try Scuba)", "price": "ab €85", "per": "pro Person"},
        {"name": "Geführter Tauchgang", "price": "ab €65", "per": "pro Tauchgang"},
        {"name": "Schnorcheln per Boot", "price": "ab €55", "per": "pro Person"},
        {"name": "Private Tour halber Tag", "price": "Auf Anfrage", "per": ""},
        {"name": "Private Tour ganzer Tag", "price": "Auf Anfrage", "per": ""},
        {"name": "Sonnenuntergangserlebnis", "price": "ab €75", "per": "pro Person"},
        {"name": "Open Water Kurs", "price": "€420", "per": "pro Kurs"},
        {"name": "Advanced Kurs", "price": "€320", "per": "pro Kurs"},
    ],
    "goldLabelPackages": "Sparen",
    "packagesTitle": "Sonderpakete",
    "packages": [
        {"name": "2-Tauchgang-Paket", "desc": "Zwei geführte Tauchgänge an einem Tag mit Ausrüstung inklusive.", "price": "€115"},
        {"name": "Familien-Schnorchelpaket", "desc": "Schnorcheltour für 4 Personen mit Ausrüstung und Erfrischungen inklusive.", "price": "€195"},
        {"name": "Tauch-Wochenende", "desc": "2 Tage geführte Tauchgänge, insgesamt 4 Tauchgänge mit Ausrüstung.", "price": "€220"},
        {"name": "Full Experience", "desc": "Schnuppertauchen + Schnorcheln + Sonnenuntergangserlebnis. 3 Tage Aktivitäten.", "price": "Auf Anfrage"},
    ],
    "cancellation": "Kostenlose Stornierung bis zu 48 Stunden vor der Aktivität. Nach dieser Frist werden 50% des Gesamtbetrags berechnet. Bei ungünstigen Wetterbedingungen bieten wir eine volle Rückerstattung oder eine kostenlose Umplanung an."
}

# ===== PRIVATE BOAT TOURS CHIA =====
privateBoatToursChia_it = {
    "metaTitle": "Tour Privati in Barca a Chia — Diving Chia | Sud Sardegna",
    "metaDescription": "Tour privati in barca personalizzati a Chia. Per coppie, famiglie e gruppi di amici.",
    "goldLabel": "Esclusivo",
    "title": "Tour Privati in Barca a Chia",
    "subtitle": "La tua barca privata, il tuo itinerario, la tua giornata perfetta.",
    "cta": "Richiedi Preventivo",
    "paragraphs": [
        "Un tour privato in barca a Chia è l'esperienza definitiva per chi cerca esclusività e personalizzazione. La barca è interamente a tua disposizione, con un equipaggio esperto che segue i tuoi desideri: soste in calette nascoste per nuotare, snorkeling in punti selezionati, pranzo in spiaggia o semplicemente relax al sole con la brezza del mare.",
        "Organizziamo tour privati per ogni esigenza: romantiche crociere per coppie al tramonto, giornate di avventura per famiglie con bambini, uscite tra amici con snorkeling e aperitivo. Possiamo combinare immersioni per sub certificati con snorkeling per chi non ha il brevetto, in modo che nessuno debba rinunciare al divertimento.",
        "Le nostre barche sono attrezzate con ogni comfort: doccia dolce, ombreggio, scala per l'ingresso in acqua e tutta l'attrezzatura per lo snorkeling. Contattaci per progettare insieme il tuo itinerario ideale. Ogni tour privato è unico, come i nostri ospiti."
    ]
}

privateBoatToursChia_en = {
    "metaTitle": "Private Boat Tours in Chia — Diving Chia | South Sardinia",
    "metaDescription": "Customised private boat tours in Chia. For couples, families and groups of friends.",
    "goldLabel": "Exclusive",
    "title": "Private Boat Tours in Chia",
    "subtitle": "Your private boat, your itinerary, your perfect day.",
    "cta": "Request a Quote",
    "paragraphs": [
        "A private boat tour in Chia is the ultimate experience for those seeking exclusivity and personalisation. The boat is entirely at your disposal, with an experienced crew that follows your wishes: stops in hidden coves for swimming, snorkeling at selected spots, lunch on the beach or simply relaxing in the sun with the sea breeze.",
        "We organise private tours for every need: romantic sunset cruises for couples, adventure days for families with children, outings with friends featuring snorkeling and aperitivo. We can combine dives for certified divers with snorkeling for those without a license, so no one has to miss out on the fun.",
        "Our boats are equipped with every comfort: fresh water shower, shade, ladder for water entry and all snorkeling equipment. Contact us to design your ideal itinerary together. Every private tour is unique, just like our guests."
    ]
}

privateBoatToursChia_de = {
    "metaTitle": "Private Bootstouren in Chia — Diving Chia | Südsardinien",
    "metaDescription": "Maßgeschneiderte private Bootstouren in Chia. Für Paare, Familien und Freundesgruppen.",
    "goldLabel": "Exklusiv",
    "title": "Private Bootstouren in Chia",
    "subtitle": "Ihr privates Boot, Ihre Route, Ihr perfekter Tag.",
    "cta": "Angebot anfordern",
    "paragraphs": [
        "Eine private Bootstour in Chia ist das ultimative Erlebnis für diejenigen, die Exklusivität und Individualität suchen. Das Boot steht Ihnen ganz zur Verfügung, mit einer erfahrenen Crew, die Ihren Wünschen folgt: Stopps in versteckten Buchten zum Schwimmen, Schnorcheln an ausgewählten Stellen, Mittagessen am Strand oder einfach Entspannen in der Sonne mit der Meeresbrise.",
        "Wir organisieren private Touren für jeden Bedarf: romantische Sonnenuntergangskreuzfahrten für Paare, Abenteuertage für Familien mit Kindern, Ausflüge mit Freunden inklusive Schnorcheln und Aperitivo. Wir können Tauchgänge für zertifizierte Taucher mit Schnorcheln für diejenigen ohne Brevet kombinieren, damit niemand den Spaß verpasst.",
        "Unsere Boote sind mit jedem Komfort ausgestattet: Süßwasserdusche, Sonnenschutz, Badeleiter und komplette Schnorchelausrüstung. Kontaktieren Sie uns, um gemeinsam Ihre ideale Route zu planen. Jede private Tour ist einzigartig, genau wie unsere Gäste."
    ]
}

# ===== PRIVATE TOURS =====
privateTours_it = {
    "metaTitle": "Esperienze Private — Tour in Barca Personalizzati Chia",
    "metaDescription": "Tour privati in barca personalizzati a Chia, Sud Sardegna. Per coppie, famiglie e gruppi di amici.",
    "goldLabelHero": "Esclusivo",
    "title": "La Tua Esperienza, Le Tue Regole",
    "subtitle": "Tour privati in barca personalizzati per coppie, famiglie e gruppi.",
    "ctaHero": "Richiedi Preventivo",
    "goldLabelTypes": "Per Chi È",
    "typesTitle": "Un'Esperienza Su Misura",
    "tourTypes": [
        {"title": "Coppie", "subtitle": "Couples", "desc": "Un'esperienza intima e romantica in barca solo per voi due. Soste in calette nascoste, bagno in acque cristalline e momenti da ricordare per sempre. Perfetto per anniversari, proposte di matrimonio o semplicemente per celebrare il vostro amore."},
        {"title": "Famiglie", "subtitle": "Families", "desc": "Un'avventura su misura per grandi e piccini. Attività adatte a ogni età, snorkeling sicuro, giochi in spiaggia e tutta la flessibilità che una famiglia necessita. I bambini saranno entusiasti della vita marina e delle sorprese che il mare riserva."},
        {"title": "Gruppi di Amici", "subtitle": "Groups of Friends", "desc": "La vostra barca, le vostre regole. Un giorno di mare perfetto con gli amici, tra immersioni, snorkeling, relax e tanto divertimento. Possibilità di organizzare pranzi a bordo, aperitivi al tramonto e itinerari personalizzati."},
    ],
    "combinationsTitle": "Combinazioni Popolari",
    "combinationsSubtitle": "Combinazioni più richieste",
    "combinations": [
        "Snorkeling + Pranzo in spiaggia",
        "Immersione + Snorkeling per non sub",
        "Giro delle calette + Aperitivo al tramonto",
        "Giornata intera con soste multiple",
    ],
    "priceTitle": "Prezzo",
    "priceAmount": "Su Richiesta",
    "priceDescription": "Contattaci via WhatsApp per un preventivo personalizzato in base al numero di persone, alla durata e alle attività desiderate.",
    "priceCta": "Richiedi Preventivo"
}

privateTours_en = {
    "metaTitle": "Private Experiences — Custom Boat Tours Chia",
    "metaDescription": "Customised private boat tours in Chia, South Sardinia. For couples, families and groups of friends.",
    "goldLabelHero": "Exclusive",
    "title": "Your Experience, Your Rules",
    "subtitle": "Custom private boat tours for couples, families and groups.",
    "ctaHero": "Request a Quote",
    "goldLabelTypes": "For Whom",
    "typesTitle": "A Tailor-Made Experience",
    "tourTypes": [
        {"title": "Couples", "subtitle": "Couples", "desc": "An intimate and romantic boat experience just for the two of you. Stops in hidden coves, swimming in crystal-clear waters and moments to remember forever. Perfect for anniversaries, marriage proposals or simply celebrating your love."},
        {"title": "Families", "subtitle": "Families", "desc": "A tailor-made adventure for young and old. Activities for every age, safe snorkeling, beach games and all the flexibility a family needs. Children will be thrilled by the marine life and surprises the sea holds."},
        {"title": "Groups of Friends", "subtitle": "Groups of Friends", "desc": "Your boat, your rules. A perfect day at sea with friends, between dives, snorkeling, relaxation and lots of fun. Possibility to organise lunches on board, sunset aperitivos and customised itineraries."},
    ],
    "combinationsTitle": "Popular Combinations",
    "combinationsSubtitle": "Most requested combinations",
    "combinations": [
        "Snorkeling + Beach lunch",
        "Diving + Snorkeling for non-divers",
        "Coves tour + Sunset aperitivo",
        "Full day with multiple stops",
    ],
    "priceTitle": "Price",
    "priceAmount": "On Request",
    "priceDescription": "Contact us on WhatsApp for a personalised quote based on the number of people, duration and desired activities.",
    "priceCta": "Request a Quote"
}

privateTours_de = {
    "metaTitle": "Private Erlebnisse — Maßgeschneiderte Bootstouren Chia",
    "metaDescription": "Maßgeschneiderte private Bootstouren in Chia, Südsardinien. Für Paare, Familien und Freundesgruppen.",
    "goldLabelHero": "Exklusiv",
    "title": "Ihr Erlebnis, Ihre Regeln",
    "subtitle": "Maßgeschneiderte private Bootstouren für Paare, Familien und Gruppen.",
    "ctaHero": "Angebot anfordern",
    "goldLabelTypes": "Für Wen",
    "typesTitle": "Ein Maßgeschneidertes Erlebnis",
    "tourTypes": [
        {"title": "Paare", "subtitle": "Paare", "desc": "Ein intimes und romantisches Boots-erlebnis nur für Sie beide. Stopps in versteckten Buchten, Schwimmen in kristallklarem Wasser und Momente, die Sie nie vergessen werden. Perfekt für Jubiläen, Heiratsanträge oder einfach um Ihre Liebe zu feiern."},
        {"title": "Familien", "subtitle": "Familien", "desc": "Ein maßgeschneidertes Abenteuer für Groß und Klein. Aktivitäten für jedes Alter, sicheres Schnorcheln, Strandspiele und all die Flexibilität, die eine Familie braucht. Die Kinder werden begeistert sein vom Meeresleben und den Überraschungen des Meeres."},
        {"title": "Freundesgruppen", "subtitle": "Freundesgruppen", "desc": "Ihr Boot, Ihre Regeln. Ein perfekter Tag am Meer mit Freunden, zwischen Tauchen, Schnorcheln, Entspannung und viel Spaß. Möglichkeit, Lunch an Bord, Sonnenuntergang-Aperitivo und individuelle Routen zu organisieren."},
    ],
    "combinationsTitle": "Beliebte Kombinationen",
    "combinationsSubtitle": "Meistgewünschte Kombinationen",
    "combinations": [
        "Schnorcheln + Mittagessen am Strand",
        "Tauchen + Schnorcheln für Nicht-Taucher",
        "Buchten-Tour + Sonnenuntergang-Aperitivo",
        "Ganztägig mit mehreren Stopps",
    ],
    "priceTitle": "Preis",
    "priceAmount": "Auf Anfrage",
    "priceDescription": "Kontaktieren Sie uns per WhatsApp für ein individuelles Angebot basierend auf der Personenzahl, Dauer und gewünschten Aktivitäten.",
    "priceCta": "Angebot anfordern"
}

# ===== SAFETY =====
safety_it = {
    "metaTitle": "Sicurezza ed Equipaggiamento — Diving Chia",
    "metaDescription": "I nostri standard di sicurezza: istruttori certificati, attrezzatura premium e protocolli rigorosi a Chia dal 1996.",
    "goldLabelHero": "Il Nostro Impegno",
    "title": "Sicurezza ed Equipaggiamento",
    "subtitle": "La tua sicurezza è la nostra priorità assoluta. Ogni dettaglio è curato per garantirti un'esperienza serena.",
    "cta": "Prenota su WhatsApp",
    "goldLabelPillars": "I Nostri Pilastri",
    "pillarsTitle": "Standard di Sicurezza",
    "pillars": [
        {"title": "Istruttori Certificati", "desc": "Tutti i nostri istruttori sono certificati PADI, SSI o CMAS con anni di esperienza sulle coste sarde. Formazione continua e aggiornamenti periodici."},
        {"title": "Controlli Giornalieri", "desc": "Ogni giorno controlliamo attentamente tutta l'attrezzatura: bombole, erogatori, giubbotti e tutto il materiale di sicurezza. Manutenzione preventiva senza compromessi."},
        {"title": "Piccoli Gruppi", "desc": "Massimo 6 sub per guida. Questo ci permette di monitorare ogni partecipante con attenzione costante e rispondere immediatamente a ogni necessità."},
        {"title": "Briefing Accurati", "desc": "Prima di ogni immersione o attività, un briefing dettagliato copre il sito, le procedure, i segnali di comunicazione e i protocolli di sicurezza."},
        {"title": "Protocolli d'Emergenza", "desc": "Collaboriamo con DAN (Divers Alert Network) e abbiamo protocolli d'emergenza testati. Cassa di pronto soccorso e ossigeno terapeutico sempre a bordo."},
        {"title": "Monitoraggio Meteo", "desc": "Controlliamo costantemente le condizioni meteorologiche e marine. Se il mare non è sicuro, rinviamo o rimborsiamo. Nessun compromesso sulla sicurezza."},
    ],
    "equipmentTitle": "Attrezzatura Premium",
    "equipmentSubtitle": "Attrezzatura di alta qualità, manutenuta meticolosamente",
    "equipment": [
        "Bombole in alluminio e acciaio, controllate annualmente",
        "Erogatori professionali con octopus di riserva",
        "Giubbotti compensatori (BCD) di ultima generazione",
        "Computer subacquei per ogni partecipante",
        "Mute in neoprene di qualità",
        "Ossigeno terapeutico a bordo",
        "Cassa di pronto soccorso completa",
        "Radio VHF marina per comunicazioni",
    ],
    "quote": "La tua sicurezza è la nostra priorità dal 1996.",
    "quoteSubtitle": "Your safety has been our priority since 1996."
}

safety_en = {
    "metaTitle": "Safety & Equipment — Diving Chia",
    "metaDescription": "Our safety standards: certified instructors, premium equipment and rigorous protocols in Chia since 1996.",
    "goldLabelHero": "Our Commitment",
    "title": "Safety & Equipment",
    "subtitle": "Your safety is our absolute priority. Every detail is curated to guarantee you a serene experience.",
    "cta": "Book on WhatsApp",
    "goldLabelPillars": "Our Pillars",
    "pillarsTitle": "Safety Standards",
    "pillars": [
        {"title": "Certified Instructors", "desc": "All our instructors are PADI, SSI or CMAS certified with years of experience on the Sardinian coasts. Continuous training and periodic updates."},
        {"title": "Daily Checks", "desc": "Every day we carefully check all equipment: tanks, regulators, BCDs and all safety material. Preventive maintenance without compromise."},
        {"title": "Small Groups", "desc": "Maximum 6 divers per guide. This allows us to monitor every participant with constant attention and respond immediately to every need."},
        {"title": "Detailed Briefings", "desc": "Before every dive or activity, a detailed briefing covers the site, procedures, communication signals and safety protocols."},
        {"title": "Emergency Protocols", "desc": "We collaborate with DAN (Divers Alert Network) and have tested emergency protocols. First aid kit and therapeutic oxygen always on board."},
        {"title": "Weather Monitoring", "desc": "We constantly monitor weather and sea conditions. If the sea is not safe, we postpone or refund. No compromise on safety."},
    ],
    "equipmentTitle": "Premium Equipment",
    "equipmentSubtitle": "High-quality equipment, meticulously maintained",
    "equipment": [
        "Aluminium and steel tanks, checked annually",
        "Professional regulators with backup octopus",
        "Latest generation buoyancy compensators (BCD)",
        "Dive computers for every participant",
        "Quality neoprene wetsuits",
        "Therapeutic oxygen on board",
        "Complete first aid kit",
        "Marine VHF radio for communications",
    ],
    "quote": "Your safety has been our priority since 1996.",
    "quoteSubtitle": "Your safety has been our priority since 1996."
}

safety_de = {
    "metaTitle": "Sicherheit & Ausrüstung — Diving Chia",
    "metaDescription": "Unsere Sicherheitsstandards: Zertifizierte Instruktoren, Premium-Ausrüstung und strenge Protokolle in Chia seit 1996.",
    "goldLabelHero": "Unser Engagement",
    "title": "Sicherheit & Ausrüstung",
    "subtitle": "Ihre Sicherheit hat bei uns absolute Priorität. Jedes Detail wird sorgfältig gepflegt, um Ihnen ein sorgenfreies Erlebnis zu garantieren.",
    "cta": "Auf WhatsApp buchen",
    "goldLabelPillars": "Unsere Säulen",
    "pillarsTitle": "Sicherheitsstandards",
    "pillars": [
        {"title": "Zertifizierte Instruktoren", "desc": "Alle unsere Instruktoren sind PADI-, SSI- oder CMAS-zertifiziert mit jahrelanger Erfahrung an den sardischen Küsten. Kontinuierliche Weiterbildung und regelmäßige Aktualisierungen."},
        {"title": "Tägliche Kontrollen", "desc": "Jeden Tag prüfen wir sorgfältig die gesamte Ausrüstung: Tanks, Regulatoren, Tarierjacken und das gesamte Sicherheitsmaterial. Präventive Wartung ohne Kompromisse."},
        {"title": "Kleine Gruppen", "desc": "Maximal 6 Taucher pro Guide. Das ermöglicht uns, jeden Teilnehmer mit ständiger Aufmerksamkeit zu überwachen und sofort auf jeden Bedarf zu reagieren."},
        {"title": "Detaillierte Briefings", "desc": "Vor jedem Tauchgang oder jeder Aktivität umfasst ein detailliertes Briefing den Tauchplatz, die Verfahren, die Kommunikationssignale und die Sicherheitsprotokolle."},
        {"title": "Notfallprotokolle", "desc": "Wir arbeiten mit DAN (Divers Alert Network) zusammen und haben erprobte Notfallprotokolle. Erste-Hilfe-Kasten und therapeutischer Sauerstoff immer an Bord."},
        {"title": "Wetterüberwachung", "desc": "Wir überwachen ständig die Wetter- und Meeresbedingungen. Wenn das Meer nicht sicher ist, verschieben wir oder erstatten wir. Kein Kompromiss bei der Sicherheit."},
    ],
    "equipmentTitle": "Premium-Ausrüstung",
    "equipmentSubtitle": "Hochwertige Ausrüstung, sorgfältig gewartet",
    "equipment": [
        "Aluminium- und Stahltanks, jährlich geprüft",
        "Professionelle Regulatoren mit Reserve-Octopus",
        "Tarierjacken (BCD) der neuesten Generation",
        "Tauchcomputer für jeden Teilnehmer",
        "Hochwertige Neoprenanzüge",
        "Therapeutischer Sauerstoff an Bord",
        "Vollständiger Erste-Hilfe-Kasten",
        "Marine-VHF-Funkgerät für Kommunikation",
    ],
    "quote": "Ihre Sicherheit ist seit 1996 unsere Priorität.",
    "quoteSubtitle": "Ihre Sicherheit ist seit 1996 unsere Priorität."
}

# ===== SNORKELING =====
snorkeling_it = {
    "metaTitle": "Snorkeling in Barca Chia — Esperienza Sud Sardegna",
    "metaDescription": "Tour di snorkeling in barca per tutte le età a Chia. Acque cristalline e vita marina del Mediterraneo.",
    "goldLabelHero": "Tutte le Età",
    "title": "Snorkeling in Barca",
    "subtitle": "Un'avventura accessibile a tutti alla scoperta della vita marina del Mediterraneo.",
    "cta": "Prenota su WhatsApp",
    "includedTitle": "Cosa Include",
    "includedSubtitle": "Tutto incluso per un'esperienza di snorkeling perfetta",
    "included": [
        "Attrezzatura snorkeling completa (maschera, boccaglio, pinne)",
        "Guida esperta in acqua con te",
        "Barca attrezzata con doccia dolce",
        "Rinfresco a bordo incluso",
        "Assicurazione inclusa",
        "Bambini dai 6 anni benvenuti",
    ],
    "detailsTitle": "Dettagli dell'Esperienza",
    "detailDuration": "Durata",
    "detailDurationValue": "3 ore",
    "detailGroup": "Gruppo",
    "detailGroupValue": "Max 8 persone",
    "detailArea": "Zone",
    "detailAreaValue": "Chia / Pula / Teulada",
    "detailMinAge": "Età minima",
    "detailMinAgeValue": "6 anni",
    "priceLabel": "A partire da",
    "priceAmount": "€55",
    "pricePer": "a persona",
    "priceCta": "Prenota su WhatsApp"
}

snorkeling_en = {
    "metaTitle": "Boat Snorkeling Chia — South Sardinia Experience",
    "metaDescription": "Boat snorkeling tours for all ages in Chia. Crystal-clear waters and Mediterranean marine life.",
    "goldLabelHero": "All Ages",
    "title": "Boat Snorkeling",
    "subtitle": "An adventure accessible to all to discover Mediterranean marine life.",
    "cta": "Book on WhatsApp",
    "includedTitle": "What's Included",
    "includedSubtitle": "Everything included for a perfect snorkeling experience",
    "included": [
        "Complete snorkeling equipment (mask, snorkel, fins)",
        "Expert guide in the water with you",
        "Boat equipped with fresh water shower",
        "Refreshments on board included",
        "Insurance included",
        "Children from 6 years welcome",
    ],
    "detailsTitle": "Experience Details",
    "detailDuration": "Duration",
    "detailDurationValue": "3 hours",
    "detailGroup": "Group",
    "detailGroupValue": "Max 8 people",
    "detailArea": "Area",
    "detailAreaValue": "Chia / Pula / Teulada",
    "detailMinAge": "Minimum age",
    "detailMinAgeValue": "6 years",
    "priceLabel": "Starting from",
    "priceAmount": "€55",
    "pricePer": "per person",
    "priceCta": "Book on WhatsApp"
}

snorkeling_de = {
    "metaTitle": "Schnorcheln per Boot Chia — Südsardinien Erlebnis",
    "metaDescription": "Schnorcheltouren per Boot für alle Altersgruppen in Chia. Kristallklares Wasser und mediterranes Meeresleben.",
    "goldLabelHero": "Für alle Altersgruppen",
    "title": "Schnorcheln per Boot",
    "subtitle": "Ein Abenteuer für alle, um das mediterrane Meeresleben zu entdecken.",
    "cta": "Auf WhatsApp buchen",
    "includedTitle": "Was ist inbegriffen",
    "includedSubtitle": "Alles inklusive für ein perfektes Schnorchelerlebnis",
    "included": [
        "Komplette Schnorchelausrüstung (Maske, Schnorchel, Flossen)",
        "Erfahrener Guide im Wasser bei Ihnen",
        "Boot mit Süßwasserdusche ausgestattet",
        "Erfrischungen an Bord inklusive",
        "Versicherung inklusive",
        "Kinder ab 6 Jahren willkommen",
    ],
    "detailsTitle": "Erlebnisdetails",
    "detailDuration": "Dauer",
    "detailDurationValue": "3 Stunden",
    "detailGroup": "Gruppe",
    "detailGroupValue": "Max. 8 Personen",
    "detailArea": "Gebiet",
    "detailAreaValue": "Chia / Pula / Teulada",
    "detailMinAge": "Mindestalter",
    "detailMinAgeValue": "6 Jahre",
    "priceLabel": "Ab",
    "priceAmount": "€55",
    "pricePer": "pro Person",
    "priceCta": "Auf WhatsApp buchen"
}

# ===== SNORKELING CHIA =====
snorkelingChia_it = {
    "metaTitle": "Snorkeling a Chia — Diving Chia | Sud Sardegna",
    "metaDescription": "Esperienze di snorkeling a Chia per tutte le età. Acque cristalline e vita marina del Mediterraneo.",
    "goldLabel": "Chia",
    "title": "Snorkeling a Chia",
    "subtitle": "Un'avventura accessibile a tutti alla scoperta della vita marina.",
    "cta": "Prenota su WhatsApp",
    "paragraphs": [
        "Lo snorkeling a Chia è un'esperienza che non ha bisogno di esperienza subacquea. Maschera, boccaglio e pinne sono tutto ciò che serve per esplorare un mondo sommerso ricco di colori e vita. Le acque cristalline della Sardegna del Sud offrono una visibilità eccezionale, permettendo di ammirare praterie di posidonia, scogliera ricca di fauna e, con un po' di fortuna, avvistamenti di pesci tra i più affascinanti del Mediterraneo.",
        "I nostri tour di snorkeling partono in piccoli gruppi, massimo 8 persone, per garantire un'esperienza intima e sicura. Una guida esperta accompagna i partecipanti in acqua, indicando i punti più interessanti e assicurandosi che tutti si sentano a proprio agio.",
        "I bambini dai 6 anni sono i benvenuti, rendendo questa attività perfetta per famiglie. L'attrezzatura è inclusa e il rinfresco a bordo rende l'esperienza ancora più piacevole. Un modo semplice e indimenticabile per scoprire il mare di Chia."
    ]
}

snorkelingChia_en = {
    "metaTitle": "Snorkeling in Chia — Diving Chia | South Sardinia",
    "metaDescription": "Snorkeling experiences in Chia for all ages. Crystal-clear waters and Mediterranean marine life.",
    "goldLabel": "Chia",
    "title": "Snorkeling in Chia",
    "subtitle": "An adventure accessible to all to discover marine life.",
    "cta": "Book on WhatsApp",
    "paragraphs": [
        "Snorkeling in Chia is an experience that requires no scuba diving experience. Mask, snorkel and fins are all you need to explore an underwater world rich in colours and life. The crystal-clear waters of South Sardinia offer exceptional visibility, allowing you to admire posidonia meadows, cliffs rich in fauna and, with a bit of luck, sightings of some of the most fascinating fish in the Mediterranean.",
        "Our snorkeling tours depart in small groups, maximum 8 people, to ensure an intimate and safe experience. An expert guide accompanies participants in the water, pointing out the most interesting spots and making sure everyone feels comfortable.",
        "Children from 6 years old are welcome, making this activity perfect for families. Equipment is included and refreshments on board make the experience even more enjoyable. A simple and unforgettable way to discover the sea of Chia."
    ]
}

snorkelingChia_de = {
    "metaTitle": "Schnorcheln in Chia — Diving Chia | Südsardinien",
    "metaDescription": "Schnorchelerlebnisse in Chia für alle Altersgruppen. Kristallklares Wasser und mediterranes Meeresleben.",
    "goldLabel": "Chia",
    "title": "Schnorcheln in Chia",
    "subtitle": "Ein Abenteuer für alle, um das Meeresleben zu entdecken.",
    "cta": "Auf WhatsApp buchen",
    "paragraphs": [
        "Das Schnorcheln in Chia ist ein Erlebnis, das keine Tauchvorerfahrung erfordert. Maske, Schnorchel und Flossen sind alles, was Sie brauchen, um eine farbenfrohe und lebendige Unterwasserwelt zu erkunden. Das kristallklare Wasser von Südsardinien bietet eine außergewöhnliche Sicht, die es ermöglicht, Posidoniengärten, felsige Küsten mit reicher Fauna und mit etwas Glück einige der faszinierendsten Fische des Mittelmeers zu bewundern.",
        "Unsere Schnorcheltouren starten in kleinen Gruppen, maximal 8 Personen, um ein intimes und sicheres Erlebnis zu gewährleisten. Ein erfahrener Guide begleitet die Teilnehmer im Wasser, zeigt die interessantesten Stellen und sorgt dafür, dass sich alle wohlfühlen.",
        "Kinder ab 6 Jahren sind willkommen, was diese Aktivität perfekt für Familien macht. Die Ausrüstung ist inklusive und Erfrischungen an Bord machen das Erlebnis noch angenehmer. Eine einfache und unvergessliche Art, das Meer von Chia zu entdecken."
    ]
}

# ===== SNORKELING NEAR CHIA =====
snorkelingNearChia_it = {
    "metaTitle": "Snorkeling vicino a Chia, Pula, Teulada & Capoterra — Diving Chia",
    "metaDescription": "Snorkeling nei dintorni di Chia, Pula, Teulada e Capoterra. Scopri la vita marina del Sud Sardegna.",
    "goldLabel": "Costa Sud-Ovest",
    "title": "Snorkeling vicino a Chia, Pula, Teulada & Capoterra",
    "subtitle": "Esplora la costa del Sulcis-Iglesiente in snorkeling.",
    "cta": "Prenota su WhatsApp",
    "paragraphs": [
        "La costa tra Chia, Pula, Teulada e Capoterra è un paradiso per gli appassionati di snorkeling. Acque trasparenti, calette nascoste e una biodiversità marina unica rendono ogni uscita un'esperienza indimenticabile. I nostri tour in barca ti portano nei punti migliori, accessibili solo via mare, lontani dalla folla e immersi nella natura più autentica.",
        "Le praterie di posidonia ospitano cavallucci marini, polpi e murene, mentre i fondali rocciosi sono popolati da cernie, scorfani e colorati pesci tropicai che hanno colonizzato queste acque. La visibilità, spesso superiore ai 20 metri, permette di ammirare ogni dettaglio senza bisogno di scendere in profondità.",
        "Che tu sia in vacanza a Chia, Pula, Teulada o Capoterra, il nostro snorkeling tour è il modo perfetto per scoprire il mare della Sardegna del Sud. L'attrezzatura è inclusa e i bambini sono i benvenuti. Contattaci per prenotare la tua avventura."
    ]
}

snorkelingNearChia_en = {
    "metaTitle": "Snorkeling near Chia, Pula, Teulada & Capoterra — Diving Chia",
    "metaDescription": "Snorkeling around Chia, Pula, Teulada and Capoterra. Discover the marine life of South Sardinia.",
    "goldLabel": "South-West Coast",
    "title": "Snorkeling near Chia, Pula, Teulada & Capoterra",
    "subtitle": "Explore the Sulcis-Iglesiente coast by snorkeling.",
    "cta": "Book on WhatsApp",
    "paragraphs": [
        "The coast between Chia, Pula, Teulada and Capoterra is a paradise for snorkeling enthusiasts. Transparent waters, hidden coves and unique marine biodiversity make every outing an unforgettable experience. Our boat tours take you to the best spots, accessible only by sea, away from the crowds and immersed in the most authentic nature.",
        "Posidonia meadows host seahorses, octopuses and moray eels, while rocky seabeds are populated by groupers, scorpionfish and colourful tropical fish that have colonised these waters. Visibility, often exceeding 20 metres, allows you to admire every detail without needing to descend into the depths.",
        "Whether you are on holiday in Chia, Pula, Teulada or Capoterra, our snorkeling tour is the perfect way to discover the sea of South Sardinia. Equipment is included and children are welcome. Contact us to book your adventure."
    ]
}

snorkelingNearChia_de = {
    "metaTitle": "Schnorcheln in der Nähe von Chia, Pula, Teulada & Capoterra — Diving Chia",
    "metaDescription": "Schnorcheln in der Umgebung von Chia, Pula, Teulada und Capoterra. Entdecken Sie das Meeresleben von Südsardinien.",
    "goldLabel": "Südwestküste",
    "title": "Schnorcheln in der Nähe von Chia, Pula, Teulada & Capoterra",
    "subtitle": "Erkunden Sie die Küste des Sulcis-Iglesiente beim Schnorcheln.",
    "cta": "Auf WhatsApp buchen",
    "paragraphs": [
        "Die Küste zwischen Chia, Pula, Teulada und Capoterra ist ein Paradies für Schnorchel-Enthusiasten. Transparentes Wasser, versteckte Buchten und einzigartige marine Artenvielfalt machen jeden Ausflug zu einem unvergesslichen Erlebnis. Unsere Bootstouren bringen Sie zu den besten Stellen, die nur vom Meer aus erreichbar sind, abseits der Massen und eingetaucht in die authentischste Natur.",
        "Posidoniengärten beherbergen Seepferdchen, Kraken und Muränen, während felsige Meeresböden von Zackenbarschen, Skorpionfischen und bunten Tropenfischen bevölkert werden, die diese Gewässer kolonisiert haben. Die Sicht, oft über 20 Meter, ermöglicht es, jedes Detail zu bewundern, ohne in die Tiefe abtauchen zu müssen.",
        "Ob Sie Urlaub in Chia, Pula, Teulada oder Capoterra machen – unsere Schnorcheltour ist die perfekte Art, das Meer von Südsardinien zu entdecken. Die Ausrüstung ist inklusive und Kinder sind willkommen. Kontaktieren Sie uns, um Ihr Abenteuer zu buchen."
    ]
}

# ===== SNORKELING TEULADA =====
snorkelingTeulada_it = {
    "metaTitle": "Snorkeling a Teulada — Diving Chia | Sud Sardegna",
    "metaDescription": "Snorkeling a Teulada, tra calette selvagge e acque cristalline. Esplora la costa del Sud Sardegna con Diving Chia.",
    "goldLabel": "Teulada",
    "title": "Snorkeling a Teulada",
    "subtitle": "Calette nascoste e fondali ricchi di vita marina nell'estremo sud della Sardegna.",
    "cta": "Prenota su WhatsApp",
    "paragraphs": [
        "Teulada è una delle mete più ambite per lo snorkeling nel Sud Sardegna. La sua costa selvaggia e frastagliata nasconde calette accessibili solo via mare, dove l'acqua è così trasparente da sembrare vetro. I nostri tour di snorkeling ti portano alla scoperta di questi angoli di paradiso, lontani dalla folla e immersi in una natura ancora intatta.",
        "I fondali di Teulada sono ricchi di vita: praterie di posidonia che oscillano dolcemente con le correnti, scogli coperti di spugne colorate e alghe, e una fauna che va dai pesci più comuni come le salpe e le donzelle fino a cernie e murene nascoste tra le rocce. La visibilità è spesso superiore ai 20 metri, permettendo di ammirare tutto in grande dettaglio.",
        "Il tour di snorkeling a Teulada è adatto a tutta la famiglia, bambini inclusi dai 6 anni. L'attrezzatura è fornita da noi e la guida esperta accompagna ogni partecipante in acqua, indicando i punti più interessanti e garantendo sicurezza a ogni momento. Prenota la tua uscita e scopri Teulada dal mare."
    ]
}

snorkelingTeulada_en = {
    "metaTitle": "Snorkeling in Teulada — Diving Chia | South Sardinia",
    "metaDescription": "Snorkeling in Teulada, among wild coves and crystal-clear waters. Explore the South Sardinia coast with Diving Chia.",
    "goldLabel": "Teulada",
    "title": "Snorkeling in Teulada",
    "subtitle": "Hidden coves and seabeds rich in marine life in the extreme south of Sardinia.",
    "cta": "Book on WhatsApp",
    "paragraphs": [
        "Teulada is one of the most sought-after destinations for snorkeling in South Sardinia. Its wild and jagged coastline hides coves accessible only by sea, where the water is so transparent it looks like glass. Our snorkeling tours take you to discover these corners of paradise, away from the crowds and immersed in untouched nature.",
        "The seabeds of Teulada are rich with life: posidonia meadows that sway gently with the currents, rocks covered in colourful sponges and algae, and fauna ranging from the most common fish like salema porgies and damselfish to groupers and moray eels hidden among the rocks. Visibility is often over 20 metres, allowing you to admire everything in great detail.",
        "The snorkeling tour in Teulada is suitable for the whole family, including children from 6 years old. Equipment is provided by us and the expert guide accompanies every participant in the water, pointing out the most interesting spots and guaranteeing safety at all times. Book your outing and discover Teulada from the sea."
    ]
}

snorkelingTeulada_de = {
    "metaTitle": "Schnorcheln in Teulada — Diving Chia | Südsardinien",
    "metaDescription": "Schnorcheln in Teulada, zwischen wilden Buchten und kristallklarem Wasser. Erkunden Sie die Küste von Südsardinien mit Diving Chia.",
    "goldLabel": "Teulada",
    "title": "Schnorcheln in Teulada",
    "subtitle": "Versteckte Buchten und meeresreiche Böden im äußersten Süden Sardiniens.",
    "cta": "Auf WhatsApp buchen",
    "paragraphs": [
        "Teulada ist eines der begehrtesten Ziele zum Schnorcheln in Südsardinien. Die wilde und zerklüftete Küste birgt Buchten, die nur vom Meer aus erreichbar sind, wo das Wasser so transparent ist, dass es wie Glas aussieht. Unsere Schnorcheltouren bringen Sie zur Entdeckung dieser Paradiesecken, abseits der Massen und eingetaucht in unberührte Natur.",
        "Die Meeresböden von Teulada sind reich an Leben: Posidoniengärten, die sanft mit den Strömungen schwingen, Felsen bedeckt mit bunten Schwämmen und Algen, und eine Fauna, die von den häufigsten Fischen wie Goldbrassen und Riffbarschen bis zu Zackenbarschen und Muränen reicht, die sich zwischen den Felsen verstecken. Die Sicht ist oft über 20 Meter, sodass Sie alles in großer Detailtreue bewundern können.",
        "Die Schnorcheltour in Teulada ist für die ganze Familie geeignet, einschließlich Kinder ab 6 Jahren. Die Ausrüstung wird von uns gestellt und der erfahrene Guide begleitet jeden Teilnehmer im Wasser, zeigt die interessantesten Stellen und garantiert zu jeder Zeit Sicherheit. Buchen Sie Ihren Ausflug und entdecken Sie Teulada vom Meer aus."
    ]
}

# ===== SUNSET =====
sunset_it = {
    "metaTitle": "Tramonto in Barca Chia — Esperienza Serale Sud Sardegna",
    "metaDescription": "Tramonto in barca a Chia con aperitivo e prosecco incluso. Un'esperienza magica sul mare della Sardegna del Sud.",
    "goldLabelHero": "Esperienza Serale",
    "title": "Tramonto in Barca",
    "subtitle": "L'ora d'oro sul mare, con aperitivo e prosecco. Un'esperienza romantica indimenticabile.",
    "cta": "Prenota su WhatsApp",
    "includedTitle": "Cosa Include",
    "includedSubtitle": "Cosa è incluso nella tua esperienza al tramonto",
    "included": [
        "Crociera di 2 ore al tramonto",
        "Aperitivo con stuzzichini sardi",
        "Bottiglia di prosecco o vino locale",
        "Soste panoramiche nelle calette",
        "Musica soft di sottofondo",
        "Possibilità di bagno serale",
    ],
    "detailsTitle": "Dettagli dell'Esperienza",
    "detailDuration": "Durata",
    "detailDurationValue": "2 ore",
    "detailTime": "Orario",
    "detailTimeValue": "1 ora prima del tramonto",
    "detailGroup": "Gruppo",
    "detailGroupValue": "Max 6 persone",
    "detailSeason": "Periodo",
    "detailSeasonValue": "Aprile — Ottobre",
    "priceLabel": "A partire da",
    "priceAmount": "€75",
    "pricePer": "a persona",
    "priceCta": "Prenota su WhatsApp"
}

sunset_en = {
    "metaTitle": "Sunset Boat Trip Chia — South Sardinia Evening Experience",
    "metaDescription": "Sunset boat trip in Chia with aperitivo and prosecco included. A magical experience on the sea of South Sardinia.",
    "goldLabelHero": "Evening Experience",
    "title": "Sunset Boat Trip",
    "subtitle": "Golden hour on the water, with aperitivo and prosecco. An unforgettable romantic experience.",
    "cta": "Book on WhatsApp",
    "includedTitle": "What's Included",
    "includedSubtitle": "What's included in your sunset experience",
    "included": [
        "2-hour sunset cruise",
        "Aperitivo with Sardinian nibbles",
        "Bottle of prosecco or local wine",
        "Panoramic stops in the coves",
        "Soft background music",
        "Possibility of an evening swim",
    ],
    "detailsTitle": "Experience Details",
    "detailDuration": "Duration",
    "detailDurationValue": "2 hours",
    "detailTime": "Time",
    "detailTimeValue": "1 hour before sunset",
    "detailGroup": "Group",
    "detailGroupValue": "Max 6 people",
    "detailSeason": "Season",
    "detailSeasonValue": "April — October",
    "priceLabel": "Starting from",
    "priceAmount": "€75",
    "pricePer": "per person",
    "priceCta": "Book on WhatsApp"
}

sunset_de = {
    "metaTitle": "Sonnenuntergang per Boot Chia — Südsardinien Abenderlebnis",
    "metaDescription": "Sonnenuntergangsfahrt in Chia mit Aperitivo und Prosecco inklusive. Ein magisches Erlebnis auf dem Meer von Südsardinien.",
    "goldLabelHero": "Abenderlebnis",
    "title": "Sonnenuntergang per Boot",
    "subtitle": "Die goldene Stunde auf dem Wasser, mit Aperitivo und Prosecco. Ein unvergessliches romantisches Erlebnis.",
    "cta": "Auf WhatsApp buchen",
    "includedTitle": "Was ist inbegriffen",
    "includedSubtitle": "Was in Ihrem Sonnenuntergangserlebnis inbegriffen ist",
    "included": [
        "2-stündige Sonnenuntergangskreuzfahrt",
        "Aperitivo mit sardischen Häppchen",
        "Flasche Prosecco oder lokaler Wein",
        "Panorama-Stopps in den Buchten",
        "Sanfte Hintergrundmusik",
        "Möglichkeit zum Abendbad",
    ],
    "detailsTitle": "Erlebnisdetails",
    "detailDuration": "Dauer",
    "detailDurationValue": "2 Stunden",
    "detailTime": "Uhrzeit",
    "detailTimeValue": "1 Stunde vor Sonnenuntergang",
    "detailGroup": "Gruppe",
    "detailGroupValue": "Max. 6 Personen",
    "detailSeason": "Saison",
    "detailSeasonValue": "April — Oktober",
    "priceLabel": "Ab",
    "priceAmount": "€75",
    "pricePer": "pro Person",
    "priceCta": "Auf WhatsApp buchen"
}

# ===== SUNSET BOAT EXPERIENCE CHIA =====
sunsetBoatExperienceChia_it = {
    "metaTitle": "Tramonto in Barca a Chia — Diving Chia | Esperienza Serale",
    "metaDescription": "Esperienza di tramonto in barca a Chia con aperitivo e prosecco incluso. Un momento magico sul mare del Sud Sardegna.",
    "goldLabel": "Esperienza Serale",
    "title": "Tramonto in Barca a Chia",
    "subtitle": "L'ora d'oro sul mare, con aperitivo e prosecco. Un'esperienza romantica indimenticabile.",
    "cta": "Prenota su WhatsApp",
    "paragraphs": [
        "Il tramonto in barca a Chia è un'esperienza che resta nel cuore. Quando il sole inizia a calare sul mare della Sardegna del Sud, i colori si trasformano in una palette infinita: tonalità dorate, arancio acceso e sfumature di rosa che si riflettono sull'acqua come in uno specchio naturale. A bordo della nostra barca, con un bicchiere di prosecco in mano e stuzzichini sardi, questo spettacolo diventa un ricordo indimenticabile.",
        "L'esperienza dura circa due ore: partiamo un'ora prima del tramonto per navigare lungo la costa, ammirando le scogliere e le calette che si tingono di luce dorata. Facciamo soste panoramiche nei punti più belli, dove potrai scattare foto straordinarie e, se lo desideri, concederti un bagno nelle acque calme della sera.",
        "L'aperitivo include prosecco o vino locale, accompagnato da stuzzichini tipici sardi: pane carasau, formaggio pecorino, olive e salsiccia secca. L'atmosfera è intima e rilassata, con musica soft di sottofondo. Perfetto per coppie in cerca di romanticismo, ma anche per piccoli gruppi di amici che vogliono vivere Chia in modo speciale."
    ]
}

sunsetBoatExperienceChia_en = {
    "metaTitle": "Sunset Boat Experience in Chia — Diving Chia | Evening Adventure",
    "metaDescription": "Sunset boat experience in Chia with aperitivo and prosecco included. A magical moment on the sea of South Sardinia.",
    "goldLabel": "Evening Experience",
    "title": "Sunset Boat Experience in Chia",
    "subtitle": "Golden hour on the sea, with aperitivo and prosecco. An unforgettable romantic experience.",
    "cta": "Book on WhatsApp",
    "paragraphs": [
        "The sunset boat experience in Chia is one that stays in your heart. As the sun begins to set over the sea of South Sardinia, the colours transform into an infinite palette: golden tones, bright orange and shades of pink that reflect on the water like a natural mirror. On board our boat, with a glass of prosecco in hand and Sardinian nibbles, this spectacle becomes an unforgettable memory.",
        "The experience lasts about two hours: we depart one hour before sunset to navigate along the coast, admiring the cliffs and coves that turn golden. We make panoramic stops at the most beautiful spots, where you can take extraordinary photos and, if you wish, enjoy a swim in the calm evening waters.",
        "The aperitivo includes prosecco or local wine, accompanied by typical Sardinian nibbles: pane carasau, pecorino cheese, olives and dry sausage. The atmosphere is intimate and relaxed, with soft background music. Perfect for couples seeking romance, but also for small groups of friends who want to experience Chia in a special way."
    ]
}

sunsetBoatExperienceChia_de = {
    "metaTitle": "Sonnenuntergangs-Booterlebnis in Chia — Diving Chia | Abendabenteuer",
    "metaDescription": "Sonnenuntergangs-Booterlebnis in Chia mit Aperitivo und Prosecco inklusive. Ein magischer Moment auf dem Meer von Südsardinien.",
    "goldLabel": "Abenderlebnis",
    "title": "Sonnenuntergangs-Booterlebnis in Chia",
    "subtitle": "Die goldene Stunde auf dem Meer, mit Aperitivo und Prosecco. Ein unvergessliches romantisches Erlebnis.",
    "cta": "Auf WhatsApp buchen",
    "paragraphs": [
        "Das Sonnenuntergangs-Booterlebnis in Chia bleibt im Herzen. Wenn die Sonne über dem Meer von Südsardinien zu sinken beginnt, verwandeln sich die Farben in eine unendliche Palette: Goldtöne, leuchtendes Orange und Rosaschattierungen, die sich auf dem Wasser wie ein natürlicher Spiegel spiegeln. An Bord unseres Bootes, mit einem Glas Prosecco in der Hand und sardischen Häppchen, wird dieses Schauspiel zu einer unvergesslichen Erinnerung.",
        "Das Erlebnis dauert etwa zwei Stunden: Wir brechen eine Stunde vor Sonnenuntergang auf, um entlang der Küste zu fahren, die Klippen und Buchten bewundernd, die golden werden. Wir machen Panorama-Stopps an den schönsten Stellen, wo Sie außergewöhnliche Fotos machen und, wenn Sie möchten, in den ruhigen Abendgewässern baden können.",
        "Zum Aperitivo gehören Prosecco oder lokaler Wein, begleitet von typisch sardischen Häppchen: Pane Carasau, Pecorino-Käse, Oliven und Trockenwurst. Die Atmosphäre ist intim und entspannt, mit sanfter Hintergrundmusik. Perfekt für Paare, die Romantik suchen, aber auch für kleine Freundesgruppen, die Chia auf besondere Weise erleben möchten."
    ]
}

# ===== TRY SCUBA =====
tryScuba_it = {
    "metaTitle": "Prima Immersione Chia — La Tua Prima Volta Sott'acqua",
    "metaDescription": "Prova l'immersione subacquea per la prima volta a Chia, Sud Sardegna. Nessuna esperienza necessaria.",
    "goldLabelHero": "Primi Tuffi",
    "title": "Prima Immersione",
    "subtitle": "Il tuo primo respiro sott'acqua in un'esperienza sicura e indimenticabile a Chia, Sardegna del Sud.",
    "cta": "Prenota su WhatsApp",
    "includedTitle": "Cosa Include",
    "includedSubtitle": "Tutto ciò che serve per la tua prima immersione",
    "included": [
        "Attrezzatura subacquea completa",
        "Istruttore PADI certificato dedicato",
        "Trasferimento in barca incluso",
        "Briefing pre-immersione dettagliato",
        "Foto sott'acqua del tuo primo tuffo",
        "Assicurazione DAN inclusa",
    ],
    "detailsTitle": "Dettagli dell'Esperienza",
    "detailDuration": "Durata",
    "detailDurationValue": "2,5 — 3 ore",
    "detailDepth": "Profondità",
    "detailDepthValue": "Fino a 6 metri",
    "detailGroup": "Gruppo",
    "detailGroupValue": "Max 4 persone",
    "detailRequirements": "Requisiti",
    "detailRequirementsValue": "Nessuna esperienza",
    "priceLabel": "A partire da",
    "priceAmount": "€85",
    "pricePer": "a persona",
    "priceCta": "Prenota su WhatsApp"
}

tryScuba_en = {
    "metaTitle": "Try Scuba Diving Chia — Your First Time Underwater",
    "metaDescription": "Try scuba diving for the first time in Chia, South Sardinia. No experience needed.",
    "goldLabelHero": "First Dives",
    "title": "First Dive",
    "subtitle": "Your first underwater breath in a safe, unforgettable experience in Chia, South Sardinia.",
    "cta": "Book on WhatsApp",
    "includedTitle": "What's Included",
    "includedSubtitle": "Everything you need for your first dive",
    "included": [
        "Complete scuba diving equipment",
        "Dedicated PADI certified instructor",
        "Boat transfer included",
        "Detailed pre-dive briefing",
        "Underwater photos of your first dive",
        "DAN insurance included",
    ],
    "detailsTitle": "Experience Details",
    "detailDuration": "Duration",
    "detailDurationValue": "2.5 — 3 hours",
    "detailDepth": "Depth",
    "detailDepthValue": "Up to 6 metres",
    "detailGroup": "Group",
    "detailGroupValue": "Max 4 people",
    "detailRequirements": "Requirements",
    "detailRequirementsValue": "No experience needed",
    "priceLabel": "Starting from",
    "priceAmount": "€85",
    "pricePer": "per person",
    "priceCta": "Book on WhatsApp"
}

tryScuba_de = {
    "metaTitle": "Schnuppertauchen Chia — Ihr erstes Mal unter Wasser",
    "metaDescription": "Probieren Sie das Tauchen zum ersten Mal in Chia, Südsardinien, aus. Keine Vorerfahrung nötig.",
    "goldLabelHero": "Erste Tauchgänge",
    "title": "Schnuppertauchen",
    "subtitle": "Ihr erster Atemzug unter Wasser in einem sicheren, unvergesslichen Erlebnis in Chia, Südsardinien.",
    "cta": "Auf WhatsApp buchen",
    "includedTitle": "Was ist inbegriffen",
    "includedSubtitle": "Alles, was Sie für Ihren ersten Tauchgang brauchen",
    "included": [
        "Komplette Tauchausrüstung",
        "Dedizierter PADI-zertifizierter Instruktor",
        "Bootstransfer inklusive",
        "Detailliertes Pre-Dive-Briefing",
        "Unterwasserfotos Ihres ersten Tauchgangs",
        "DAN-Versicherung inklusive",
    ],
    "detailsTitle": "Erlebnisdetails",
    "detailDuration": "Dauer",
    "detailDurationValue": "2,5 — 3 Stunden",
    "detailDepth": "Tiefe",
    "detailDepthValue": "Bis zu 6 Meter",
    "detailGroup": "Gruppe",
    "detailGroupValue": "Max. 4 Personen",
    "detailRequirements": "Voraussetzungen",
    "detailRequirementsValue": "Keine Vorerfahrung nötig",
    "priceLabel": "Ab",
    "priceAmount": "€85",
    "pricePer": "pro Person",
    "priceCta": "Auf WhatsApp buchen"
}

# ===== TRY SCUBA CHIA =====
tryScubaChia_it = {
    "metaTitle": "Prima Immersione a Chia — Try Scuba Diving | Diving Chia",
    "metaDescription": "Prova l'immersione subacquea per la prima volta a Chia. Nessuna esperienza necessaria, istruttore dedicato.",
    "goldLabel": "Primi Tuffi",
    "title": "Prima Immersione a Chia",
    "subtitle": "Il tuo primo respiro sott'acqua in una delle location più belle del Mediterraneo.",
    "cta": "Prenota su WhatsApp",
    "paragraphs": [
        "Se hai sempre sognato di respirare sott'acqua, la Prima Immersione a Chia è il modo perfetto per iniziare. Non serve alcuna esperienza precedente né saper nuotare perfettamente: il nostro istruttore certificato PADI sarà al tuo fianco in ogni momento, dalla preparazione dell'attrezzatura al rientro in superficie.",
        "L'esperienza inizia con un briefing dettagliato in cui spieghiamo le basi della subacquea e rispondiamo a tutte le tue domande. Poi ci spostiamo in barca verso una cala protetta, dove faremo esercizi in acque basse prima di scendere fino a 6 metri di profondità.",
        "L'attrezzatura completa è inclusa, così come le foto sott'acqua del tuo primo tuffo e l'assicurazione DAN. Al rientro, riceverai un attestato di partecipazione. Molti dei nostri ospiti iniziano così il loro percorso subacqueo, proseguendo poi con il corso Open Water Diver."
    ]
}

tryScubaChia_en = {
    "metaTitle": "Try Scuba Diving in Chia — Diving Chia | No Experience Needed",
    "metaDescription": "Try scuba diving for the first time in Chia. No experience needed, dedicated instructor.",
    "goldLabel": "First Dives",
    "title": "Try Scuba Diving in Chia",
    "subtitle": "Your first underwater breath in one of the most beautiful locations in the Mediterranean.",
    "cta": "Book on WhatsApp",
    "paragraphs": [
        "If you have always dreamed of breathing underwater, Try Scuba Diving in Chia is the perfect way to start. No previous experience or perfect swimming skills are required: our PADI certified instructor will be by your side at every moment, from equipment preparation to surfacing.",
        "The experience begins with a detailed briefing where we explain the basics of scuba diving and answer all your questions. Then we move by boat to a protected cove, where we will do shallow water exercises before descending to 6 metres depth.",
        "Full equipment is included, as well as underwater photos of your first dive and DAN insurance. Upon return, you will receive a participation certificate. Many of our guests start their scuba diving journey this way, then continuing with the Open Water Diver course."
    ]
}

tryScubaChia_de = {
    "metaTitle": "Schnuppertauchen in Chia — Diving Chia | Keine Erfahrung nötig",
    "metaDescription": "Probieren Sie das Tauchen zum ersten Mal in Chia aus. Keine Vorerfahrung nötig, dedizierter Instruktor.",
    "goldLabel": "Erste Tauchgänge",
    "title": "Schnuppertauchen in Chia",
    "subtitle": "Ihr erster Atemzug unter Wasser an einem der schönsten Orte des Mittelmeers.",
    "cta": "Auf WhatsApp buchen",
    "paragraphs": [
        "Wenn Sie schon immer davon geträumt haben, unter Wasser zu atmen, ist das Schnuppertauchen in Chia der perfekte Einstieg. Es sind keine Vorerfahrungen oder perfekte Schwimmkenntnisse erforderlich: Unser PADI-zertifizierter Instruktor begleitet Sie bei jedem Schritt, von der Ausrüstungsvorbereitung bis zum Auftauchen.",
        "Das Erlebnis beginnt mit einem detaillierten Briefing, in dem wir die Grundlagen des Tauchens erklären und alle Ihre Fragen beantworten. Dann fahren wir mit dem Boot zu einer geschützten Bucht, wo wir Übungen in flachem Wasser machen, bevor wir bis auf 6 Meter Tiefe abtauchen.",
        "Die komplette Ausrüstung ist inklusive, ebenso Unterwasserfotos Ihres ersten Tauchgangs und die DAN-Versicherung. Nach der Rückkehr erhalten Sie eine Teilnahmebescheinigung. Viele unserer Gäste beginnen auf diese Weise ihre Tauchkarriere und setzen dann mit dem Open Water Diver Kurs fort."
    ]
}

# Merge into existing messages
it.update({
    "contact": contact_it,
    "courses": courses_it,
    "divingChia": divingChia_it,
    "divingNearChia": divingNearChia_it,
    "divingTeulada": divingTeulada_it,
    "faq": faq_it,
    "guidedDives": guidedDives_it,
    "prices": prices_it,
    "privateBoatToursChia": privateBoatToursChia_it,
    "privateTours": privateTours_it,
    "safety": safety_it,
    "snorkeling": snorkeling_it,
    "snorkelingChia": snorkelingChia_it,
    "snorkelingNearChia": snorkelingNearChia_it,
    "snorkelingTeulada": snorkelingTeulada_it,
    "sunset": sunset_it,
    "sunsetBoatExperienceChia": sunsetBoatExperienceChia_it,
    "tryScuba": tryScuba_it,
    "tryScubaChia": tryScubaChia_it,
})
# gallery additions
it["gallery"].update(gallery_add_it)

en.update({
    "contact": contact_en,
    "courses": courses_en,
    "divingChia": divingChia_en,
    "divingNearChia": divingNearChia_en,
    "divingTeulada": divingTeulada_en,
    "faq": faq_en,
    "guidedDives": guidedDives_en,
    "prices": prices_en,
    "privateBoatToursChia": privateBoatToursChia_en,
    "privateTours": privateTours_en,
    "safety": safety_en,
    "snorkeling": snorkeling_en,
    "snorkelingChia": snorkelingChia_en,
    "snorkelingNearChia": snorkelingNearChia_en,
    "snorkelingTeulada": snorkelingTeulada_en,
    "sunset": sunset_en,
    "sunsetBoatExperienceChia": sunsetBoatExperienceChia_en,
    "tryScuba": tryScuba_en,
    "tryScubaChia": tryScubaChia_en,
})
en["gallery"].update(gallery_add_en)

de.update({
    "contact": contact_de,
    "courses": courses_de,
    "divingChia": divingChia_de,
    "divingNearChia": divingNearChia_de,
    "divingTeulada": divingTeulada_de,
    "faq": faq_de,
    "guidedDives": guidedDives_de,
    "prices": prices_de,
    "privateBoatToursChia": privateBoatToursChia_de,
    "privateTours": privateTours_de,
    "safety": safety_de,
    "snorkeling": snorkeling_de,
    "snorkelingChia": snorkelingChia_de,
    "snorkelingNearChia": snorkelingNearChia_de,
    "snorkelingTeulada": snorkelingTeulada_de,
    "sunset": sunset_de,
    "sunsetBoatExperienceChia": sunsetBoatExperienceChia_de,
    "tryScuba": tryScuba_de,
    "tryScubaChia": tryScubaChia_de,
})
de["gallery"].update(gallery_add_de)

with open(os.path.join(BASE, "src/messages/it.json"), "w", encoding="utf-8") as f:
    json.dump(it, f, ensure_ascii=False, indent=2)
with open(os.path.join(BASE, "src/messages/en.json"), "w", encoding="utf-8") as f:
    json.dump(en, f, ensure_ascii=False, indent=2)
with open(os.path.join(BASE, "src/messages/de.json"), "w", encoding="utf-8") as f:
    json.dump(de, f, ensure_ascii=False, indent=2)

print("JSON files updated successfully!")

export type Lang = 'en' | 'el'

export const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      results: 'Results',
      cta: 'Get Early Access',
    },
    hero: {
      badge: 'Now accepting beta hosts — Greece only',
      headline1: 'Your Greek rental.',
      headline2: 'AI-optimized.',
      headline3: 'Effortlessly.',
      subhead: 'Dynamic pricing, listing optimization, and intelligent guest communication — built exclusively for the Greek short-term rental market. Stop leaving revenue on the table.',
      cta1: 'Join the Beta — Free',
      cta2: 'See How It Works',
      stats: [
        { num: '+28%', label: 'Avg. Revenue Uplift' },
        { num: '200K+', label: 'Greek STR Listings' },
        { num: '€7B', label: 'Annual Booking Volume' },
        { num: '3 min', label: 'Setup Time' },
      ],
    },
    features: {
      tag: 'What KERDOMAX Does',
      heading1: 'Every tool you need.',
      heading2: "Nothing you don't.",
      subhead: 'Built for individual Greek hosts and small property managers — not a generic global platform retrofitted for your market.',
      items: [
        {
          title: 'Hyperlocal Dynamic Pricing',
          desc: 'AI trained on Greek demand signals, island seasonality, local festivals, and real-time market data. Not a global algorithm trying to guess Santorini in August.',
        },
        {
          title: 'Listing Optimization',
          desc: 'AI-generated titles, descriptions, and photo-order recommendations — tailored to what actually converts on Airbnb and Booking.com for Greek properties.',
        },
        {
          title: 'Intelligent Guest Messaging',
          desc: 'Smart, multilingual templates with Greek cultural context. Auto-handles common queries so you can focus on your guests, not your inbox.',
        },
        {
          title: 'Regulatory Alerts',
          desc: "Greece's STR regulations are evolving fast. KERDOMAX monitors changes and alerts you before they affect your listings — no legal surprises.",
        },
        {
          title: 'Revenue Dashboard',
          desc: 'Real-time view of your ADR, occupancy rate, and revenue across all your properties and platforms — in one place, in Greek or English.',
        },
        {
          title: 'Multi-Channel Sync',
          desc: 'Manage Airbnb, Booking.com, VRBO, and more from a single hub. Pricing updates propagate instantly — no double bookings, no drift.',
        },
      ],
    },
    howItWorks: {
      tag: 'Getting Started',
      heading: 'Up and running in minutes',
      subhead: 'No technical knowledge required. No long contracts. Just connect, optimize, and earn more.',
      steps: [
        {
          title: 'Connect Your Listings',
          desc: 'Link your Airbnb and Booking.com accounts securely in one click. KERDOMAX imports your properties, calendars, and historical data automatically.',
        },
        {
          title: 'AI Calibrates for Your Market',
          desc: 'Our model analyzes your specific location, property type, and the competitive landscape around you — then builds a custom pricing and content strategy.',
        },
        {
          title: 'Review & Approve',
          desc: 'You stay in control. Review AI recommendations before they go live. Set limits, override anything, and build trust with the system over time.',
        },
        {
          title: 'Watch Revenue Grow',
          desc: 'Prices adjust automatically around events, seasons, and demand shifts. Your dashboard tracks the impact in real time — revenue, occupancy, ADR.',
        },
      ],
    },
    pricing: {
      tag: 'Pricing',
      heading: 'Simple, transparent plans',
      subhead: 'No percentage-of-booking fees. No hidden charges. A flat monthly rate that pays for itself after a single optimized booking.',
      mostPopular: 'Most Popular',
      tiers: [
        {
          name: 'Basic',
          period: 'per month · 1–2 properties',
          features: [
            'Dynamic pricing engine',
            'Basic occupancy forecasts',
            'Core guest message templates',
            '1–2 OTA channel sync',
            'Revenue dashboard',
            'Regulatory alert emails',
          ],
          cta: 'Start Free Beta',
        },
        {
          name: 'Pro',
          period: 'per month · 3–10 properties',
          features: [
            'Everything in Basic',
            'Advanced AI pricing model',
            'Full listing optimization',
            'Multi-channel sync (all OTAs)',
            'Smart guest messaging AI',
            'Priority support',
          ],
          cta: 'Start Free Beta',
        },
        {
          name: 'Business',
          period: 'per month · 10+ properties',
          features: [
            'Everything in Pro',
            'Full automation suite',
            'API access',
            'Custom performance reports',
            'Dedicated account manager',
            'White-glove onboarding',
          ],
          cta: 'Talk to Sales',
        },
      ],
    },
    trust: {
      tag: 'Why KERDOMAX',
      heading1: 'Numbers that matter',
      heading2: 'to Greek hosts',
      subhead: 'Built after talking to dozens of hosts across Athens, Crete, and the Aegean islands. These are the results they told us they need.',
      metrics: [
        { num: '+28%', label: 'Avg. revenue uplift' },
        { num: '3×', label: 'Faster listing setup' },
        { num: '94%', label: 'Queries auto-handled' },
        { num: '€5B+', label: "Market we're built for" },
      ],
      testimonials: [
        {
          quote: 'Managing pricing manually during peak season on Mykonos was a nightmare. The kind of local signal an AI like this could act on in minutes would have taken me hours every week.',
          name: 'Nikos P.',
          meta: '4 villas, Mykonos',
        },
        {
          quote: "The challenge isn't just pricing — it's the guest messages, the listings, the regulations. I need one tool that handles all of it, not three separate subscriptions.",
          name: 'Maria S.',
          meta: '8 apartments, Athens',
        },
        {
          quote: "PriceLabs is powerful but it doesn't know that Easter week in Rhodes is completely different from the same week in Thessaloniki. Local context is everything.",
          name: 'Yannis D.',
          meta: '12 units, Rhodes & Crete',
        },
      ],
    },
    beta: {
      tag: 'Limited Beta',
      heading1: 'Be first.',
      heading2: 'Get results.',
      subhead: "We're onboarding a limited number of Greek hosts for our beta program. Free access while we validate — your feedback shapes the product.",
      bullets: [
        'No credit card required',
        'Free during beta',
        'Limited spots available',
      ],
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        city: 'City / Region',
        properties: 'Properties',
        challenge: 'Biggest Challenge?',
        optional: '(optional)',
        selectPlaceholder: 'Select…',
        propertyOptions: ['1 property', '2 properties', '3–5 properties', '6–10 properties', '10+ properties'],
        cityPlaceholder: 'Athens, Crete…',
        challengePlaceholder: 'Pricing during shoulder season, guest messaging, regulations…',
        submit: 'Request Beta Access →',
        privacy: 'By signing up you agree to receive product updates and your beta invite. No spam, ever. Unsubscribe anytime.',
      },
      success: {
        heading: "You're on the list!",
        body: "We'll be in touch with your beta invite shortly. Keep an eye on your inbox.",
      },
    },
    footer: {
      tagline: 'AI Revenue Optimization for Greek Short-Term Rental Hosts',
      links: ['Privacy Policy', 'Terms', 'Contact'],
      copyright: '© 2026 KERDOMAX. All rights reserved.',
    },
  },
  el: {
    nav: {
      features: 'Χαρακτηριστικά',
      howItWorks: 'Πώς Λειτουργεί',
      pricing: 'Τιμολόγηση',
      results: 'Αποτελέσματα',
      cta: 'Πρωιμη Προσβαση',
    },
    hero: {
      badge: 'Δεχομαστε beta hosts — Μονο Ελλαδα',
      headline1: 'Η ελληνική σου ενοικίαση.',
      headline2: 'Βελτιστοποιημένη με AI.',
      headline3: 'Αβίαστα.',
      subhead: 'Δυναμική τιμολόγηση, βελτιστοποίηση καταχωρήσεων και έξυπνη επικοινωνία επισκεπτών — φτιαγμένο αποκλειστικά για την ελληνική αγορά βραχυχρόνιας μίσθωσης. Σταμάτα να χάνεις έσοδα.',
      cta1: 'Γινε μελος Beta — Δωρεαν',
      cta2: 'Δες Πως Λειτουργει',
      stats: [
        { num: '+28%', label: 'Μεση Αυξηση Εσοδων' },
        { num: '200K+', label: 'Ελληνικες Καταχωρησεις' },
        { num: '€7B', label: 'Ετησιος Ογκος Κρατησεων' },
        { num: '3 λεπτά', label: 'Χρονος Εγκαταστασης' },
      ],
    },
    features: {
      tag: 'Τι Κανει το KERDOMAX',
      heading1: 'Κάθε εργαλείο που χρειάζεσαι.',
      heading2: 'Τίποτα παραπάνω.',
      subhead: 'Φτιαγμένο για μεμονωμένους Έλληνες hosts και μικρούς διαχειριστές ακινήτων — όχι μια γενική παγκόσμια πλατφόρμα προσαρμοσμένη στην αγορά σου.',
      items: [
        {
          title: 'Υπερτοπική Δυναμική Τιμολόγηση',
          desc: 'AI εκπαιδευμένο σε ελληνικά σήματα ζήτησης, εποχικότητα νησιών, τοπικά φεστιβάλ και δεδομένα αγοράς σε πραγματικό χρόνο. Όχι ένας παγκόσμιος αλγόριθμος που προσπαθεί να μαντέψει τη Σαντορίνη τον Αύγουστο.',
        },
        {
          title: 'Βελτιστοποίηση Καταχώρησης',
          desc: 'Τίτλοι, περιγραφές και προτάσεις σειράς φωτογραφιών δημιουργημένα από AI — προσαρμοσμένα σε αυτό που πραγματικά μετατρέπει στο Airbnb και Booking.com για ελληνικά ακίνητα.',
        },
        {
          title: 'Έξυπνη Επικοινωνία Επισκεπτών',
          desc: 'Έξυπνα, πολύγλωσσα πρότυπα με ελληνικό πολιτισμικό πλαίσιο. Χειρίζεται αυτόματα κοινά ερωτήματα ώστε να επικεντρωθείς στους επισκέπτες σου, όχι στα εισερχόμενα.',
        },
        {
          title: 'Ειδοποιήσεις Κανονισμών',
          desc: 'Οι κανονισμοί βραχυχρόνιας μίσθωσης στην Ελλάδα εξελίσσονται γρήγορα. Το KERDOMAX παρακολουθεί τις αλλαγές και σε ειδοποιεί πριν επηρεάσουν τις καταχωρήσεις σου — χωρίς νομικές εκπλήξεις.',
        },
        {
          title: 'Πίνακας Εσόδων',
          desc: 'Προβολή σε πραγματικό χρόνο του ADR, του ποσοστού πληρότητας και των εσόδων σε όλα τα ακίνητα και πλατφόρμες σου — σε ένα μέρος, στα ελληνικά ή αγγλικά.',
        },
        {
          title: 'Συγχρονισμός Πολλαπλών Καναλιών',
          desc: 'Διαχειρίσου Airbnb, Booking.com, VRBO και άλλα από έναν κόμβο. Οι ενημερώσεις τιμών διαδίδονται άμεσα — χωρίς διπλές κρατήσεις, χωρίς αποκλίσεις.',
        },
      ],
    },
    howItWorks: {
      tag: 'Ξεκινωντας',
      heading: 'Έτοιμο σε λίγα λεπτά',
      subhead: 'Δεν απαιτούνται τεχνικές γνώσεις. Χωρίς μακροχρόνια συμβόλαια. Απλώς συνδέσου, βελτιστοποίησε και κέρδισε περισσότερα.',
      steps: [
        {
          title: 'Σύνδεσε τις Καταχωρήσεις σου',
          desc: 'Συνδέσου με τους λογαριασμούς Airbnb και Booking.com με ασφάλεια με ένα κλικ. Το KERDOMAX εισάγει αυτόματα τα ακίνητα, τα ημερολόγια και τα ιστορικά δεδομένα σου.',
        },
        {
          title: 'Το AI Βαθμονομεί για την Αγορά σου',
          desc: 'Το μοντέλο μας αναλύει την ακριβή τοποθεσία σου, τον τύπο ακινήτου και το ανταγωνιστικό τοπίο γύρω σου — και στη συνέχεια δημιουργεί μια εξατομικευμένη στρατηγική τιμολόγησης και περιεχομένου.',
        },
        {
          title: 'Έλεγχος & Έγκριση',
          desc: 'Παραμένεις εσύ υπεύθυνος. Έλεγξε τις προτάσεις AI πριν εφαρμοστούν. Ορίσε όρια, παράκαμψε οτιδήποτε θέλεις και χτίσε εμπιστοσύνη με το σύστημα με την πάροδο του χρόνου.',
        },
        {
          title: 'Παρακολούθα την Αύξηση των Εσόδων',
          desc: 'Οι τιμές προσαρμόζονται αυτόματα γύρω από εκδηλώσεις, εποχές και μεταβολές ζήτησης. Ο πίνακας ελέγχου παρακολουθεί τον αντίκτυπο σε πραγματικό χρόνο — έσοδα, πληρότητα, ADR.',
        },
      ],
    },
    pricing: {
      tag: 'Τιμολογηση',
      heading: 'Απλά, διαφανή πλάνα',
      subhead: 'Χωρίς ποσοστά επί των κρατήσεων. Χωρίς κρυφές χρεώσεις. Σταθερή μηνιαία συνδρομή που αποσβένεται μετά από μία μόνο βελτιστοποιημένη κράτηση.',
      mostPopular: 'Πιο Δημοφιλες',
      tiers: [
        {
          name: 'Basic',
          period: 'ανά μήνα · 1–2 ακίνητα',
          features: [
            'Μηχανή δυναμικής τιμολόγησης',
            'Βασικές προβλέψεις πληρότητας',
            'Βασικά πρότυπα μηνυμάτων επισκεπτών',
            'Συγχρονισμός 1–2 καναλιών OTA',
            'Πίνακας εσόδων',
            'Ειδοποιήσεις κανονισμών μέσω email',
          ],
          cta: 'Εναρξη Δωρεαν Beta',
        },
        {
          name: 'Pro',
          period: 'ανά μήνα · 3–10 ακίνητα',
          features: [
            'Όλα του Basic',
            'Προηγμένο μοντέλο τιμολόγησης AI',
            'Πλήρης βελτιστοποίηση καταχωρήσεων',
            'Συγχρονισμός πολλαπλών καναλιών (όλα τα OTA)',
            'Έξυπνο AI επικοινωνίας επισκεπτών',
            'Προτεραιότητα υποστήριξης',
          ],
          cta: 'Εναρξη Δωρεαν Beta',
        },
        {
          name: 'Business',
          period: 'ανά μήνα · 10+ ακίνητα',
          features: [
            'Όλα του Pro',
            'Πλήρης σουίτα αυτοματισμού',
            'Πρόσβαση API',
            'Εξατομικευμένες αναφορές απόδοσης',
            'Αποκλειστικός διαχειριστής λογαριασμού',
            'Εξατομικευμένη εισαγωγή',
          ],
          cta: 'Επικοινωνια με Πωλησεις',
        },
      ],
    },
    trust: {
      tag: 'Γιατι KERDOMAX',
      heading1: 'Αριθμοί που μετράνε',
      heading2: 'για Έλληνες hosts',
      subhead: 'Δημιουργήθηκε μετά από συνομιλίες με δεκάδες hosts σε Αθήνα, Κρήτη και τα νησιά του Αιγαίου. Αυτά είναι τα αποτελέσματα που μας είπαν ότι χρειάζονται.',
      metrics: [
        { num: '+28%', label: 'Μεση αυξηση εσοδων' },
        { num: '3×', label: 'Ταχυτερη εγκατασταση' },
        { num: '94%', label: 'Ερωτηματα αυτοματα' },
        { num: '€5B+', label: 'Αγορα για την οποια φτιαχτηκε' },
      ],
      testimonials: [
        {
          quote: 'Η χειροκίνητη διαχείριση τιμών κατά την υψηλή σεζόν στη Μύκονο ήταν εφιάλτης. Το τοπικό σήμα που ένα AI σαν αυτό μπορεί να αξιοποιήσει σε λεπτά μου έπαιρνε ώρες κάθε εβδομάδα.',
          name: 'Νίκος Π.',
          meta: '4 βίλες, Μύκονος',
        },
        {
          quote: 'Η πρόκληση δεν είναι μόνο η τιμολόγηση — είναι τα μηνύματα επισκεπτών, οι καταχωρήσεις, οι κανονισμοί. Χρειάζομαι ένα εργαλείο που τα χειρίζεται όλα, όχι τρεις ξεχωριστές συνδρομές.',
          name: 'Μαρία Σ.',
          meta: '8 διαμερίσματα, Αθήνα',
        },
        {
          quote: 'Το PriceLabs είναι ισχυρό αλλά δεν ξέρει ότι η εβδομάδα του Πάσχα στη Ρόδο είναι εντελώς διαφορετική από την ίδια εβδομάδα στη Θεσσαλονίκη. Το τοπικό πλαίσιο είναι τα πάντα.',
          name: 'Γιάννης Δ.',
          meta: '12 μονάδες, Ρόδος & Κρήτη',
        },
      ],
    },
    beta: {
      tag: 'Περιορισμενη Beta',
      heading1: 'Γίνε πρώτος.',
      heading2: 'Δες αποτελέσματα.',
      subhead: 'Εντάσσουμε έναν περιορισμένο αριθμό Ελλήνων hosts στο πρόγραμμα beta μας. Δωρεάν πρόσβαση ενώ επικυρώνουμε — τα σχόλιά σου διαμορφώνουν το προϊόν.',
      bullets: [
        'Δεν απαιτείται πιστωτική κάρτα',
        'Δωρεάν κατά τη διάρκεια της beta',
        'Περιορισμένες θέσεις διαθέσιμες',
      ],
      form: {
        firstName: 'Ονομα',
        lastName: 'Επωνυμο',
        email: 'Διευθυνση Email',
        city: 'Πολη / Περιοχη',
        properties: 'Ακινητα',
        challenge: 'Μεγαλυτερη Προκληση;',
        optional: '(προαιρετικό)',
        selectPlaceholder: 'Επιλογή…',
        propertyOptions: ['1 ακίνητο', '2 ακίνητα', '3–5 ακίνητα', '6–10 ακίνητα', '10+ ακίνητα'],
        cityPlaceholder: 'Αθήνα, Κρήτη…',
        challengePlaceholder: 'Τιμολόγηση στη χαμηλή σεζόν, επικοινωνία επισκεπτών, κανονισμοί…',
        submit: 'Αιτηση Beta Προσβασης →',
        privacy: 'Με την εγγραφή σας συμφωνείτε να λαμβάνετε ενημερώσεις προϊόντος και την πρόσκλησή σας για beta. Χωρίς spam, ποτέ. Διαγραφή οποιαδήποτε στιγμή.',
      },
      success: {
        heading: 'Είσαι στη λίστα!',
        body: 'Θα επικοινωνήσουμε σύντομα με την πρόσκλησή σου για beta. Κράτα ένα μάτι στα εισερχόμενά σου.',
      },
    },
    footer: {
      tagline: 'Βελτιστοποίηση Εσόδων με AI για Έλληνες Ιδιοκτήτες Βραχυχρόνιας Μίσθωσης',
      links: ['Πολιτική Απορρήτου', 'Όροι', 'Επικοινωνία'],
      copyright: '© 2026 KERDOMAX. Με επιφύλαξη παντός δικαιώματος.',
    },
  },
}

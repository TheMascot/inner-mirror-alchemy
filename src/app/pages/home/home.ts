import { Component, signal } from '@angular/core';
import { FacebookCta } from '../../shared/components/facebook-cta/facebook-cta';
import { siteConfig } from '../../core/config/site.config';

interface RecognitionCard {
  num: string;
  title: string;
  description: string;
}

interface MethodItem {
  title: string;
  description: string;
}

interface VideoItem {
  title: string;
}

interface FaqItem {
  question: string;
  answer: string;
  isOpen: ReturnType<typeof signal<boolean>>;
}

@Component({
  selector: 'app-home-page',
  imports: [FacebookCta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  readonly facebookUrl = siteConfig.facebookGroupUrl;
  // readonly contactEmail = siteConfig.contactEmail;

  readonly recognitionCards: RecognitionCard[] = [
    {
      num: '01',
      title: 'Újra ugyanoda jutsz',
      description:
        'Másik férfi, másik kapcsolat, mégis hasonló bizonytalanság vagy érzelmi elérhetetlenség jelenik meg.',
    },
    {
      num: '02',
      title: 'Többet adsz, mint amennyit kapsz',
      description:
        'Megérteni, segíteni és kivárni próbálsz, miközben háttérbe kerülnek a saját igényeid.',
    },
    {
      num: '03',
      title: 'Nem félkapcsolatra vágysz',
      description:
        'Harmonikus, felvállalt, hosszú távú párkapcsolatra vágysz – nem arra, hogy állandóan találgass.',
    },
    {
      num: '04',
      title: 'Ésszel már tudod',
      description:
        'Lehet, hogy pontosan látod, mit kellene másképp csinálnod, de a helyzetekben a régi minta veszi át az irányítást.',
    },
    {
      num: '05',
      title: 'Nem érted, miért pont ő',
      description:
        'Vannak férfitípusok, akik valamiért sokkal mélyebben megérintenek. Ennek is lehet belső oka.',
    },
    {
      num: '06',
      title: 'Mélyebb választ keresel',
      description:
        'Nem hibást keresel. Meg akarod érteni önmagad és a kapcsolataid mögött működő összefüggéseket.',
    },
  ];

  readonly methodItems: MethodItem[] = [
    {
      title: 'Asztrológia',
      description: 'a születési képleted mint a belső térképed szimbolikus nyelve.',
    },
    {
      title: 'Csung Jüan Csikung',
      description: 'kapcsolat az energiáiddal, a tested jelzéseivel és a belső erőddel.',
    },
    {
      title: 'Önismeret',
      description: 'hogy a felismerésből valódi belső változás szülessen.',
    },
  ];

  readonly videos: VideoItem[] = [
    { title: 'Miért nem elég „bevonzani" a megfelelő férfit?' },
    { title: 'Mit mutat meg rólad valójában a születési képleted?' },
    { title: 'Miért vonzódsz újra és újra hasonló férfitípushoz?' },
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'Kinek szól a csoport?',
      answer:
        'Olyan nőknek, akiknek elegük van az ismétlődő negatív párkapcsolati mintákból, és harmonikus, felvállalt, hosszú távú kapcsolatra vágynak. Nem szükséges előképzettség, csak nyitottság a mélyebb önismeretre.',
      isOpen: signal(false),
    },
    {
      question: 'Mi történik a csoportban?',
      answer:
        'Videókban boncolom le a párkapcsolati teremtéssel és a bulvárasztrológiával kapcsolatos tévhiteket, és megmutatom a mélyebb energetikai és asztrológiai összefüggéseket. Az ingyenes tartalmak mellett élő csoportos foglalkozásokat és workshopokat is tartok.',
      isOpen: signal(false),
    },
    {
      question: 'Kell-e ismernem az asztrológiát?',
      answer:
        'Egyáltalán nem. A születési képletet nem jóslásra, hanem önismereti eszközként használjuk. Mindent elmagyarázok, nincs szükség előzetes tudásra.',
      isOpen: signal(false),
    },
    {
      question: 'Ingyenes a csoport?',
      answer:
        'Az alapcsoport ingyenes, és ott is rengeteg értékes tartalom található. Egyes mélyebb programok és workshopok fizetősek – ezekről mindig előre tájékoztatom a csoportot.',
      isOpen: signal(false),
    },
  ];

  toggleFaq(item: FaqItem): void {
    item.isOpen.update((v) => !v);
  }
}

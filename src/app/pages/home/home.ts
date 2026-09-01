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
  readonly facebookPrivateUrl = siteConfig.facebookPrivateUrl;
  // readonly contactEmailParts = siteConfig.contactEmail;

  readonly recognitionCards: RecognitionCard[] = [
    {
      num: '01',
      title: 'Amikor nem érted, miben vagy...',
      description:
        'Hosszútávú, felvállalt, boldog párkapcsolatra vágysz, mégis egymást követik az olyan kapcsolatok az életedben, ' +
        'amiben rákérdezni is félsz, hogy: Kik vagyunk mi egymásnak?',
    },
    {
      num: '02',
      title: 'Nem érted, miért pont Ő?',
      description:
        'Már felfedezted, hogy bizonyos típusú férfiak vonzanak, mégsem tudsz harmonikus kapcsolatban lenni velük. ' +
        'Ha megérted, mit tükröz a társ a saját árnyékszemélyiségedből, a kapcsolat is mélyebb és boldogabb lesz.',
    },
    {
      num: '03',
      title: 'Amikor a másik csak elvesz...',
      description:
        'Az új kapcsolat mindig feldob, de a kezdeti mézeshetek után mindig azt érzed, hogy a másik elkezdi leszívni' +
        ' az energiád, és nem tudod, hogyan változtass ezen.',
    },
    {
      num: '04',
      title: 'Attól félsz, hogy újra ugyanaz történik majd...',
      description:
        'Azt érzed, hogy bénító félelem jár át, már a gondolatától is, hogy újból ismerkedni kezdj. ' +
        'Biztos akarsz lenni abban, hogy a következő tényleg jobb lesz.',
    }
  ];

  readonly videos: VideoItem[] = [
    { title: 'Miért nem elég „bevonzani" a megfelelő férfit?' },
    { title: 'Mit mutat meg rólad valójában a születési képleted?' },
    { title: 'Miért vonzódsz újra és újra hasonló férfitípushoz?' },
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'Kinek szól a párkapcsolati önismereti csoport?',
      answer:
        'Olyan nőknek, akiknek elegük van az ismétlődő negatív párkapcsolati mintákból, és harmonikus, felvállalt, hosszú távú kapcsolatra vágynak. Nem szükséges előképzettség, csak nyitottság a mélyebb önismeretre.',
      isOpen: signal(false),
    },
    {
      question: 'Mi történik a csoportban?',
      answer:
        'Videókban oldom fel a párkapcsolati teremtéssel és a bulvárasztrológiával kapcsolatos tévhiteket, és' +
        ' megmutatom a mélyebb energetikai és asztrológiai összefüggéseket ezen a területen.' + ' A születési' +
        ' képletet' +
        ' nem jóslásra, hanem önismereti eszközként használjuk.',
      isOpen: signal(false),
    },
    {
      question: 'Szükség van előzetes asztrológiai tudásra?',
      answer:
        'Egyáltalán nincs.  Mindent' +
        ' elmagyarázok.',
      isOpen: signal(false),
    },
    {
      question: 'Ingyenes a csoport?',
      answer:
        'Igen, a csoportban való részvétel teljesen ingyenes.',
      isOpen: signal(false),
    },
  ];

  toggleFaq(item: FaqItem): void {
    item.isOpen.update((v) => !v);
  }
}

import React, { Component } from "react";

/**
 * Komponent klasowy - raczej już nie używamy komponentów klasowych poza niektórymi wyjątkami
 * tj. error boundaries - bardziej zaawansowany temat ale warto kojarzyć❓❓❓
 *
 * aktualnie w projektach używa się nowszych wersji reacta 16.8+ gdzie można pisać aplikacje przy użyciu tylko
 * komponentów funkcyjnych (patrz przykłay pod kompoenetem klasowym)
 *
 * ❗❗❗ to że się już nie używa nie oznacza że nie będziecie mieć z nimi do czynienia
 * często projkety mają już kilka lat i są napisane w klasowy sposób i czasem je trzeba "utrzymywać"
 * tzn. naprawiać bugi lub rozszerzać funkcjonalności etc.
 *
 *
 */

/**
 * użyjcie tego komponentu w komponencie App - tzn zaimportujecie go do pliku App
 * i wywołajcie tak jakbyście chcieli stworzyć html-owy element:   <SimpleComponent />
 */

export default class SimpleComponent extends Component {
  render() {
    return <div>SimpleComponent</div>;
  }
}

/**
 * Jako pierwsze ćwiczenie:
 * swtórz komponent klasowy taki jak powyżej w tym samym pliku
 * niech Twój komponent zawiera wybrany napis albo jakieś inne elementy htmlowe - poexperymentuj  🧪🤔
 *
 * wywołaj/użyj komponent/u w środku komponentu SimpleComponent w taki sam sposób jak w komponencie App
 *
 */

// export default function SimpleComponent() {
//   return (
//     <div>SimpleComponent</div>
//   )
// }

// export const SimpleComponent = () => {
//   return (
//     <div>SimpleComponent</div>
//   )
// }

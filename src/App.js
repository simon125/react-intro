import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      {/* 
          Wyświetlanie warunkowe komponentów
          w js możemy wyświetlać elemnety w zależności od naszych warunków
          np jeżeli checkbox jest zaznaczony czyli np stan z useState ma wartość true
          możemy wyświetlić jakiś komponent albo go schować

          do tej pory robiliśmy już wyświetlanie warunkowe za pomocą ternary operatora
          tzn.

          jakaśZmienna ? 'In Progress' : 'Done'

          podobny efekt można osiągnąć zapisując operatora logicznego &&

          np

          jakaśZmienna && 'In Progress'

          czyli jeżeli "jakaśZmienna" ma wartość true to wyświetli nam się słowo 'In progres' 
          natomiast jezeli jest to false tekst powinien być schowany

          taka sama zasada dotyczy komponentów reactowych mozemy je wyświetlać pod określonymi warunkami
          a te warunki oczywiście konstruujemy sami

          ZADANIE
          jako zadanie dodaj dwa inputy typu radio button które będą miały ten sam name oraz inne 
          stałe value czyli np jakiś string value="wartość1"
          niech inputy ustawiają stan w tym samym komponencie 
          zmiana ta ma się wywoływać na event onChange
          wartość jaka ma być ustawiana w stanie to value wyciągnięte z eventu - czyli: event.target.value
          pamiętaj żeby zaimportować useState
      */}
    </div>
  );
}

export default App;

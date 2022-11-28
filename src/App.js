import "./App.css";
import { App1 } from "./Example";
import { Statistics } from "./Todolist/Statistics";
import { TodoForm } from "./Todolist/TodoForm";
import { TodoList } from "./Todolist/TodoList";
import { MetricsContainer } from "./components/Metrics";
import classes from "./App.module.css";
/**
 *
 * Zadanie 1
 *
 * Po wyjaśnieniu stanu w komponencie funkcyjnym stwórzmy coś w rodzaju nawigacji albo zakładek
 * jednak zamiast linków użyjemy inputów o typie radio oraz stanu komponentu w którym będziemy
 * przechowywać aktualnie wyświetlany komponent
 *
 * stwórz stan za pomocą useState który będzie trzymać unikatowy dla danego komponentu string
 * następnie na podstawie tego stringa będziemy wyświetlać dany komponent
 *
 *
 * np.
 *
 * if(currentComponent === 'homework-1'){
 *  return <MetricsContainer/>
 * }
 *
 * if(currentComponent === 'homework-2'){
 *  return <ProfileComponent/>
 * }
 *
 *
 * Zadanie 2
 *
 * refaktoryzacja - nieodłączny proces wytwarzania oprogramowania
 * dodajmy folder pages (mam nadzieje że pamiętasz o tym folderze z jednej z pierwszych lekcji)
 * będzie to folder na "zbiorcze" pliki które będziemy wyświeltać w zależności od "nawigacji" oraz
 * zmiennej currentComponent - swoją drogą dla jasności żeby zmienne oznaczały faktycznie to czym są
 * możemy również zmienić nazwe zmiennej z currentComponent na currentPage oraz funkcje setującą
 *
 */

function App() {
  const todos = [
    { todoName: "Poczuyć się JSa", status: true },
    { todoName: "Poczuyć się CSSa", status: false },
    { todoName: "Poczuyć się HTMLa", status: false },
    { todoName: "Poczuyć się Reacta", status: false },
  ];

  return (
    <div className={`App ${classes.metricsContainer} ${classes.appTest}`}>
      <TodoForm />
      <Statistics todoList={todos} />
      <TodoList todoList={todos} test="hej grupo" />

      {/* <MetricsContainer /> */}
    </div>
  );
}

export default App;

/**
 * prework
 *
 * utwórz 2 elementową tablicę w której pierwszym elementem będzie jakaś liczba
 * a 2 elementem będzie referencja do dobrowolnej funkcji (stwórz tę funkcję)
 *
 * utwórz funckje która zwraca tablice dwu elementową gdzie piewrszym elementem tej tablicy jest liczba a drugim elementem
 * jest string
 * wywołaj tą funckję a następnie wykonsoluj
 * to co zwraca funkcja używająć notacji tablicowej np conosle.log(twojaTablica[0])
 *
 * utwórz funckje która zwraca tablice dwu elementową gdzie piewrszym elementem tej tablicy jest liczba a drugim elementem
 * jest funckja np funckja która ma w sobie wywołanie console.log();
 * uwaga: będziesz musiał/a stworzyć funkcje w funckji żeby móć zwrócić tą funkcje jako drugi element tablicy
 *
 * stwórz funckje calculate która przyjmuje obiekt jako parametr nazwijmy ten parametr props
 * niech props będzie obiektem który ma w sobie takie pola jak
 * numbers - tablica z numberami
 * oraz calculationMethod i to niech będzie znak np: '+' '-'
 * czyli podstawowe działania matematyczne (typ tych znaków to string)
 *
 * niech funkcja ta wykona określone działanie w calculationMethod
 * na wszystkich liczbach z tablicy numbers
 *
 * przykładowy obiekt jaki możemy przekazać do funckji to
 *
 * const props = {
 * numbers: [1,2,3],
 * calculationMethod: '+'
 * }
 *
 * calculate(props); // wynik powinien być 6
 *
 */

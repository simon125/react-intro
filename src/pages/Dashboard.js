import React from "react";

export const Dashboard = () => {
  return (
    <div>
      {/* 
        pliki z folderu pages często są stosowane jako "opakowanie" na komponenty z danej strony
        są czymś w rodzaju komponentami zbiorczymi

        częstą praktyką jest przypisywanie pliku page do konkretnego routa/strony
        czym jest route❓

        route to z angielskiego ścieżka i tutaj oznacza element w URLu np.

        www.twojastrona.pl/about
        www.twojastrona.pl/dashboard

        route-ami w tym przypadku są /about oraz /dashboard
        w każdej poszczególnej roucie możemy wyświetlać np inny page component

    */}

      {/* 

        page dashboard mógłby mieć dużo komponentów wyświetlających dane np: 
        wykresy, tabele, grafy, metryki

        */}
    </div>
  );
};

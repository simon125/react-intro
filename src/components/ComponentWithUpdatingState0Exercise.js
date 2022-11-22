import React, { Component } from "react";

export default class ComponentWithUpdatingState0Exercise extends Component {
  state = {
    todoName: "",
    status: false,
  };

  render() {
    return (
      <div>
        {/* 
            zadanie ewentualnie zadanie bardziej złozone dla chętnych poniżej 🧐

            Stwórz formularz który będzie mógł zmienić stan tego komponentu 
            do tego celu możesz użyć tagów form, input typu text oraz checkbox
            wymienione elementy musisz obsłużyć za pomocą metod handlująych oraz eventów 

            np.
            <input type="checkbox" onChange={this.handleStatusChange} />

            stan formularza/inputów możesz wyświetlić w konsoli albo na ekranie po submicie (<form onSubmit={this.handleSubmit}></form>) bądź
            na onClicku po przyciśnieciu przycisku (<button onClick={this.handleClick}>Click me</button>)

        */}
        <input type="checkbox" name="" id="" />
      </div>
    );
  }
}

// import React, { Component } from "react";

// export default class ComponentWithUpdatingState0Exercise extends Component {
//   state = {
//     todoName: "",
//     status: false,
//     difficulty: 1,
//     dueDate: new Date(),
//   };

//   render() {
//     return (
//       <div>
//         {/*
//             zadanie bardziej złożone

//             Stwórz formularz który będzie mógł zmienić stan tego komponentu
//             do tego celu możesz użyć tagów form, input (różnego typu np. text, checkbox, date ), selct + options
//             wymienione elementy musisz obsłużyć za pomocą metod handlująych oraz eventów

//             np.
//             <input onChange={this.handleTodoNameChange} />

//             <select onChange={this.handleDifficultyChange}> </select>

//             stan formularza/inputów możesz wyświetlić w konsoli po submicie bądź
//             na onClicku po przyciśnieciu przycisku

//             ⭐
//             dodaj walidacje pól wyświetl komunikat np przy pomocy funkcji alert()
//             jeżeli user zostawi puste pole todoName
//         */}
//         <input
//           type="date"
// {
//   /* przeanalizuj w konsoli co zawiera obiekt e.target */
// }
//           onChange={(e) => console.log(e.target.valueAsDate)}
//         />
//       </div>
//     );
//   }
// }

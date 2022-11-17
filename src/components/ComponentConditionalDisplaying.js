import React, { Component } from "react";

export class ChildComponent1 extends Component {
  render() {
    return <div>ChildComponent1</div>;
  }
}

export class ChildComponent2 extends Component {
  render() {
    return <div>ChildComponent2</div>;
  }
}

export class ParentComponent extends Component {
  state = {
    showText: true,
    showChild1: true,
    showChild2: false,
  };

  render() {
    return (
      <div>
        <p>ComponentConditionalDisplaying</p>

        <button
          onClick={() => this.setState({ showText: !this.state.showText })}
        >
          Toggle text
        </button>

        {this.state.showText ? <h2>CZEŚĆ GRUPO</h2> : null}

        {/* 
           Dodaj funkcjonalność odpowiedzialną za chowanie elementu ChildComponent1
           do tego celu wykorzystaj jeden z poniższych buttonów dodaj do niego click event handlera
           tzn dodaj funkcje do atrybutu onClick  która będzie zmieniała stan (this.state.showChild1) 
           czyli funkcja która będzie wywoływana po kliknięciu przycisku ma wywołać metode
           this.setState z odpowiednimi parametrami
        */}

        <button>Toggle ChildComponen1</button>
        <button>Toggle ChildComponen2</button>

        <ChildComponent1 />
        <ChildComponent2 />
      </div>
    );
  }
}

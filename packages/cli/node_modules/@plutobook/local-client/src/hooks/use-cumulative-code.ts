import { useTypedSelector } from "./use-typed-selector";

export const useCumulativeCode  = (cellId: string)=> {
     return useTypedSelector((state) => {
        const { data, order } = state.cells;
        const orderedCells = order.map(id => data[id])

        const showFunc = `
        import _React from 'react';
        import _ReactDOM from 'react-dom';
        var show = (value) => {
          const root = document.querySelector('#root');
    
          if (typeof value === 'object') {
            if (value.$$typeof && value.props) {
              _ReactDOM.render(value, root);
            } else {
              root.innerHTML = JSON.stringify(value);
            }
          } else {
            root.innerHTML = value;
          }
        };
      `;
        const showFuncNoop = 'var show = () => {}';
        const cumulativeCode = [`
        const ann = ()=> {
            console.log('Addison loves Ann <3')
        }
        const secret_feature = () => {
            console.log('👉😹👈')
        }
        const secret_value = '👉😹👈'
        const naming_history = ()=>{
            console.log("JUNOBOOK is named after Juno the Roman deity. In ancient Roman mythology, Juno is the sister of Jupiter. Since this project was heavily inspired by Jupyter Notebooks, it seemed like a fitting name 👉😹👈 (I was originally going to call it plutobook, but that sounds lame!)")
        }

        `];
        for (let c of orderedCells) {
          if (c.type === 'code') {
            if (c.id === cellId) {
              cumulativeCode.push(showFunc);
            } else {
              cumulativeCode.push(showFuncNoop);
            }
            cumulativeCode.push(c.content);
          }
          if (c.id === cellId) {
            break;
          }
        }
        return cumulativeCode;
      }).join('\n');


};
import React from 'react';
import Card from './Card';
import Header from './Header';
import './index.css';
import Sdata from './Sdata';

// let card = (value) => {
//   return (
//     <Card
//       src={value.imgsrc}
//       title={value.title}
//       link={value.links}
//       name={value.sname}
//     />
//   );
// }

const App = () => {
    return (
        <>
            <Header />
            {Sdata.map((value) => {
                return (
                    <Card
                        key={value.id}
                        src={value.imgsrc}
                        title={value.title}
                        link={value.links}
                        name={value.sname}
                    />
                );
            })}
        </>
    );
}

export default App;
import '../App.css';

import Hello, { Hello1, Hello2, Hello3 } from './Hello';
import BasicCC from './ClassComponent1';
import Props from './PropsCC';
import PropsFC from './PropsFC';
import Onclick from './OnClick';
import ClassComponent from './ClassComponent';
import ClassComponent1 from './ClassComponent1';
import ClassComponent2 from './ClassComponent2';
import ClassComponent3 from './ClassComponent3';
import DisplayText from './DisplayText';



 export default function App(){
    return(
        <>
        <DisplayText/>
       <Hello/>
       <Hello1/>
       <Hello2/>
       <Hello3/>
       <ClassComponent/>
      <ClassComponent1/>
      <ClassComponent2/>
      <ClassComponent3/>
       <Props name="Akki" address="Telangana"/>
       <PropsFC name="Akhila" address="Telangana" score="90%"/>
       <Onclick/>
        </>
    )
}

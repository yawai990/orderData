import {GrLocation} from 'react-icons/gr';
import {ImLocation2} from 'react-icons/im';
import {BsFillPhoneVibrateFill} from 'react-icons/bs';
import {AiFillFileText} from 'react-icons/ai';

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.address}</span>
  </div>
);
export const NincheGrid=[
  {    
    field:'shopName',
    headerText:"ShopName",
   width: '140',
   textAlign: 'Center' 
 },
 {
  field:'phoneNumber',
  headerText:'Phone No:',
    width: '140',
    textAlign: 'Center',
},  
{
  field:'blue',
  headerText:'Blue',
  width: '70',
  textAlign: 'Center',
  },
{
  field:'dark',
  headerText:'Dark',
  width: '70',
  textAlign: 'Center',
  },
  {
    field:'grape',
    headerText:'Grape',
    width: '75',
    textAlign: 'Center',
    },
  {
    field:'pome',
    headerText:'Pome',
    width: '75',
    textAlign: 'Center',
    },
  {
    field:'moji',
    headerText:'Moji',
    width: '70',
    textAlign: 'Center',
    },
  {
    field:'pina',
    headerText:'Pina',
    width: '70',
    textAlign: 'Center',
    },
{ 
  field:'sot',
  headerText:"Sale of Types",
  width: '120',
  textAlign: 'Center'
   },
   { 
   field:'date',
   headerText:"Date",
   width: '110',
   format:'dMy',
   textAlign: 'Center' 
 },
  { 
   field:'address',
   headerText:"Address",
    width: '140',
    textAlign: 'Center',
    template:gridEmployeeCountry
  },
];
export const ordersGrid = [
    {    
       field:'shopName',
       headerText:"ShopName",
      width: '170',
      textAlign: 'Center' 
    },
    {
      field:'phoneNumber',
      headerText:'Phone No:',
        width: '120',
        textAlign: 'Center',
    },
    {
    field:'lglf14',
    headerText:"LGLF-14",
    width: '100',
    textAlign: 'Center',
    },
    { 
    field:'spk14',
    headerText:"SPK-14",
    width: '100',
     textAlign: 'Center'
     },
    { 
    field:'gtw24',
    headerText:"GTW-24",
    width: '100',
    textAlign: 'Center'
     },
    { 
    field:'sot',
    headerText:"Sale of Types",
    width: '120',
    textAlign: 'Center'
     },
     { 
     field:'date',
     headerText:"Date",
     width: '120',
     format:'dMy',
     textAlign: 'Center' 
   },
    { 
     field:'address',
     headerText:"Address",
      width: '150',
      textAlign: 'Center',
      template:gridEmployeeCountry
    },
  ];

  export const navLink =[
    {
      name: 'Home',
      icon: ''
    },
    {
      name: 'Mass',
      icon: ''
    },
    {
      name: 'Ninche',
      icon: ''
    },
    {
      name: 'Form',
      icon: ''
    },
    {
      name:'Contact',
      icon:''
    }
  ];

  export const contactData =[
    {
      id:1,
      icon:<ImLocation2 />,
      name:'address',
      desc:'Ottar Myoe Thit, Bago'
    },
    {
      id:2,
      icon:<BsFillPhoneVibrateFill />,
      name:'phone',
      desc:'09 111 222 333'
    },
    {
      id:3,
      icon:<AiFillFileText />,
      name:'email',
      desc:'abcdefg@gmail.com'
    },
  ]
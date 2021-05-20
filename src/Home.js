
export default function Home() {
    var ID=1;
    var vPredmeti=[];
    const Predmeti=["Osnove programiranja","Projektiranje mobilnih aplikacija","Programiranje mobilnih aplikacija","CMS sustavi","Skriptni programski jezici","Objektno i orijentirano programiranje","Programiranje u .NET okolini","Osnove web programiranja","Web programiranje na strani poslužitelja"]
    Predmeti.forEach(x => {
        if(x=="Osnove programiranja" || x=="Objektno i orijentirano programiranje" || x=="Osnove web programiranja" || x=="Programiranje u .NET okolini"){
            var Objekt={id:ID++,naziv:x,prolaz:"prolaz"};
        }
        else{
            var Objekt={id:ID++,naziv:x,prolaz:"nijeProlaz"};
        }
        vPredmeti.push(Objekt);
    }); 
    const listItems = vPredmeti.map((vPredmeti) =>
    <li className={vPredmeti.prolaz} value={vPredmeti.prolaz} key={vPredmeti.id}>{vPredmeti.naziv}</li>
);

return <ul >{listItems}</ul>;
  }
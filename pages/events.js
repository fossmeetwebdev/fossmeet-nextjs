import Card from "../components/card/card";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Cards1 from "../components/card1/cards1";
import Script from "next/script";
export default function Home() {
    return (
        <>
    
      <Header/>
      <p style={{fontFamily: '"JetBrains Mono", monospace', fontWeight: "bold", fontSize:48 , marginLeft:30,marginTop:30}}>Day 1</p>
      <div className="row">
      <div style={{marginTop:20, marginLeft:30}} className="col-lg-4 col-md-12 col-sm-12">
      <Cards1/>
      </div>
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "crd3">
      <Card/>
      </div>
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "crd2">
      <Card/>
      </div>
      </div>
      <div className="row">
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "crd1">
      <Card/>
      </div>
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "crd5">
      <Card/>
      </div>
      </div>
      <p id = "day2">Day 2</p>
      <div className="row">
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "crd6">
      <Card/>
      </div>
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "crd7">
      <Card/>
      </div>
      </div>
      <div className="row">
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "crd8">
      <Card/>
      </div>
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "crd9">
      <Card/>
      </div>
      <div  className="col-lg-3 col-md-12 col-sm-12" id = "fnl-crd">
      <Cards1/>
      </div>
      </div>
      <hr className="hrzline"/>
      </>
      
        )
  }
  

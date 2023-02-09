// import "./dismissHeader.css";
import { useState } from "react";
import { AiFillThunderbolt,AiFillCloseCircle } from "react-icons/ai";
import { Button } from "react-bootstrap";
export default function DismissHeader()
{
    const [show,setShow]=useState(true)

    const handleShow=()=>{
        setShow(false)
    }

    return(
        <>       
            {show &&
            <div className="dismissContainer" style={{height: "2.5rem", color: "white", display: "flex", alignItems: "center", backgroundColor:"#0029e6", backgroundImage:"linear-gradient(43deg, #0029e6 0%, #d21618 46%, #fff170 100%)" }}>
            <div className="dismissText" style={{textAlign: "center", width: "100%" }}><h6><AiFillThunderbolt id="thunder" style={{color: "yellow"}}/>Transform your spreadsheet into a powerful search and insights engine with polymer search. <a style={{color: "inherit !important"}} href="https://www.polymersearch.com/?utm_source=aws" target="_blank" rel="noreferrer">Learn more.</a></h6></div>
            <div className="dismissButton" style={{marginRight: "1.2rem"}}><Button variant="none" onClick={handleShow} style={{color:"white"}}><h4><AiFillCloseCircle/> </h4></Button></div>
            </div>
            }
        </>
    )
};
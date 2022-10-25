import React, { useState } from "react";
export default function Textform(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    };

    const handleloclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
    };

    const handleclear = () => {
        let newText = ('');
        setText(newText);
        props.showAlert("Text Cleared","success")
    };

    const handleSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    }

    // const handleFirst = () => {
    //     let newText = "";
    //     let words = text.split(" ");
    //     words.forEach((words) =>{
    //         let firstchar = words.charAt(0).toLocaleUpperCase;
    //         newText = newText + (firstchar + words.slice(1)) + " ";
    //     });
        
    //     setText(newText);
    // };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{backgroundColor: props.mode==='light'?'white':'grey' ,color: props.mode==='light'?'black':'white'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleloclick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleclear}>
                    Clear Text
                </button>
                {/* <button className="btn btn-primary mx-2" onClick={handleFirst}>
                    Capitalize First Letter
                </button> */}
                <button className="btn btn-primary mx-2 my-2" onClick={handleSpace}>
                    Remove Extra Space
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
            </div>
        </>
    );
}

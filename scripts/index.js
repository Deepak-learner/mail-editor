    var object = {
        isBold:false,
        isItalic:false,
        requiredCCBCC:true,
        TextArea: document.getElementById("TextArea"),
        ccbcc: document.getElementById("CCBCC"),
    };

    document.getElementById("to").addEventListener("keydown",function(e){
        if(e.code=="Space"||e.code=="Tab")
        {
            let val = document.getElementById("to").value;
            document.getElementById("to").value = val + "";
        }
    });

    function boldText() {
        if(object.isBold==true)
        {
            object.TextArea.style.fontWeight = 'normal';
            object.isBold = false;
        }
        else{
            object.TextArea.style.fontWeight = '800';
            object.isBold = true;
        }
    }

    function italicText() {
        if(object.isItalic==false)
        {
            object.TextArea.style.fontStyle= 'italic';
            object.isItalic=true;
        }
        else{
            object.TextArea.style.fontStyle='normal';
            object.isItalic=false;
        }
    }

    function uploadFile() {
        let file = document.createElement('input');
        file.setAttribute('type','file');
        file.click();
    }

    function mailSent() {
        alert("mail Sent Successfully!");
    }


    function addCcBcc(){
        if(object.requiredCCBCC==true)
        {
            object.ccbcc.innerHTML += `
                            <div class="inputHeading">CC:
                            <input type="email" id="cc" class="inputTextBox">
                            </div>
                            <br>
                            <div class="inputHeading" >BCC:
                            <input type="email" id="bcc" class="inputTextBox"></div>
                            `;
            
            object.requiredCCBCC=false;
            document.getElementById("cc").addEventListener("keydown",function(e){
                if(e.code=="Space"||e.code=="Tab")
                {
                    let val = document.getElementById("cc").value;
                    document.getElementById("cc").value = val + ";";
                }
            });
            document.getElementById("bcc").addEventListener("keydown",function(e){
                if(e.code=="Space"||e.code=="Tab")
                {
                    let val = document.getElementById("BCC").value;
                    document.getElementById("bcc").value = val + ";";
                }
            });
        }
        else{
            object.ccbcc.innerHTML = ``;
            object.requiredCCBCC=true;
        }  
    }



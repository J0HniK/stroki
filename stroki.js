   let s = `Every body dance now! TooTooToo`;
   let symb = `o`;

        function counterSymbol(str) {
            let counter = 0;
            for (let i = 0; i <= str.length; i++) {
                if (str[i] == symb) counter++; 
            }
            console.log(`Кол-во совпадений: ${counter}`);
        }
        
    
    counterSymbol(s);
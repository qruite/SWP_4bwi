function updateTime(callback) {
    const now = new Date();
    const christmasYear = now.getFullYear();
    const christmasMonth = 11; // December is represented by 11 in JavaScript (months are zero-based)
    const christmasDay = 25;
    const christmasDate = new Date(christmasYear, christmasMonth, christmasDay);
  
    let difference = christmasDate.getTime() - now.getTime();
  
    if (difference < 0) {
      christmasDate.setFullYear(christmasYear + 1);
      difference = christmasDate.getTime() - now.getTime();
    }
  
    setInterval(() => {
      const now = new Date();
      const difference = christmasDate.getTime() - now.getTime();
  
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  
      const extractedDigits = extractDigits(days, hours, minutes);
      callback(extractedDigits);
    }, 1000);
  }
  
  function extractDigits(days, hours, minutes) {
    const dayString = days.toString().padStart(2, '0');
    const hourString = hours.toString().padStart(2, '0');
    const minuteString = minutes.toString().padStart(2, '0');
  
    const dayDigit1 = parseInt(dayString.charAt(0));
    const dayDigit2 = parseInt(dayString.charAt(1));
    const hourDigit1 = parseInt(hourString.charAt(0));
    const hourDigit2 = parseInt(hourString.charAt(1));
    const minuteDigit1 = parseInt(minuteString.charAt(0));
    const minuteDigit2 = parseInt(minuteString.charAt(1));
  
    return {
      dayDigit1,
      dayDigit2,
      hourDigit1,
      hourDigit2,
      minuteDigit1,
      minuteDigit2
    };
  }
  
  // Beispielaufruf der Funktion updateTime
  updateTime((extractedDigits) => {
    console.log(extractedDigits);
  });
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*export function updateTime() {
        const now = new Date();
    
        const christmasYear = now.getFullYear();
        const christmasMonth = 11;
        const christmasDay = 25;
        const christmasDate = new Date(christmasYear, christmasMonth, christmasDay);
    
        let difference = christmasDate.getTime() - now.getTime();
    
        if (difference < 0) {
        christmasDate.setFullYear(christmasYear + 1);
        difference = christmasDate.getTime() - now.getTime();
        }
    
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        const extractedDigits = extractDigits(days, hours, minutes);
    
        setInterval(() => {
        if (minutes > 0) {
            minutes--;
            console.log(`Days: ${extractedDigits.dayDigit1}, Hours: ${extractedDigits.hourDigit2}, Minutes: ${extractedDigits.minuteDigit2} until Christmas.`);
        }
        }, 1000);
    }

    export function extractDigits(days, hours, minutes) {
        const dayString = days.toString().padStart(2, '0');
        const hourString = hours.toString().padStart(2, '0');
        const minuteString = minutes.toString().padStart(2, '0');
    
        const dayDigit1 = parseInt(dayString.charAt(0));
        const dayDigit2 = parseInt(dayString.charAt(1));
        const hourDigit1 = parseInt(hourString.charAt(0));
        const hourDigit2 = parseInt(hourString.charAt(1));
        const minuteDigit1 = parseInt(minuteString.charAt(0));
        const minuteDigit2 = parseInt(minuteString.charAt(1));
    
        return {
            dayDigit1,
            dayDigit2,
            hourDigit1,
            hourDigit2,
            minuteDigit1,
            minuteDigit2
        };
    }

    updateTime();
    */
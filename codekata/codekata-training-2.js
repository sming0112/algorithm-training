const complexNumberMultiply = (a, b) => {
    // 여기에 코드를 작성해주세요.
    const aFirstValue = a.split('+')[0] * 1;
    const aLastValue = a.split('+')[1].slice(0, -1) * 1;
    const bFirstValue = b.split('+')[0] * 1;
    const bLastValue = b.split('+')[1].slice(0, -1) * 1;
  
    let front = (aFirstValue * bFirstValue) + ((aLastValue * bLastValue) * -1);
    let back = (aFirstValue * bLastValue + aLastValue * bFirstValue);
  
    return front + '+' + back + 'i';
  }
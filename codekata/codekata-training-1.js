function getMaxArea(height) {
    let max = 0;
  
    for (let i = 0; i < height.length; i++) {
      for (let j = height.length; j > 0; j--) {
        if (max < Math.min(height[i], height[j]) * (j - i)) {
         max = Math.min(height[i], height[j]) * (j - i) 
        }        
      }
    }
    
    return max;
  }